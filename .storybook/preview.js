import { Global, ThemeProvider } from '@emotion/react'
import { addDecorator } from '@storybook/react'
import { GlobalStyles, theme } from '../src/styles/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyles} />
    {story()}
  </ThemeProvider>
))
