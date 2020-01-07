import React, {Component} from 'react';
import {View, Text, FlatList, Image, Dimensions, Animated} from 'react-native';
import Block from '../components/Block';
import Button from '../components/Button';
import {sizes} from '../constants/theme';

const { width, height } = Dimensions.get('window');

class Welcome extends Component {
    renderIllustrations = () => {
        return (
            <FlatList
                horizontal
                data={this.props.illustrations}
                renderItem={({ item }) => (
                    <Image
                        source={item.source}
                        resizeMode="contain"
                        style={{ width, height: height / 2, overflow: 'visible' }}
                    />
                )}
                onScroll={
                    Animated.event([{
                      nativeEvent: { contentOffset: { x: this.scrollX } }
                    }])
                  }
            />
        );
    }
  render() {
      const { navigation} = this.props;
    return (
      <Block>
        <Block center bottom flex={0.4}>
          <Text style={{fontWeight: 'bold'}}>
            Your Home.
            <Text h1 primary> Greener.</Text>
          </Text>
          <Text h3 gray2 style={{ marginTop: sizes.padding / 2 }}>
            Enjoy the experience.
          </Text>
        </Block>
        <Block center middle>
          {this.renderIllustrations()}
          {/* {this.renderSteps()} */}
        </Block>
        <Block middle flex={0.5} margin={[0, sizes.padding * 2]}>
          <Button gradient onPress={() => navigation.navigate({routeName: 'Login'})}>
            <Text center semibold white>Login</Text>
          </Button>
          <Button shadow onPress={() => navigation.navigate('Login')}>
            <Text center semibold>Signup</Text>
          </Button>
        </Block>
      </Block>
    );
  }
}

Welcome.defaultProps = {
  illustrations: [
    { id: 1, source: require('../assets/images/illustration_1.png') },
    { id: 2, source: require('../assets/images/illustration_2.png') },
    { id: 3, source: require('../assets/images/illustration_3.png') },
  ],
};

export default Welcome;
