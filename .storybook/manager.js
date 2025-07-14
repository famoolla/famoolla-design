import {addons} from 'storybook/manager-api';
import { themes } from 'storybook/theming';
import { STORY_RENDERED, GLOBALS_UPDATED } from 'storybook/internal/core-events';

// import myTheme from './myTheme';

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

addons.setConfig({
  theme: selectedTheme === 'dark' ? themes.dark : themes.light,
});

// Listen for theme changes from the addon
// addons.getChannel().on('STORYBOOK_THEME_CHANGE', (themeName) => {
//   const theme = themeName === 'dark' ? themes.dark : themes.light;
//   addons.setConfig({ theme });
// });

const channel = addons.getChannel();

channel.on(STORY_RENDERED, () => {
  console.log('Story rendered');
});

channel.on(GLOBALS_UPDATED, (globals) => {
  console.log('Globals updated:', globals);
});
