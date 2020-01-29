import React from 'react';

import Navigation from './navigation';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    return <Navigation />;
  }
}
