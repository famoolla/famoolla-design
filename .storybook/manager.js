import {addons} from 'storybook/manager-api';
import { themes } from 'storybook/theming';

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
