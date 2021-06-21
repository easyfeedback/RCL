export type OptionObj = {
  /* the value */
  value: string
  /* label we should display (if selected) */
  label: string
  /* image to show */
  imageSrc?: string
}

export type ItemProps = {
  /* which type we should use */
  itemType: 'checkbox' | 'radio'
  /* the color used when checked is true */
  activeColor: string
  /* chakra controlled value */
  isChecked?: boolean
  /* show or hide labels */
  withLabels: boolean
  /* show or hide images */
  withImages: boolean
} & Pick<OptionObj, 'value' | 'label' | 'imageSrc'>
