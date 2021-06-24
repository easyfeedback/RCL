import {
  Box,
  UseCheckboxGroupProps,
  UseRadioGroupProps,
  useCheckboxGroup,
  useRadioGroup,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { Item, ItemProps } from './Item'
import { Option } from './models/Item'

export type CheckRadioGroupProps = {
  /**
   * All available options within the group.
   *
   * Each `Option` item has `value: string`, `label: string` and the optional `imageSrc?: string` properties.
   */
  options: Option[]
  /** The direction how the group component should be rendered. */
  direction?: 'vertical' | 'horizontal'
  /** The maximum of columns to use. Only works if images are used. */
  maxColumns?: number
} & Pick<ItemProps, 'inputType' | 'activeColor' | 'withLabels' | 'withImages'> &
  Pick<UseRadioGroupProps, 'name' | 'defaultValue' | 'onChange'> &
  Pick<UseCheckboxGroupProps, 'defaultValue' | 'onChange'>

/**
 * The `CheckRadioGroup` component let's you add styled answer variant.
 *
 * Under the hood it uses the Chakra-UI `radio` and `checkbox` components.
 */
export const CheckRadioGroup = ({
  options,
  direction = 'vertical',
  maxColumns,
  inputType = 'checkbox',
  activeColor,
  withLabels,
  withImages,
  name,
  defaultValue,
  onChange,
}: CheckRadioGroupProps) => {
  const defaultProps = { defaultValue, onChange }
  const { getRootProps, getRadioProps } = useRadioGroup({ name, ...defaultProps })
  const { getCheckboxProps } = useCheckboxGroup(defaultProps)

  const rootProps = inputType === 'radio' ? getRootProps() : {}
  const generellItemProps = { inputType, activeColor, withLabels, withImages }

  const [rootStyles, setRootStyles] = useState({})
  useEffect(() => {
    if (maxColumns) {
      setRootStyles({
        display: 'grid',
        gridAutoFlow: 'row',
        gridTemplateColumns: `repeat(${maxColumns}, 1fr)`,
        gridGap: 1,
      })
    } else {
      setRootStyles({
        display: 'flex',
        flexDirection: direction === 'vertical' ? 'column' : 'row',
      })
    }
  }, [maxColumns, direction])

  return (
    <Box {...rootProps} {...rootStyles} data-testid="CheckRadioGroup">
      {options.map(({ value, label, imageSrc }: Option) => {
        const htmlProps =
          inputType === 'radio' ? getRadioProps({ value }) : getCheckboxProps({ value })

        const itemProps: Option = {
          value,
          label,
          imageSrc,
        }

        // @ts-ignore TS2322
        return <Item key={value} {...generellItemProps} {...htmlProps} {...itemProps} />
      })}
    </Box>
  )
}
