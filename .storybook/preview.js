import { themes } from '@storybook/theming'
import addons from '@storybook/addons'
import './reset.scss'
import '../util/util.scss'
import './dark.scss'
import './light.scss'
import { addDecorator } from '@storybook/react' // <- or your view layer
import { withTests } from '@storybook/addon-jest'
import results from '../.jest-test-results.json'

export const parameters = {
  darkMode: {
    // Override the default dark theme

    dark: {
      ...themes.dark,
      base: 'dark',
      brandTitle: 'Findnlink',
      brandUrl: 'https://www.findnlink.com',
      appBg: '#1E1E1E',
      appContentBg: '#141414',
      barBg: '#1E1E1E',
      docs: {
        theme: themes.dark,
      },
    },
    // Override the default light theme
    light: {
      ...themes.normal,
      base: 'light',
      brandTitle: 'Findnlink',
      brandUrl: 'https://www.findnlink.com',
      appBg: '#EBEBEB',
      appContentBg: '#E1E1E1',
      barBg: '#EBEBEB',
      docs: {
        theme: themes.normal,
      },
    },
  },
}

// Switch between the dark/light :root variables
function changeStyle(isDark) {
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].cssRules[0] !== undefined) {
      let cssText = document.styleSheets[i].cssRules[0].cssText
      if (cssText.includes('darkstylesheet')) {
        document.styleSheets[i].disabled = !isDark
      } else if (cssText.includes('lightstylesheet')) {
        document.styleSheets[i].disabled = isDark
      }
    }
  }
}

// Get an instance to the communication channel for the manager and preview
const channel = addons.getChannel()

// Switch the imported theme for the components along with interface theme
channel.on('DARK_MODE', (isDark) => {
  if (isDark) {
    changeStyle(isDark)
  } else {
    changeStyle(isDark)
  }
})

addDecorator(
  withTests({
    results,
  }),
)
