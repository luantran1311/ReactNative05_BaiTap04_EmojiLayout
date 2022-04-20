/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import EmojiScreen from './screen/newfeed/EmojiScreen'

AppRegistry.registerComponent(appName, () => EmojiScreen);
