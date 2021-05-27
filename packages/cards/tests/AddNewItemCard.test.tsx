import { render, testA11y } from '@easyfeedback/test-utils'

import { AddNewItemCard } from '../src'

const mockLabel = 'Mocked AddNewItemCard label'

describe('AddNewItemCard component', () => {
  it('passes a11y test', async () => {
    await testA11y(<AddNewItemCard label={mockLabel} />)
  })

  it('renders correctly', () => {
    const { getByTestId } = render(<AddNewItemCard label={mockLabel} />)
    expect(getByTestId('AddNewItemCard').lastChild).toContainHTML(mockLabel)
  })
})
