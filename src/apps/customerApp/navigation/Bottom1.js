import React from "react";
import { StyleSheet, Text, View } from "react-native";

import SwipeablePanel from "rn-swipeable-panel";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swipeablePanelActive: false
    };
  }

  componentDidMount = () => {
    this.openPanel();
  };

  openPanel = () => {
    this.setState({swipeablePanelActive: true});
  };

  closePanel = () => {
    this.setState({swipeablePanelActive: false});
  };

  render() {
    return (
      <View style={{position: 'absolute', top: 0, left: 0, flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <SwipeablePanel
        closeOnTouchOutside
          fullWidth={true}
        //   openLarge
          showCloseButton
          noBackgroundOpacity
          isActive={this.state.swipeablePanelActive}
          style={{
              justifyContent: 'space-between',
              flex: 1
          }}
          noBar
          onClose={this.closePanel}
          onPressCloseButton={this.closePanel}>
           {/* <Text>Your Pretty Component Goes Here</Text> */}
        </SwipeablePanel>
      </View>
    );
  }
}
