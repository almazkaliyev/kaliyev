import { useEffect, useState } from 'react'

import { useCookieTheme } from 'hooks/useCookieTheme'

const themes = ['theme1', 'theme2', 'theme3', 'theme4', 'theme5', 'theme6']

export const useTheme = () => {
  const { getCookieTheme, setCookieTheme } = useCookieTheme()
  const [currentTheme, setCurrentTheme] = useState(getCookieTheme || 'theme1')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
    setCookieTheme(currentTheme)
  }, [currentTheme])

  const toggleTheme = () => {
    const nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length]
    setCurrentTheme(nextTheme)
  }

  return { currentTheme, toggleTheme }
}
