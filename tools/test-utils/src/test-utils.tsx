import '@testing-library/jest-dom/extend-expect'

import { matchers } from '@emotion/jest'
import { RenderOptions, RenderResult, fireEvent, render as rtlRender } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import * as React from 'react'

expect.extend(toHaveNoViolations)
expect.extend(matchers)

type UI = Parameters<typeof rtlRender>[0]

// UI-less passthrough fallback to prevent using conditional logic in render
function ChildrenPassthrough({ children }: { children: React.ReactElement }) {
  return children
}

export interface TestOptions extends Omit<RenderOptions, 'wrapper'> {
  /**
   * Optional additional wrapper, e.g. Context
   *
   * @example
   *   ;```ts
   *   // single wrapper
   *   render(<MyComponent />, {
   *    wrapper: MyContext
   *   });
   *
   *   // multiple wrapper
   *   render(<MyComponent />, {
   *    wrapper: ({ children }) => (
   *      <ContextA>
   *        <ContextB>
   *          {children}
   *        <ContextB />
   *      <ContextA />
   *    )
   *   });
   *
   *   ```
   */
  wrapper?: typeof ChildrenPassthrough
}

/**
 * Custom render for @testing-library/react
 *
 * @param component The component under test
 * @param options Customized test options
 * @see https://testing-library.com/docs/react-testing-library/setup#custom-render
 */
export const render = (
  ui: UI,
  { wrapper: Wrapper = ChildrenPassthrough, ...options }: TestOptions = {}
): RenderResult => rtlRender(<Wrapper>{ui}</Wrapper>, options)

export { rtlRender }
export { axe }

export * from '@testing-library/react'

export {
  act as invoke,
  renderHook,
  // @ts-ignore TS1205
  RenderHookOptions,
  // @ts-ignore TS1205
  RenderHookResult,
} from '@testing-library/react-hooks'

export { default as userEvent } from '@testing-library/user-event'

export const escape = (ui: HTMLElement) => fireEvent.keyDown(ui, { key: 'Escape', keyCode: 27 })

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TestA11YOptions = TestOptions & { axeOptions?: any }

/**
 * Validates against common a11y mistakes.
 *
 * Wrapper for jest-axe
 *
 * @example
 *   it('passes a11y test', async () => {
 *     await testA11Y(<MyComponent />, options)
 *   })
 *
 *   // sometimes we need to perform interactions first to render conditional UI
 *   it('passes a11y test when open', async () => {
 *     const { container } = render(<MyComponent />, options)
 *     fireEvent.click(screen.getByRole('button'))
 *     await testA11Y(container, options)
 *   })
 *
 * @see https://github.com/nickcolley/jest-axe#testing-react-with-react-testing-library
 */
export const testA11y = async (
  ui: UI | Element,
  { axeOptions, ...options }: TestA11YOptions = {}
) => {
  const container = React.isValidElement(ui) ? render(ui, options).container : ui

  const results = await axe(container, axeOptions)

  expect(results).toHaveNoViolations()
}
