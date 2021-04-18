import React from 'react'

function useDebouncedCallback(callback: Function, delay: number) {
  const timeoutRef = React.useRef<number | undefined>()

  const debouncedCallback = React.useCallback(
    (...args) => {
      window.clearTimeout(timeoutRef.current)

      return new Promise(resolve => {
        timeoutRef.current = window.setTimeout(() => {
          resolve(callback.apply(null, args))
        }, delay)
      })
    },
    [callback, delay]
  )

  return debouncedCallback
}

export default useDebouncedCallback
