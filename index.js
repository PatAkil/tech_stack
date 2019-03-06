/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import App from './src/app';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json'

AppRegistry.registerComponent(appName, () => App)


