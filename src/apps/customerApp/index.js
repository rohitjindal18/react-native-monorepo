
import {AppRegistry} from 'react-native';
import App from './Root';
import CodePush from 'react-native-code-push';

const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  installMode: CodePush.InstallMode.ON_NEXT_RESTART,
};

const CodePushApp = CodePush(codePushOptions)(App);

AppRegistry.registerComponent('customerApp', () => CodePushApp);
