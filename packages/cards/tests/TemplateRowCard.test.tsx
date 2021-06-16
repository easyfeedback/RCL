import { render, testA11y } from '@easyfeedback/test-utils'
import { IoDuplicateOutline, IoTrashBinOutline } from 'react-icons/io5'

import { TemplateRowCard, TemplateRowCardProps } from '../src'

const mockDefaultProps: TemplateRowCardProps = {
  href: '#',
  title: 'Demo Survey (Satisfaction Ice Cream)',
  imageSrc: '',
  editedAt: '2021-05-01T12:28:23.237Z',
  startTime: '2021-06-15T07:00:00.000Z',
  menuItems: [
    { icon: IoDuplicateOutline, title: 'Duplicate' },
    { icon: IoTrashBinOutline, title: 'Delete', color: 'red.500' },
  ],
}

describe('TemplateRowCard component', () => {
  it('passes a11y test', async () => {
    await testA11y(<TemplateRowCard {...mockDefaultProps} />)
  })

  it('renders `Badges` if tags are set', () => {
    const { queryByTestId } = render(<TemplateRowCard {...mockDefaultProps} tags={['tag1']} />)
    expect(queryByTestId('tags')).toBeInTheDocument()
  })

  it('renders `Unlimited` if no `endTime` is set', () => {
    const { getByTestId } = render(<TemplateRowCard {...mockDefaultProps} />)
    expect(getByTestId('times')).toContainHTML('Unlimited')
  })

  it('does not renders `Unlimited` if a correct `endTime` is set', () => {
    const { getByTestId } = render(
      <TemplateRowCard {...mockDefaultProps} endTime="2021-06-15T07:00:00.000Z" />
    )
    expect(getByTestId('times')).not.toContainHTML('Unlimited')
  })

  it('renders the avatar of the creator if it is set', () => {
    const { queryByTitle } = render(
      <TemplateRowCard
        {...mockDefaultProps}
        creator={{
          name: 'John Doe',
          imageSrc: '',
        }}
      />
    )
    expect(queryByTitle('John Doe')).toBeInTheDocument()
  })

  it('does not renders the avatar of the creator if no one is set', () => {
    const { queryByTitle } = render(<TemplateRowCard {...mockDefaultProps} />)
    expect(queryByTitle('John Doe')).not.toBeInTheDocument()
  })

  it('renders without the views section', () => {
    const { queryByTestId } = render(<TemplateRowCard {...mockDefaultProps} />)
    expect(queryByTestId('ViewsStats')).not.toBeInTheDocument()
  })

  it('renders with the views section', () => {
    const { getByTestId } = render(<TemplateRowCard {...mockDefaultProps} views={213} />)
    expect(getByTestId('ViewsStats').firstChild).toContainHTML('213')
  })
})
