import { useEffect } from 'react'

/** Remove the `:focus` ring on click, but leave it pressing `Tab`. */
export const useFocusRingOnlyOnTab = () => {
  useEffect(() => {
    const handleFirstTab = (keyDownEvent: KeyboardEvent) => {
      if (keyDownEvent.key === 'Tab') {
        document.body.classList.add('user-is-tabbing')

        window.removeEventListener('keydown', handleFirstTab)
        window.addEventListener('mousedown', handleMouseDownOnce)
      }
    }

    const handleMouseDownOnce = () => {
      document.body.classList.remove('user-is-tabbing')

      window.removeEventListener('mousedown', handleMouseDownOnce)
      window.addEventListener('keydown', handleFirstTab)
    }

    window.addEventListener('keydown', handleFirstTab)
  }, [])
}
