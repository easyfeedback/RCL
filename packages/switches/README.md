# Switches

## Table of Contents <!-- omit in toc -->

- [Installation](#installation)
- [Switch](#switch)

## Installation

```sh
yarn add @easyfeedback/switches
# or
npm i @easyfeedback/switches
```

## Switch

The `Switch` component is used as an alternative for the Checkbox component. You can switch between
enabled or disabled states.

### Import component

```tsx
import { Switch } from '@easyfeedback/switches'
```

### General usage

```tsx
<Switch label="My Setting" />
```

### With labels

Use the `labelPlacement` property to add a visible label the switch.\
If `labelPlacement` is not set the label will add to the `aria-label` attribute.

You can set the value to `start` or `end`.

```tsx
<HStack>
  <Switch label="left labelled" labelPlacement="start" />
  <Switch label="right labelled" labelPlacement="end" />
</HStack>
```

### With a color scheme

Use the `colorScheme` property to change the color variant of the switch.

```tsx
<Switch label="My switch has a blue color" colorScheme="blue" />
```

### Sizes

Use the `size` property to change the width and height of the switch.

You can set the value to `sm`, `md` or `lg`.

```tsx
<HStack>
  <Switch label="sm" size="sm" />
  <Switch label="md" size="md" />
  <Switch label="lg" size="lg" />
</HStack>
```

### Props

| Name           | Description                                                                                                                               | type                         | Default  |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| label          | Defines the string that labels the checkbox element. Even if it is not displayed on the screen, it is used in the `aria-label` attribute. | `string`                     | -        |
| colorScheme    | _[Optional]_ The color scheme of the switch.                                                                                              | _{the chakra color schemes}_ | `'teal'` |
| id             | _[Optional]_ The id assigned to the input element.                                                                                        | `string`                     | -        |
| labelPlacement | _[Optional]_ The position of the label.                                                                                                   | `'start' \| 'end'`           | -        |
| size           | _[Optional]_ The size of switch.                                                                                                          | `'sm' \| 'md' \| 'lg'`       | `'md'`   |
