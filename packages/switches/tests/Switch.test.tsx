import { render, testA11y } from '@easyfeedback/test-utils'

import { Switch } from '../src'

const mockLabel = 'Mocked Switch label'

describe('LabelledSwitch component', () => {
  it('passes a11y test', async () => {
    await testA11y(<Switch label={mockLabel} />)
  })

  it('should render a label element with a text before the switch', () => {
    const { container } = render(<Switch label={mockLabel} labelPlacement="start" />)
    expect(container.firstChild).toHaveTextContent(mockLabel)
  })

  it('should render a label element without a text', () => {
    const { getByTestId } = render(<Switch label={mockLabel} />)
    expect(getByTestId(/SimpleSwitch/i).firstChild).toHaveAttribute('aria-label', mockLabel)
  })
})
