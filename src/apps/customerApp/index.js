// import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './Root';

// import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue.js';

// const spyFunction = (msg) => {
//   console.log(msg, "Bridge rohit");
// };

// MessageQueue.spy(spyFunction);
// import CodePush from 'react-native-code-push';

// const codePushOptions = {
//   checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
//   installMode: CodePush.InstallMode.ON_NEXT_RESTART,
// };

// const CodePushApp = CodePush(codePushOptions)(App);

AppRegistry.registerComponent('customerApp', () => App);
