# @easyfeedback/buttons

Buttons are used as triggers for actions. They are used in forms, toolbars, dialog footers and as
stand-alone action triggers.

- [Installation](#installation)
- [IconButton](#iconbutton)

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
<IconButton ariaLabel="Add new item" variant="add" />
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
| variant   | The icon variant to render.              | `"add"` `"plane"`                      | -       |
| onClick   | _[Optional]_                             | `MouseEventHandler<HTMLButtonElement>` | -       |
