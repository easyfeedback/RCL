# Cards

Cards are surfaces that display content and actions on a single topic.

They should be easy to scan for relevant and actionable information. Elements, like text and images,
should be placed on them in a way that clearly indicates hierarchy.

## Table of Contents <!-- omit in toc -->

- [Installation](#installation)
- [AddNewItemCard](#addnewitemcard)
- [TemplateCard](#templatecard)

## Installation

```sh
yarn add @easyfeedback/cards
# or
npm i @easyfeedback/cards
```

## AddNewItemCard

`AddNewItemCard` is a Card component for adding a new item.

### Import component

```tsx
import { AddNewItemCard } from '@easyfeedback/cards'
```

### General usage

```tsx
<AddNewItemCard label="Add New Item" />
```

### Icon Variants

Use the `variant` prop to change the icon inside the button. You can set the value to `add` or
`plane`.

```jsx
<VStack>
  <AddNewItemCard label="Add New Item" variant="add" />
  <AddNewItemCard label="Add New Item" variant="plane" />
</VStack>
```

### Props

| Name    | Description                 | type                                   | Default |
| ------- | --------------------------- | -------------------------------------- | ------- |
| label   | The label of the component. | `string`                               | -       |
| variant | The icon variant to render. | `"add"` `"plane"`                      | `add`   |
| onClick | _[Optional]_                | `MouseEventHandler<HTMLButtonElement>` | -       |

## TemplateCard

`TemplateCard` is a Card component for displaying the state, stats and preview of the available
templates.

### Import component

```tsx
import { TemplateCard } from '@easyfeedback/cards'
```

### General usage

```tsx
<TemplateCard href="#!" title="Template 1" imageSrc="#!" views={123} />
```

### Props

| Name     | Description                      | type     | Default |
| -------- | -------------------------------- | -------- | ------- |
| href     | The hyperlink to the template.   | `string` | -       |
| title    | The title of the template.       | `string` | -       |
| imageSrc | The image src attribute.         | `string` | -       |
| views    | _[Optional]_ The number of views | `number` | -       |
