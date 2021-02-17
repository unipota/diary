import { useEffect, useState } from 'react'

const useThemePref = () => {
  const [isDark, setIsDark] = useState(false)

  const onThemeChanged = (ev: MediaQueryListEvent) => {
    setIsDark(ev.matches)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDark(mq.matches)
    mq.addEventListener('change', onThemeChanged)

    return () => {
      mq.removeEventListener('change', onThemeChanged)
    }
  }, [])

  return isDark
}

export default useThemePref
