import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Bottom from './Bottom1';
import withNavigationContainer, {navigateAction} from './action';

class GreenScreen extends Component {
  state = {
    bottom: false,
  };

  setBottom = () => {
    this.setState({
      bottom: !this.state.bottom,
    });
  };
  render() {
    return (
      <View style={styles.green}>
        <Text style={styles.text}>
          This is the Green {this.props.index || 4} Screen
        </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigateAction("red")}>
          <Text style={styles.text}>Go to Red</Text>
        </TouchableHighlight>
        {this.state.bottom ? <Bottom /> : null}
      </View>
    );
  }
}

class RedScreen extends Component {
  render() {
    return (
      <Tabs.Navigator options={{}}>
        <Tabs.Screen name="Home">
          {() => <GreenScreen index={1} {...this.props}></GreenScreen>}
        </Tabs.Screen>
        <Tabs.Screen name="Settings">
          {() => <GreenScreen index={2} {...this.props}></GreenScreen>}
        </Tabs.Screen>
      </Tabs.Navigator>
    );
  }
}

class BlueScreen extends Component {
  render() {
    return (
      <View style={styles.green}>
        <Text style={styles.text}>This is the Blue Screen</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.navigation.navigate('red')}>
          <Text style={styles.text}>Go to Red</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class LoggedIn extends Component {
  render() {
    return (
      <View style={styles.red}>
        <Text style={styles.text}>This is the LoggedIn Screen</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.setLoginState()}>
          <Text style={styles.text}>Logout</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class LoggedOut extends Component {
  render() {
    return (
      <View style={styles.red}>
        <Text style={styles.text}>This is the LoggedOut Screen</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.setLoginState()}>
          <Text style={styles.text}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const Tabs = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
const BottomStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const PERSISTENCE_KEY = 'NAVIGATION_STATE';

function App() {
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);

        setInitialState(state);
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  function setLoginState() {
    setLoggedIn(!loggedIn);
  }
  if (!isReady) {
    return null;
  }
  return (
    <Stack.Navigator>
        {/* <Stack.Screen name='login'>
                  {
                    () => {
                      return loggedIn ?
                      <LoggedIn setLoginState={setLoginState}/> :
                      <LoggedOut setLoginState={setLoginState}/>
                    }
                  }
                </Stack.Screen> */}
        <Stack.Screen name="green" component={GreenScreen}></Stack.Screen>
        <Stack.Screen name="red" component={RedScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default withNavigationContainer(App);

// function BottomScreens() {
//   return (
//     <NavigationNativeContainer independent={true}>
//       <BottomStack.Navigator>
//         <BottomStack.Screen
//           name="bottom"
//           options={{
//             headerShown: false,
//             stackPresentation: 'transparentModal',
//           }}
//           component={Bottom}></BottomStack.Screen>
//       </BottomStack.Navigator>
//     </NavigationNativeContainer>
//   );
// }

// export function App() {
//   return(
//       <NavigationNativeContainer>
//           <MainStack.Navigator>
//               <MainStack.Screen name='screen1' options={{
//                 headerShown: false
//               }} component={Screens}></MainStack.Screen>
//               <MainStack.Screen name='screen2' options={{
//                 headerShown: false
//               }} component={BottomScreens}></MainStack.Screen>
//           </MainStack.Navigator>
//       </NavigationNativeContainer>
//   );
// }

const styles = StyleSheet.create({
  green: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  red: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  blue: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  purple: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
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
