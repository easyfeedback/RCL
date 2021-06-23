export type OptionObj = {
  /** The item value for the input field. */
  value: string
  /** The label we should display (when withLabels is active). */
  label: string
  /** The image we should display (when withImages is active). */
  imageSrc?: string
}

export type ItemProps = {
  /** The item type we should use */
  itemType: 'checkbox' | 'radio'
  /** The color used when checked is true. */
  activeColor: string
  /** This is chakra controlled value. */
  isChecked?: boolean
  /** The option to show or hide labels. */
  withLabels: boolean
  /** The option to show or hide images. */
  withImages: boolean
} & Pick<OptionObj, 'value' | 'label' | 'imageSrc'>
