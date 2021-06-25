export type Option = {
  /** The value of the input field. */
  value: string
  /**
   * The label to display (when withLabels is active).
   *
   * Also required for the `aria-label` attribute of the input element.
   */
  label: string
  /** The image to display (when withImages is active). */
  imageSrc?: string
}
