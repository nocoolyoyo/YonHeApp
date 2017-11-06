/**
 * Created by nocoolyoyo on 2017/11/6.
 */

import { StyleSheet, Dimensions, Platform } from 'react-native';
import {Theme,Color, Font} from '../../utils/style';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * winWidth) / 100;
    return Math.round(value);
}

const slideHeight = winHeight * 0.25;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = winWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const bannerBorderRadius = 8;

export default StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
      //  paddingBottom: 18 // needed for shadow
    },
    imageContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: bannerBorderRadius,
        borderBottomLeftRadius: bannerBorderRadius,
        borderBottomRightRadius: bannerBorderRadius
        // borderTopLeftRadius: bannerBorderRadius,
        // borderTopRightRadius: bannerBorderRadius
    },
    imageContainerEven: {
        backgroundColor: Color.killer
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        height:slideHeight,
        borderRadius: bannerBorderRadius,
        borderBottomLeftRadius: bannerBorderRadius,
        borderBottomRightRadius: bannerBorderRadius
        // borderTopLeftRadius: bannerBorderRadius,
        // borderTopRightRadius: bannerBorderRadius
    },
    // image's border radius is buggy on ios; let's hack it!
    radiusMask: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: bannerBorderRadius*4,
        backgroundColor: 'white',
        borderBottomLeftRadius: bannerBorderRadius,
        borderBottomRightRadius: bannerBorderRadius
    },
    radiusMaskEven: {
        backgroundColor: Color.killer
    },
});
