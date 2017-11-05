/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Dimensions, Platform, StyleSheet,
    FlatList,
    Image, Button, Alert, Text, View,Modal
} from 'react-native';

import {Theme, Font} from '../utils/style';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';


const winHeight = Dimensions.get('window').height;
const winWidth = Dimensions.get('window').width;


export default  class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            banners: [
                {title:"吼吼", url: 'http://www.354zp.com/data/upload/ads/17/03/20/58cfd3f181015.jpg'},
                {title:"吼吼", url: 'http://www.354zp.com/data/upload/ads/17/03/20/58cfd3f181015.jpg'}
            ]
        }
    }
    static navigationOptions = {
        header:null
    };
     _renderItem ({item, index}) {
        return (
            <View>
                <ParallaxImage
                    source={{ uri: item.url }}
                    // containerStyle={styles.imageContainer}
                    style={styles.CarouselImage}
                    parallaxFactor={0.4}
                />
                <Text style={styles.title} numberOfLines={2}>
                    { item.title }
                </Text>
            </View>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <Carousel
                    data={this.state.banners}
                    renderItem={this._renderItem}
                    sliderWidth={200}
                    sliderHeight = { 200}
                    itemWidth={200}
                    itemHeight={200}
                    hasParallaxImages={true}
                />
                {/*<Image resizeMode='stretch' style={styles.banner}  source={{uri: 'http://www.354zp.com/data/upload/ads/17/03/20/58cfd3f181015.jpg'}}/>*/}

                <FlatList data={[
                                    {key:0,title: '我是标题'},
                                    {key:1,title: '我是标题'},
                                    {key:2,title: '我是标题'}
                                ]}
                                renderItem={
                                    ({item}) => <Text>{item.title}</Text>
                                }
                />
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
    Carousel: {
        height: winWidth/3,
        width: winWidth-20
    },
    CarouselImage: {
        height: winWidth/3,
        width: winWidth-20
    }
});

