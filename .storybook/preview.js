import { themes } from '@storybook/theming'
import './reset.scss'

export const parameters = {
  darkMode: {
    // Override the default dark theme

    dark: {
      ...themes.dark,
      base: 'dark',
      brandTitle: 'Findnlink',
      brandUrl: 'https://www.findnlink.com',
      appBg: '#141414',
      appContentBg: '#1E1E1E',
      barBg: '#1E1E1E',
    },
    // Override the default light theme
    light: {
      ...themes.normal,
      base: 'light',
      brandTitle: 'Findnlink',
      brandUrl: 'https://www.findnlink.com',
      appBg: '#E1E1E1',
      appContentBg: '#EBEBEB',
      barBg: '#EBEBEB',
    },
  },
}

import addons from '@storybook/addons'

// get an instance to the communication channel for the manager and preview
const channel = addons.getChannel()

// Used to switch between the dark/light :root variables
function changeStyle(isDark) {
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].cssRules[0] !== undefined) {
      console.log(document.styleSheets[i].cssRules[0].cssText)
      if (document.styleSheets[i].cssRules[0].cssText.includes('darkStyleSheet')) {
        document.styleSheets[i].disabled = !isDark
        console.log(document.styleSheets[i])
      } else if (document.styleSheets[i].cssRules[0].cssText.includes('lightStyleSheet')) {
        document.styleSheets[i].disabled = isDark
        console.log('tea', document.styleSheets[i])
      }
    }
  }
}

// switch body class for story along with interface theme
channel.on('DARK_MODE', (isDark) => {
  if (isDark) {
    changeStyle(isDark)
    require('./dark.scss')
  } else {
    changeStyle(isDark)
    require('./light.scss')
  }

  console.log(document.styleSheets)
})
