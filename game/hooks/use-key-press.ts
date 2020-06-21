import { useState, useEffect } from "react"

export function useKeyPress(targetKey: string, handler: () => void) {
  function downHandler({ key }) {
    if (key === targetKey) {
      handler()
    }
  }

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler)
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount
}
