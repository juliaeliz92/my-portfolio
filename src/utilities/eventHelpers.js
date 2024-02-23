import * as React from 'react';

export function useEventListener(eventName, handler, element = document) {
  const savedHandler = React.useRef()

  React.useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  React.useEffect(() => {

    const eventListener = (event) => savedHandler.current(event)

    element.addEventListener(eventName, eventListener)

    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element, savedHandler])
}
