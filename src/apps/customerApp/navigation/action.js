import React from 'react';
import {} from 'react-native';
import {NavigationContainer, CommonActions} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


const ref = React.createRef();

export function navigateAction(screenName) {
    // const navigation = useNavigation();
    ref?.current?.navigate(screenName);
    // navigation.navigate(screenName);
}

export default function withNavigationContainer(Component) {
    return class NavigationComponent extends React.Component {
        render() {
            return (
                <NavigationContainer ref={ref} independent={true}>
                    <Component/>
                </NavigationContainer>
            );
        }
    }
}