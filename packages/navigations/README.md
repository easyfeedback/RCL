# Navigations

## Table of Contents <!-- omit in toc -->

- [Installation](#installation)
- [FolderNavigation](#foldernavigation)

## Installation

```sh
yarn add @easyfeedback/navigations
# or
npm i @easyfeedback/navigations
```

## FolderNavigation

`FolderNavigation` is a side navigation for the folder overview.

At the very top there is a button for creating a new folder. This is followed by all folders to
which the current user has access to.

### Import component

```tsx
import { FolderNavigation } from '@easyfeedback/navigations'
```

### General usage

```tsx
const myFolderList = [
  { id: '1', numberOfItems: 10, title: 'My Surveys', href: '#' },
  { id: '2', numberOfItems: 3, title: 'Marketing', href: '#' },
]

<FolderNavigation folderList={myFolderList} />
```

### Props

| Name              | Description                                                                                              | type                                                        | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ------- |
| myFolderList      | The list with all the folders the user has access to.                                                    | `Folder[]`                                                  | -       |
| onCreateNewFolder | _[Optional]_ The function with the information what happens when the button "Add new folder" is clicked. | `MouseEventHandler<HTMLButtonElement \| HTMLAnchorElement>` | -       |
| onEditSettings    | _[Optional]_ The function with the information what happens when the button "Settings" is clicked.       | `MouseEventHandler<HTMLButtonElement>`                      | -       |
| onDeleteFolder    | _[Optional]_ The function with the information what happens when the button "Delete" is clicked.         | `MouseEventHandler<HTMLButtonElement>`                      | -       |
