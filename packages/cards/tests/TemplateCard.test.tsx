import { render, testA11y } from '@easyfeedback/test-utils'
import { IoDuplicateOutline, IoTrashBinOutline } from 'react-icons/io5'

import { TemplateCard, TemplateCardProps } from '../src'

const mockDefaultProps: TemplateCardProps = {
  href: '#',
  title: 'Demo Survey (Satisfaction Ice Cream)',
  imageSrc: '',
  menuItems: [
    { icon: IoDuplicateOutline, title: 'Duplicate' },
    { icon: IoTrashBinOutline, title: 'Delete', color: 'red.500' },
  ],
  state: 'published',
}

describe('TemplateCard component', () => {
  it('passes a11y test', async () => {
    await testA11y(<TemplateCard {...mockDefaultProps} />)
  })

  it('renders without the views section', () => {
    const { queryByTestId } = render(<TemplateCard {...mockDefaultProps} />)
    expect(queryByTestId('ViewsStats')).not.toBeInTheDocument()
  })

  it('renders with the views section', () => {
    const { getByTestId } = render(<TemplateCard {...mockDefaultProps} views={213} />)
    expect(getByTestId('ViewsStats').firstChild).toContainHTML('213')
  })
})
