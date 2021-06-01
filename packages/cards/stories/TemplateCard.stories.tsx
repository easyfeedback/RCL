import { Meta, Story } from '@storybook/react/types-6-0'
import {
  IoDuplicateOutline,
  IoMove,
  IoPencil,
  IoPricetagOutline,
  IoTrashBinOutline,
} from 'react-icons/io5'

import { TemplateCard, TemplateCardProps } from '../src/TemplateCard'

export default {
  title: 'Components/Cards/TemplateCard',
  component: TemplateCard,
  args: {
    href: '#',
    title: 'Demo Survey (Satisfaction Ice Cream)',
    imageSrc:
      'https://images.unsplash.com/photo-1534551767192-78b8dd45b51b?fit=crop&w=220&h=202&q=60',
    views: '213',
    menuItems: [
      { icon: IoDuplicateOutline, title: 'Duplicate' },
      { icon: IoMove, title: 'Move' },
      { icon: IoPricetagOutline, title: 'Assign tags' },
      { icon: IoPencil, title: 'Save as template' },
      { icon: IoTrashBinOutline, title: 'Delete', color: 'red.500' },
    ],
    state: 'published',
  },
} as Meta

const Template: Story<TemplateCardProps> = (args) => <TemplateCard {...args} />

export const Default = Template.bind({})

export const NonPublished = Template.bind({})
NonPublished.args = {
  views: undefined,
  state: 'planned',
}
