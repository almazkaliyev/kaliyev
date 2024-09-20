import Cookies from 'js-cookie'

export const useCookieTheme = () => {
  const getCookieTheme = Cookies.get('theme')

  const setCookieTheme = (theme: string) => {
    Cookies.set('theme', theme, { expires: 365 }) // Хранить куку 365 дней
  }

  return { getCookieTheme, setCookieTheme }
}
