import React, { Component} from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


class GreenScreen extends Component {
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

const Stack = createStackNavigator();

export function App() {
    return(
        <NavigationNativeContainer>
            <Stack.Navigator>
                <Stack.Screen name='green' component={GreenScreen}></Stack.Screen>
                <Stack.Screen name='red' component={RedScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationNativeContainer>
    );
}


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