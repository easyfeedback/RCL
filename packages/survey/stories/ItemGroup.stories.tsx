import { Meta, Story } from '@storybook/react/types-6-0'

import { ItemGroup, ItemGroupProps } from '../src/Question/ItemGroup'

export default {
  title: 'Components/Survey/Question/ItemGroup',
  component: ItemGroup,
  argTypes: {
    activeColor: {
      control: 'color',
    },
  },
  args: {
    name: 'my_items_group',
    itemType: 'radio',
    options: [
      { value: 'value_1', label: 'Value 1' },
      { value: 'value_2', label: 'Value 2' },
      { value: 'value_3', label: 'Value 3' },
    ],
    direction: 'vertical',
    withLabels: true,
    activeColor: '#990033',
  },
} as Meta

const Template: Story<ItemGroupProps> = (args) => <ItemGroup {...args} />

export const Default = Template.bind({})

export const WithOnChangeEvent = Template.bind({})
WithOnChangeEvent.args = {
  onChange: (val) => alert(val + ' selected'),
}

export const RadioWithDefaultValue = Template.bind({})
RadioWithDefaultValue.args = {
  defaultValue: 'value_2',
}

export const CheckboxesWithDefaultValue = Template.bind({})
CheckboxesWithDefaultValue.args = {
  itemType: 'checkbox',
  defaultValue: ['value_2', 'value_3'],
}

export const HorizontalRadios = Template.bind({})
HorizontalRadios.args = {
  itemType: 'radio',
  direction: 'horizontal',
  withLabels: false,
}

export const HorizontalCheckboxes = Template.bind({})
HorizontalCheckboxes.args = {
  itemType: 'checkbox',
  direction: 'horizontal',
  withLabels: false,
}

export const UseImages = Template.bind({})
UseImages.args = {
  direction: 'horizontal',
  itemType: 'checkbox',
  options: [
    {
      value: 'happy_doggo',
      imageSrc:
        'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?fit=crop&w=256&h=256&q=60',
      label: 'Happy Doggo',
    },
    {
      value: 'serious_doggo',
      imageSrc:
        'https://images.unsplash.com/photo-1585559700398-1385b3a8aeb6?fit=crop&w=256&h=256&q=60',
      label: 'Serious Doggo',
    },
    {
      value: 'doggo',
      imageSrc:
        'https://images.unsplash.com/photo-1558788353-f76d92427f16?fit=crop&w=256&h=256&q=60',
      label: 'Doggo',
    },
  ],
}

export const Limits = Template.bind({})
Limits.args = {
  options: [
    {
      value: 'fox_dog',
      label: 'The quick brown fox jumps over the lazy dog',
    },
    {
      value: 'lorem',
      label:
        'Enim inventore aliquid neque voluptates. Ut dolorem saepe explicabo et eum beatae. Autem at voluptas aspernatur possimus consequatur. Eius inventore commodi et in perspiciatis inventore laborum. Beatae eius animi et facere suscipit laboriosam quaerat qui. Assumenda dolores ducimus modi earum rem qui illum.',
    },
    {
      value: 'value_3',
      label: 'Value 3',
    },
  ],
}

export const LimitsWithImages = Template.bind({})
LimitsWithImages.args = {
  maxColumns: 3,
  direction: 'horizontal',
  withImages: true,
  options: [
    {
      value: 'fox_dog',
      imageSrc:
        'https://images.unsplash.com/photo-1462953491269-9aff00919695?auto=format&fit=crop&w=634&q=80',
      label: 'The quick brown fox jumps over the lazy dog',
    },
    {
      value: 'lorem',
      imageSrc:
        'https://images.unsplash.com/photo-1623776051205-ab4b9e13e8b0?auto=format&fit=crop&w=659&q=80',
      label:
        'Enim inventore aliquid neque voluptates. Ut dolorem saepe explicabo et eum beatae. Autem at voluptas aspernatur possimus consequatur. Eius inventore commodi et in perspiciatis inventore laborum. Beatae eius animi et facere suscipit laboriosam quaerat qui. Assumenda dolores ducimus modi earum rem qui illum.',
    },
    {
      value: 'value_3',
      imageSrc: '',
      label: 'Value 3',
    },
    {
      value: 'value_4',
      imageSrc:
        'https://images.unsplash.com/photo-1532009877282-3340270e0529?&auto=format&fit=crop&w=1050&q=80',
      label: 'Value 4',
    },
  ],
}