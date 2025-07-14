// Embed UI fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';


// Themes
// import { useDarkMode } from '@vueless/storybook-dark-mode';
import {DocsContainer} from '@storybook/addon-docs/blocks';
// import { DARK_MODE_EVENT_NAME } from '@vueless/storybook-dark-mode';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import lighttheme from '../src/themes/lighttheme';
import darktheme from '../src/themes/darktheme';
import oceanTheme from '../src/themes/oceantheme';
import { addons} from 'storybook/internal/preview-api';
import { useEffect, useState } from 'react';
import './preview.css';
import { themes,create } from 'storybook/theming';
import { useGlobals } from 'storybook/manager-api';
// import { create } from '@storybook/theming';


const channel = addons.getChannel();


function getThemeFromUrl(globals) {

  if (globals) {
    const match = globals.match(/theme:(\w+)/);
    if (match && match[1]) {
      return match[1];
    }
  }
  return null;
}



// Create custom Storybook themes that match MUI
const createStorybookTheme = (mode) => {
  const muiTheme = createTheme({ palette: { mode } });
  
  return create({
    base: mode,
    brandTitle: 'Famoolla Design System',
    
    colorPrimary: muiTheme.palette.primary.main,
    colorSecondary: muiTheme.palette.secondary.main,
    
    // UI
    appBg: muiTheme.palette.background.default,
    appContentBg: muiTheme.palette.background.paper,
    appBorderColor: muiTheme.palette.divider,
    appBorderRadius: muiTheme.shape.borderRadius,
    
    // Typography
    fontBase: muiTheme.typography.fontFamily,
    fontCode: 'monospace',
    
    // Text colors
    textColor: muiTheme.palette.text.primary,
    textInverseColor: muiTheme.palette.text.secondary,
    
    // Toolbar
    barTextColor: muiTheme.palette.text.secondary,
    barSelectedColor: muiTheme.palette.primary.main,
    barBg: muiTheme.palette.background.paper,
    
    // Form colors
    inputBg: muiTheme.palette.background.paper,
    inputBorder: muiTheme.palette.divider,
    inputTextColor: muiTheme.palette.text.primary,
    inputBorderRadius: muiTheme.shape.borderRadius,
  });
};

const lightMuiTheme = createTheme({ palette: { mode: 'light' } });
const darkMuiTheme = createTheme({ palette: { mode: 'dark' } });

// const selectedTheme = getThemeFromUrl();

// console.log("Selected Theme: ", selectedTheme);

const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    docs: {
    container: ({ children, context }) => {

      const urlParams = new URLSearchParams(window.location.search);
      const globalsUrl = urlParams.get('globals');
      const urlTheme = getThemeFromUrl(globalsUrl);

      // console.log("Url Theme: ", urlTheme);

      // const [globals] = useGlobals();

      const theme = context?.globals;
      // console.log("Docs Theme: ", context);
      // const muiTheme = urlTheme === 'dark' ? darktheme : oceanTheme;
      const docsTheme = urlTheme === 'dark' ? themes.dark : themes.light;

      const storybookTheme = createStorybookTheme(urlTheme);

      // addons.setConfig({
      // theme: docsTheme,
      // });
      
      return (
        <DocsContainer context={context} theme={storybookTheme}>
          <ThemeProvider theme={urlTheme === 'dark' ? darktheme : oceanTheme}>
         <CssBaseline />
          {children}
          </ThemeProvider>
        </DocsContainer>
      );
    },
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


    theme:{

    },
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