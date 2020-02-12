import React from 'react';
import {View, Text} from 'react-native';
import {App} from './navigation/index';

import {enableScreens} from 'react-native-screens';

enableScreens();

export default class App1 extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    return <App/>;
  }
}
