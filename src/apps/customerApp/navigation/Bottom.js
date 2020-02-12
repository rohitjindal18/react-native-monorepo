import React, { Component } from "react";
import { View, Text, Button,StatusBar,
    Dimensions,
    StyleSheet} from "react-native";
// import Icon from 'react-native-vector-icons/Ionicons';
import {
    BottomSheetBehavior,
    CoordinatorLayout,
    FloatingActionButton,
  } from 'react-native-bottom-sheet-behavior';

const { width } = Dimensions.get('window')
 
class Bottom extends Component {

    handleSlide(e) {
        this.offset = e.nativeEvent.offset
      }
    
      handleBottomSheetChange(e) {
        this.lastState = e.nativeEvent.state
      }
  render() {
    return (
        <CoordinatorLayout style={styles.container}>
        <StatusBar translucent backgroundColor='#205cb2' />
        {/* <View style={styles.content}>
          <View style={styles.toolbarWrapper}>
            <Icon.ToolbarAndroid
              navIconName={'md-menu'}
              style={styles.toolbar}
              titleColor="white"
              title="Simple Bottom Sheet"
              onIconClicked={() => {}}
            />
          </View>
        </View> */}
        <BottomSheetBehavior
          peekHeight={100}
          hideable={true}
          onSlide={this.handleSlide}
        //   style={{
        //       flex: '1'
        //   }}
          onStateChange={this.handleBottomSheetChange}>
          <View style={styles.bottomSheet}>
            <View style={styles.bottomSheetHeader}>
              <Text style={styles.label}>BottomSheetBehavior !</Text>
            </View>
            <View style={styles.bottomSheetContent} />
          </View>
        </BottomSheetBehavior>
        {/* <FloatingActionButton
          autoAnchor
          elevation={18}
          icon='md-navigate'
          iconColor='#4589f2'
          backgroundColor={'#ffffff'}
          rippleColor={'#55ffffff'}
        /> */}
      </CoordinatorLayout>
    );
  }
}
 
const YourOwnComponent = () => <Text>Your Pretty Component Goes Here</Text>;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    content: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    toolbarWrapper: {
      paddingTop: 24,
      marginBottom: 24,
      backgroundColor: '#4389f2',
    },
    toolbar: {
      width,
      height: 56,
    },
    bottomSheet: {
      backgroundColor: '#4389f2',
    },
    bottomSheetHeader: {
      padding: 28,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    bottomSheetContent: {
      height: 200,
      padding: 2,
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
  })
 
export default Bottom;
