import React from 'react'

function useResetScroll(
  elementRef: React.MutableRefObject<HTMLElement | null>,
  deps: Array<any>
) {
  React.useEffect(() => {
    if (elementRef.current) {
      elementRef.current.scrollLeft = 0
      elementRef.current.scrollTop = 0
    }
  }, deps)
}

export default useResetScroll
