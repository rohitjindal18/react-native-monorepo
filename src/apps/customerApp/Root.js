import React from 'react';
import {App} from './navigation/index';

export default class App1 extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    return <App />;
  }
}
