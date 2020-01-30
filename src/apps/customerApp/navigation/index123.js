import React, {Component} from 'react';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import {View, Text, StyleSheet, TouchableHighlight, Button, TextInput} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {sizes, colors} from '../constants/theme';
import StackViewStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons'; 

class GreenScreen extends Component {
  static navigationOptions = {
    title: 'Green'
  };
  render() {
    return(
      <View style={styles.green}>
        <Text style={styles.text}>This is the Green Screen</Text>
      </View>
    );
  }
}

class RedScreen extends Component {
  render() {
    return(
      <View style={styles.red}>
        <Text style={styles.text}>This is the Red Screen</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.text}>Go to Blue</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

RedScreen.navigationOptions = props => {
  const {navigation} = props;
  return {
    headerRight: <Button title='Purple' onPress={() => navigation.navigate('PurpleScreen')}/>,
    headerLeft: <Button title='Green' onPress={() => navigation.navigate('GreenScreen')}/>
  }
};

class BlueScreen extends Component {
  static navigationOptions = {
    title: 'Blue',
  };
  render() {
    return (
      <View style={styles.blue}>
        <Text style={styles.text}>This is the Blue Screen 1</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.navigation.navigate('RedScreen')}>
          <Text style={styles.text}>Go to Red</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class PurpleScreen extends Component {
  state = {
    text: 'as',
  };
  static navigationOptions = {
    title: 'Purple',
  };
  render() {
    return(
      <View style={styles.purple}>
        <Text style={styles.text}>This is the Purple Screen 1</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, flex: 1, width: 100}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    );
  }
}

class SignInScreen extends Component {
  render() {
    return (
      <View style={styles.purple}>
        <Text style={styles.text}>Sign In Screen</Text>
      </View>
    );
  }
}

const AuthStack = createSwitchNavigator({SignIn: SignInScreen});

const TabNavigator = createMaterialBottomTabNavigator(
  {
    BlueScreen: {
      screen: BlueScreen,
      navigationOptions: {
        barStyle: {
          backgroundColor: 'white',
        },
        tabBarLabel: 'Home',
        tabBarColor: 'blue',
        tabBarIcon: ({ tintColor }) => ( 
          <View style={styles.tabstyle}>  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
          </View>),
      },
      tabBarOptions: {
        showLabel: false,
        showIcon: false
      }
    },
    RedScreen: {
      screen: RedScreen,
      navigationOptions: {
        tabBarLabel: 'Supercoins',
        barStyle: {
          backgroundColor: 'purple',
        },
        tabBarIcon: ({ tintColor }) => ( 
          <View style={styles.tabstyle}>  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-color-palette'}/>  
          </View>),
      }
    },
    PurpleScreen: {
      screen: PurpleScreen,
      navigationOptions: {
        tabBarLabel: 'Video',
        barStyle: {
          backgroundColor: 'red',
        },
        tabBarIcon: ({ tintColor }) => ( 
          <View style={styles.tabstyle}>  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-disc'}/>  
          </View>),
      }
    },
    GreenScreen: {
      screen: GreenScreen,
      navigationOptions: {
        tabBarLabel: 'Ideas',
        barStyle: {
          backgroundColor: 'cyan',
        },
        tabBarIcon: ({ tintColor }) => ( 
          <View style={styles.tabstyle}>  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-flower'}/>  
          </View>),
      }
    }
  }, {
    shifting: false,
    barStyle: {
      borderBottomWidth: 5,
      borderBottomColor: 'white',
    },
  }
);

const stackNav = createStackNavigator({
  BlueScreen: {
    screen: BlueScreen,
    icon: ''
  },
  RedScreen: {
    screen: RedScreen,
  },
  PurpleScreen: {
    screen: PurpleScreen,
  },
  GreenScreen: {
    screen: GreenScreen,
  },
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

const styles = StyleSheet.create({
  green: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green'
  },
  red: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  blue: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  purple: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple'
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  tabstyle: {
    flex: 1,
  },
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      App: TabNavigator,
    },
    {
      initialRouteName: 'App',
    },
  ),
);
