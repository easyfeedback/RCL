#!/usr/bin/env ts-node

import { join } from 'path'

import { execa } from 'execa'
import { copySync, outputFileSync, readFileSync, realpath, renameSync, statSync } from 'fs-extra'
import glob from 'glob'
import Listr from 'listr'
import _ from 'lodash'
import Mustache from 'mustache'
import prompts from 'prompts'
import yargs from 'yargs'

import packageJson from './package.json'

const projectRoot = process.cwd()

const app = {
  name: packageJson.name,
  version: packageJson.version,
  repoUrl: packageJson.repository.url.replace(/\.git$/, ''),
  author: packageJson.author,
}

const getArgs = async () => {
  const getArgs = async () =>
    yargs
      .scriptName(app.name)
      .version(app.version)
      .strict()
      .command('$0', 'Create a new UI component.', (yargs) =>
        yargs
          .option('appname', {
            alias: 'A',
            desc: 'Application name, can be capital, and space name',
            type: 'string',
          })
          .option('destination', {
            alias: 'D',
            desc: 'Specify destination, instead using default package folder',
            type: 'string',
          })
      )
      .epilogue(`Copyright 2021 by ${app.author} (${app.repoUrl})`).argv

  const args = await getArgs()

  return {
    filename: args.appname || '',
    filepath: args.destination || `${projectRoot}/packages`,
  }
}

const template = realpath(join(__dirname, 'template'))

type Answers = {
  name: string
  description: string
  filepath: string
  shouldRunBootstrap: boolean
  author: string
  filename: string
  repositoryUrl: string
}

const getPrompts: () => Promise<Answers> = async () => {
  const argv = await getArgs()

  const response = await prompts(
    [
      {
        type: 'text',
        name: 'name',
        message: 'Application name',
        initial: argv.filename,
      },
      {
        type: 'text',
        name: 'description',
        message: 'Application description',
      },
      {
        type: 'toggle',
        name: 'useDefaultLocation',
        message: 'Install in the default packages folder?',
        initial: true,
        active: 'yes',
        inactive: 'no',
      },
      {
        // @ts-ignore ts(2322)
        type: (prev) => (prev ? null : 'text'),
        name: 'filepath',
        message: 'Package location',
        initial: argv.filepath,
      },
      {
        type: 'toggle',
        name: 'shouldRunBootstrap',
        message: 'Do you want bootstrap the repository with lerna?',
        initial: true,
        active: 'yes',
        inactive: 'no',
      },
    ],
    {
      onCancel: () => {
        console.error('Cancelled by the user')
        process.exit(1)
      },
    }
  )

  const data: Answers = {
    name: _.kebabCase(response.name),
    description: response.description,
    filepath: `${response.filepath || argv.filepath}/${_.kebabCase(response.name)}`,
    shouldRunBootstrap: response.shouldRunBootstrap,
    author: app.author,
    filename: _.upperFirst(_.camelCase(response.name)),
    repositoryUrl: app.repoUrl,
  }

  return data
}

const init = async () => {
  const argv = await getArgs()

  const data = await getPrompts()
  const progress = new Listr()

  progress.add({
    title: `Creating component folder at ${argv.filepath}`,
    task: async (ctx: { data: Answers }) => {
      copySync(await template, ctx.data.filepath, {
        recursive: true,
        overwrite: true,
      })
    },
  })

  progress.add({
    title: 'Prepare copied files and add component data',
    task: (ctx: { data: Answers }) => {
      const replaceComponentString = '__COMPONENT_NAME__'
      const handlebarExtension = /\.hbs$/
      glob(ctx.data.filepath + '/**/*', (err, files) => {
        if (err) return
        files.forEach((file) => {
          if (!statSync(file).isFile()) return
          const content = readFileSync(file)
          const newFile = Mustache.render(content.toString(), ctx.data)
          outputFileSync(file, newFile)
          const newFileName = file.replace(handlebarExtension, '')
          renameSync(file, newFileName)
          if (!newFileName.match(replaceComponentString)) return
          renameSync(newFileName, newFileName.replace(replaceComponentString, ctx.data.filename))
        })
      })
    },
  })

  progress.add({
    title: 'Bootstrap dependencies by lerna',
    enabled: (ctx: { data: Answers }) => ctx.data.shouldRunBootstrap,
    task: () => {
      execa('yarn', ['bootstrap'])
    },
  })

  progress.run({ data })
}

init()
