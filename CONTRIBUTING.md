<!-- markdownlint-disable-file MD033 -->

# Contributing to our UI Library

Thanks for showing interest to contribute to our UI, you rock 🚀!

When it comes to open source, there are different ways you can contribute, all of which are
valuable. Here's a few guidelines that should help you as you prepare your contribution.

## Table of Contents <!-- omit in toc -->

- [Setup the Project](#setup-the-project)
- [Development](#development)
- [Think you found a bug?](#think-you-found-a-bug)
- [Proposing new or changed API?](#proposing-new-or-changed-api)
- [License](#license)

## Setup the Project

The following steps will get you up and running to contribute to our UI:

1. Fork the repo (click the <kbd>Fork</kbd> button at the top right of the
   [repo page](https://github.com/easyfeedback/RCL))

1. Clone your fork locally

   ```sh
   # With the default git CLI
   git clone https://github.com/<your_github_username>/RCL.git
   cd RCL

   # Or with the GitHub CLI
   gh repo clone <your_github_username>/RCL
   cd RCL
   ```

1. Setup all the dependencies and packages by running `yarn install` or simply `yarn`. This command
   will install all needed dependencies.

## Development

To improve our development process, we've set up tooling and systems. Our UI uses a monorepo
structure and we treat each component as an independent package that can be consumed in isolation.

### Tooling

- [Changeset](https://github.com/atlassian/changesets) for changes documentation, changelog
  generation, and release management.
- [Storybook](https://storybook.js.org/) for rapid UI component development and testing
- [Testing Library](https://testing-library.com/) for testing components and hooks

### Commands

**`yarn bootstrap`**: bootstraps the entire project and symlinks all dependencies for
cross-component development.

**`yarn dev`** or **`yarn start`**: starts storybook server and loads stories in files that end with
`.stories.tsx`.

**`yarn build`**: run build for all component packages.

**`yarn test`**: run test for all component packages.\
**`yarn test:cov`**: run test for all component packages and get the coverage.

**`yarn release`**: publish changed packages.

**`yarn pkg [package] <cmd>`**: Run a command on the specific package you're working on. You can run
`build`, `test`, `lint` commands. Also the default yarn commands like `add`, `remove` and so on a
possible.

#### Package Aliasing and Yarn Workspace

Since we're using monorepo with yarn workspaces, we can run commands within component packages
directly from the root.

Each component must named this way: `@easyfeedback/[component]`. Let's say we want to build a button
component. Here's how to do it:

```sh
yarn workspace @easyfeedback/button build
```

**Shortcut:** To make this shorter and more convenient, we've added an alias for each component in
the root `package.json`. Now you can simply do for example:

```sh
# to build
yarn pkg button build

# to test
yarn pkg button test
yarn pkg button test:cov
yarn pkg button test:watch

# to lint
yarn pkg button lint
```

This alias is particularly useful when you're working on a specific component and want to avoid
running the command for all components.

### Storybook

To test components in Storybook using `yarn dev` or `yarn start`.\
Build components in isolation with Storybook using `build:storybook`.

## Think you found a bug?

Please conform to the issue template and provide a clear path to reproduction with a code example.

## Proposing new or changed API?

Please provide thoughtful comments and some sample API code. Proposals that don't line up with our
roadmap or don't have a thoughtful explanation will be closed.

### Steps to PR

1. Fork of the RCL repository and clone your fork

2. Create a new branch out of the `main` branch. We follow the convention `[type/scope]`. For
   example `fix/accordion-hook` or `docs/menu-typo`. `type` can be either `docs`, `fix`, `feat`,
   `build`, or any other conventional commit type. `scope` is just a short id that describes the
   scope of work.

3. Make and commit your changes following the
   [commit convention](https://github.com/easyfeedback/RCL/blob/main/CONTRIBUTING.md#commit-convention).
   As you develop, you can run `yarn pkg <module> build` and `yarn pkg <module> test` to make sure
   everything works as expected. Please note that you might have to run `yarn boot` first in order
   to install all dependencies.

4. Run `yarn changeset` to create a detailed description of your changes. This will be used to
   generate a changelog when we publish an update.
   [Learn more about Changeset](https://github.com/atlassian/changesets/tree/master/packages/cli).
   Please note that you might have to run `git fetch origin main:master` (where origin will be your
   fork on GitHub) before `yarn changeset` works.

> If you made minor changes like CI config, prettier, etc. you can run `yarn changeset add --empty`
> to generate an empty changeset file to document your changes.

### Tests

All commits that fix bugs or add features need a test.

> **Please do not merge code without tests!**\
> We try to have coverage near the 100%.

## License

By contributing your code to the RCL GitHub repository, you agree to license your contribution under
the MIT license.
