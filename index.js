/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import config from 'react-native-config';

console.log('env ==> ', config.STORYBOOK_ENABLED);

if (config.STORYBOOK_ENABLED === 'true') {
  const StorybookUIRoot = require('./.storybook/index').default;
  AppRegistry.registerComponent(appName, () => StorybookUIRoot);
} else {
  AppRegistry.registerComponent(appName, () => App);
}
