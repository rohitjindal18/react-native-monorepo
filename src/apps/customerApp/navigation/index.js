import React from 'react';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {sizes, colors} from '../constants/theme';
import StackViewStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {createStackNavigator} from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createMaterialBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});

// const screens = createStackNavigator(
//   {
//     Welcome,
//     Login,
//   },
//   {
//     defaultNavigationOptions: {
//       headerMode: 'none',
//       initialRouteName: 'Welcome',
//       headerStyle: {
//         height: sizes.base * 4,
//         backgroundColor: colors.white, // or 'white
//         borderBottomColor: "transparent",
//         elevation: 0, // for android
//       },
//     },
//     transitionConfig: (currentState) => {
//       return {
//         screenInterpolator: StackViewStyleInterpolator.forHorizontal,
//       }
//     }
//   },
// );

export default createAppContainer(TabNavigator);
