import { Global } from '@emotion/react'
import { addDecorator } from '@storybook/react'
import { DarkTheme, GlobalStyles, LightTheme, YDSProvider } from '../src/styles/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

/** 임시 */
addDecorator((story) => {
  const isDarkMode = !window.matchMedia('(prefers-color-scheme: dark)').matches
  return (
    <YDSProvider theme={isDarkMode ? DarkTheme : LightTheme}>
      <Global styles={GlobalStyles} />
      {story()}
    </YDSProvider>
  )
})
