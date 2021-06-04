# Buttons

Buttons are used as triggers for actions. They are used in forms, toolbars, dialog footers and as
stand-alone action triggers.

## Table of Contents <!-- omit in toc -->

- [Installation](#installation)
- [IconButton](#iconbutton)
- [MenuButton](#menubutton)

## Installation

```sh
yarn add @easyfeedback/buttons
# or
npm i @easyfeedback/buttons
```

## IconButton

`IconButton` composes the Button component except that it renders only an icon.

Since `IconButton` only renders an icon, you must pass the ariaLabel prop, so screen readers can
give meaning to the `button`.

### Import component

```tsx
import { IconButton } from '@easyfeedback/buttons'
```

### General usage

```tsx
<IconButton ariaLabel="Add new item" />
```

### Icon Sizes

Use the `size` prop to change the width and height of the button. You can set the value to `sm` or
`lg`.

```jsx
<VStack>
  <IconButton ariaLabel="Add new item" size="sm" />
  <IconButton ariaLabel="Submit the form" size="lg" />
</VStack>
```

### Icon Variants

Use the `variant` prop to change the icon inside the button. You can set the value to `add` or
`plane`.

```jsx
<VStack>
  <IconButton ariaLabel="Add new item" variant="add" />
  <IconButton ariaLabel="Submit the form" variant="plane" />
</VStack>
```

### Props

| Name      | Description                              | type                                   | Default |
| --------- | ---------------------------------------- | -------------------------------------- | ------- |
| ariaLabel | A11y: A label that describes the button. | `string`                               | -       |
| size      | The size of the button.                  | `"sm"` `"lg"`                          | `lg`    |
| variant   | The icon variant to render.              | `"add"` `"plane"`                      | `add`   |
| onClick   | _[Optional]_                             | `MouseEventHandler<HTMLButtonElement>` | -       |

## MenuButton

An accessible dropdown menu for the common dropdown menu button design pattern. `Menu` uses roving
`tabIndex` for focus management.

This special `Menu` is set with the `IoEllipsisVertical` icon.

### Import component

```tsx
import { MenuButton } from '@easyfeedback/buttons'
```

### Usage

```tsx
const myMenuItems: [
  { icon: IoDuplicateOutline, title: 'Duplicate' },
  { icon: IoMove, title: 'Move' },
  { icon: IoPricetagOutline, title: 'Assign tags' },
  { icon: IoPencil, title: 'Save as template' },
  { icon: IoTrashBinOutline, title: 'Delete', color: 'red.500' },
]

<MenuButton menuItems={myMenuItems} />

// Optional there you can change the color of the navigation icon
<MenuButton menuItems={myMenuItems} color="red.500" />
```

### Props

| Name      | Description                                              | type             | Default |
| --------- | -------------------------------------------------------- | ---------------- | ------- |
| menuItems | The list of menu items.                                  | `MenuListItem[]` | -       |
| color     | _[Optional]_ The color of the `IoEllipsisVertical` icon. | `string`         | -       |
