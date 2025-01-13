// useScroll.ts
import { useState, useEffect } from 'react'

export const useScroll = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    handleScroll() // Check initial position
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrolled
}
