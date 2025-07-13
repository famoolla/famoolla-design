// Embed UI fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';


// Themes
import { useDarkMode } from '@vueless/storybook-dark-mode';
import {DocsContainer as BaseDocsContainer} from '@storybook/addon-docs/blocks';
import { DARK_MODE_EVENT_NAME } from '@vueless/storybook-dark-mode';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import lighttheme from '../src/themes/lighttheme';
import darktheme from '../src/themes/darktheme';
import oceanTheme from '../src/themes/oceantheme';
import { addons} from 'storybook/internal/preview-api';
import { useEffect, useState } from 'react';
import './preview.css';
import { themes } from 'storybook/theming';

const channel = addons.getChannel();


function getThemeFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const globals = urlParams.get('globals');

  if (globals) {
    const match = globals.match(/theme:(\w+)/);
    if (match && match[1]) {
      return match[1];
    }
  }
  return null;
}

const selectedTheme = getThemeFromUrl();

const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    docs: {
      theme: selectedTheme === 'dark' ? themes.dark : themes.light,
    },
    backgrounds: {disable: true},
    // docs: {
    //   container: ({ children }) => {

    //     const [isDarkMode, setIsDarkMode] = useState(false);

    //     useEffect(() => {
    //     channel.on(DARK_MODE_EVENT_NAME, setIsDarkMode);
    //     return () => channel.off(DARK_MODE_EVENT_NAME, setIsDarkMode);
    //   },[channel]);
    //     return (
    //       <BaseDocsContainer theme={isDarkMode ? darktheme : oceanTheme}>
    //         {children}
    //       </BaseDocsContainer>
    //     );
    //   },
    // },

    // darkMode: {
    //   current: 'ocean',
    //   darkClass: 'dark-bg',
    //   lightClass: 'light-bg',
    //   stylePreview: true,
    //   dark: darktheme,
    //   light: oceanTheme,
    // },

      // theme: {
      //   base: useDarkMode() ? 'dark' : 'light',
      //   brandTitle: 'Famoolla Design System',
      //   brandUrl: 'https://famoolla.com',
      //   brandImage: 'https://famoolla.com/favicon.ico',
      // },


    options: {
      storySort: {
        order: ['Design Tokens', 'Forms'],
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },
  }};


  export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: oceanTheme,
      dark: darktheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];


  // const withMuiTheme = (Story) => {
  //   const isDarkMode = useDarkMode();

  //   return (
  //     <ThemeProvider theme={isDarkMode ? darktheme : oceanTheme}>
  //       <CssBaseline />
  //       <Story />
  //     </ThemeProvider>
  //   );
  // };

    // export const decorators = [withMuiTheme];




  
//   decorators: [
//     withThemeFromJSXProvider({
//       themes: {
//         light: lighttheme,
//         dark: darktheme,
//         ocean: oceanTheme,
//       },
//       defaultTheme: 'ocean',
//       Provider: ThemeProvider,
//       GlobalStyles: CssBaseline,
//     }),
//   ]
// };

export default preview;