import { Meta, Story } from '@storybook/react/types-6-0'
import {
  IoDuplicateOutline,
  IoMove,
  IoPencil,
  IoPricetagOutline,
  IoTrashBinOutline,
} from 'react-icons/io5'

import { TemplateRowCard, TemplateRowCardProps } from '../src/TemplateRowCard'

export default {
  title: 'Components/Cards/TemplateRowCard',
  component: TemplateRowCard,
  args: {
    href: '#',
    title: 'Demo Survey (Satisfaction Ice Cream)',
    imageSrc:
      'https://images.unsplash.com/photo-1534551767192-78b8dd45b51b?fit=crop&w=64&h=64&q=60',
    editedAt: '2021-05-01T12:28:23.237Z',
    startTime: '2021-06-15T07:00:00.000Z',
    menuItems: [
      { icon: IoDuplicateOutline, title: 'Duplicate' },
      { icon: IoMove, title: 'Move' },
      { icon: IoPricetagOutline, title: 'Assign tags' },
      { icon: IoPencil, title: 'Save as template' },
      { icon: IoTrashBinOutline, title: 'Delete', color: 'red.500' },
    ],
  },
} as Meta

const Template: Story<TemplateRowCardProps> = (args) => <TemplateRowCard {...args} />

export const Default = Template.bind({})

export const WithEndTime = Template.bind({})
WithEndTime.args = {
  endTime: '2021-07-25T21:30:00.000Z',
}

export const WithTags = Template.bind({})
WithTags.args = {
  tags: ['i love it', 'Best tag ever', 'IMPORTANT'],
}

export const WithCreator = Template.bind({})
WithCreator.args = {
  creator: {
    name: 'John Doe',
    imageSrc:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=crop&w=64&h=64&q=60',
  },
}

export const WithViews = Template.bind({})
WithViews.args = {
  views: 123,
}

export const WithCreatorAndViews = Template.bind({})
WithCreatorAndViews.args = {
  creator: {
    name: 'John Doe',
    imageSrc:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=crop&w=64&h=64&q=60',
  },
  views: 123,
}

export const Limits = Template.bind({})
Limits.args = {
  title:
    'Survey about something with users from the Application of state and democracy - inspirated by rainbows and flowers',
  creator: {
    name: 'Uwuwewewe Onyetenwewe Ugweuhem Osas',
    imageSrc:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=crop&w=64&h=64&q=60',
  },
  tags: [
    'i love it',
    'Best tag ever',
    'IMPORTANT',
    'test',
    'survey',
    'variant 1',
    'staging',
    'personality',
    'europa',
    'marketing',
    '\\/66huz & ä#+',
    'ß % § $',
  ],
  views: 12345678901234567890n,
}
