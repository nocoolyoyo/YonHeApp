

import { Dimensions, StyleSheet } from 'react-native';
import {Theme, Font} from '../../utils/style';

const { width: winWidth, height: winHeight } = Dimensions.get('window');


export default StyleSheet.create({
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
    },

    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1,
        paddingTop: 50
    },
    scrollviewContentContainer: {
        paddingBottom: 50
    },
    exampleContainer: {
        marginBottom: 30
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        marginTop: 25
    },
    sliderContentContainer: {
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    }
});
