import {AppRegistry} from 'react-native';
import {ConnectedApp} from './connectedApp';
import {name as appName} from './app.json';
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => ConnectedApp);
