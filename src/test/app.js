/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Dimensions, Platform, StyleSheet,
    FlatList,
    Image, Button, Alert, Text, View,Modal,TouchableHighlight
} from 'react-native';

import {Theme, Font} from '../utils/style';
// import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
};
//modal关闭callback
const modalShowBack = ()=>{
    Alert.alert('modal closed');
};


export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisiable: false
        }
    }
    setModalVisiable(value){
        this.setState({
            modalVisiable:value
        })
    }
  render() {
    return (
      <View style={styles.container}>
          <Image resizeMode='stretch' style={styles.banner}              source={{uri: 'http://www.354zp.com/data/upload/ads/17/03/20/58cfd3f181015.jpg'}}/>
         <Button title="test"
                        onPress={ onButtonPress }/>
          <Button title="show modal" color={Theme.primary}
                        onPress={ ()=>{
                      this.setModalVisiable(true);
                  } }/>

          <FlatList data={[
              {title: '我是标题'},
              {title: '我是标题'},
              {title: '我是标题'}
              ]}
                    renderItem={
                        ({item}) => <Text>{item.title}</Text>}
          />

          {/*测试modal*/}
          <Modal  animationType={ "fade" }
                  visible={ this.state.modalVisiable }
                  transparent={ true }
                  onRequestClose={ modalShowBack }>
              <View style={styles.modalView} >
                  <View style={styles.modalMain}>
                      <Text style={styles.modalMainTxt}>
                          this is test modal text
                      </Text>
                      <Button title="close" color={Theme.default} onPress={
                          ()=>{this.setModalVisiable(false)}
                      }/>
                  </View>
              </View>
          </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Theme.bgColor,
    },
    banner: {
        height: Dimensions.get('window').width/3,
        width: Dimensions.get('window').width
    } ,
    welcome: {
        fontSize:  Font.size.h1,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    modalView: {
        height: Dimensions.get('window').height,
        backgroundColor:  Theme.maskBg,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalMain: {
        backgroundColor: Theme.bgColor,
        borderRadius: 10,
        padding: 20
    },
    modalMainTxt: {
        color: Theme.titleColor
    },
    defaultBtn: {
        backgroundColor:Theme.default,
        color:Theme.titleColor
    }
});
