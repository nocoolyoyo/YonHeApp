/**
 * 主页
 *
 */

import React, { Component } from 'react';
import { FlatList,
               Image, Button, Alert, Text, View,Modal } from 'react-native';
import styles from './home.style';
import {Theme,Color, Font} from '../../utils/style';
import Banner from '../../components/banner/banner';
import { sliderWidth, itemWidth } from '../../components/banner/banner.style';
import Carousel, { Pagination } from 'react-native-snap-carousel';


//模拟数据(mock)
import CarouselData from '../../assets/mock/carousel';

export default  class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            bannerActiveSlide :1,
            bannerRef :null
        }
    }
    static navigationOptions = {
        header:null
    };
    _renderItem ({item, index}) {
        return (
            <Banner
                data={item}
                even={(index + 1) % 2 === 0}
            />
        );
    }
    get slideBanner () {
        const { bannerActiveSlide, bannerRef } = this.state;

        return (
            <View style={styles.exampleContainer}>
                {/*<Text style={styles.title}>Example 1</Text>*/}
                {/*<Text style={styles.subtitle}>*/}
                    {/*No momentum | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots*/}
                {/*</Text>*/}
                <Carousel
                    ref={(c) => { if (!this.state.bannerRef) { this.setState({ bannerRef: c }); } }}
                    data={CarouselData}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages={true}
                    firstItem={1}
                    inactiveSlideScale={0.94}
                    inactiveSlideOpacity={0.7}
                    enableMomentum={false}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    loop={true}
                    loopClonesPerSide={3}
                    autoplay={true}
                    autoplayDelay={3000}
                    autoplayInterval={5000}
                    onSnapToItem={(index) => this.setState({ bannerActiveSlide: index }) }
                />
                <Pagination
                    dotsLength={CarouselData.length}
                    activeDotIndex={bannerActiveSlide}
                    containerStyle={styles.paginationContainer}
                    dotColor={'rgba(255, 255, 255, 0.92)'}
                    dotStyle={styles.paginationDot}
                    inactiveDotColor={Color.killer}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    carouselRef={bannerRef}
                    tappableDots={!!bannerRef}
                />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {/*<Carousel*/}
                    {/*data={this.state.banners}*/}
                    {/*renderItem={this._renderItem}*/}
                    {/*sliderWidth={200}*/}
                    {/*sliderHeight = { 200}*/}
                    {/*itemWidth={200}*/}
                    {/*itemHeight={200}*/}
                    {/*hasParallaxImages={true}*/}
                {/*/>*/}
                { this.slideBanner }
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
