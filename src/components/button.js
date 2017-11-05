/**
 * Created by nocoolyoyo on 2017/11/5.
 */

import React, { Component } from 'react';
import {StyleSheet, Button} from 'react-native';
export default class Button extends Component {

    render() {
        return (
            <button style={styles.container}>
哈哈
            </button>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width:100,
        backgroundColor: 'red'
    }
});