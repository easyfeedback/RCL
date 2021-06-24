import { Meta, Story } from '@storybook/react/types-6-0'

import { CheckRadioGroup, CheckRadioGroupProps } from '../src'

export default {
  title: 'Components/Survey/Question/CheckRadioGroup',
  component: CheckRadioGroup,
  argTypes: {
    activeColor: {
      control: 'color',
    },
  },
  args: {
    options: [
      { value: 'value_1', label: 'Value 1' },
      { value: 'value_2', label: 'Value 2' },
      { value: 'value_3', label: 'Value 3' },
    ],
    activeColor: '#990033',
  },
} as Meta

const Template: Story<CheckRadioGroupProps> = (args) => <CheckRadioGroup {...args} />

export const Default = Template.bind({})

export const RadioWithChangeEvent = Template.bind({})
RadioWithChangeEvent.args = {
  inputType: 'radio',
  withLabels: true,
  // @ts-ignore TS2322
  onChange: (val: string) => alert(val + ' selected'),
}

export const RadioWithDefaultValue = Template.bind({})
RadioWithDefaultValue.args = {
  inputType: 'radio',
  withLabels: true,
  // @ts-ignore TS2322
  defaultValue: 'value_2',
}

export const CheckboxesWithDefaultValue = Template.bind({})
CheckboxesWithDefaultValue.args = {
  inputType: 'checkbox',
  withLabels: true,
  // @ts-ignore TS2322
  defaultValue: ['value_2', 'value_3'],
}

export const HorizontalRadios = Template.bind({})
HorizontalRadios.args = {
  direction: 'horizontal',
  inputType: 'radio',
}

export const HorizontalCheckboxes = Template.bind({})
HorizontalCheckboxes.args = {
  direction: 'horizontal',
  inputType: 'checkbox',
  withLabels: false,
}

export const UseImages = Template.bind({})
UseImages.args = {
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
  direction: 'horizontal',
  inputType: 'checkbox',
  withImages: true,
}

export const UseImagesAndLabels = Template.bind({})
UseImagesAndLabels.args = {
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
  direction: 'horizontal',
  inputType: 'checkbox',
  withImages: true,
  withLabels: true,
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
  withLabels: true,
}

export const LimitsWithImages = Template.bind({})
LimitsWithImages.args = {
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
  direction: 'horizontal',
  maxColumns: 3,
  withImages: true,
}
