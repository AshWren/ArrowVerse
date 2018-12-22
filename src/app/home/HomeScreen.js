/*  

TO DO: 

picture of The Book to replace holder

change press to swipe w/ animation

fix colors and positions


*/

import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import NavigationService from '../NavigationService';

import BaseText from '../shared/theme/BaseText';

export default class HomeScreen extends Component {

    _onPressButton() {
        NavigationService.navigate('List');
    }

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.btnContainer}>
                    <View style={styles.bookContainer}>
                        <Text>
                            Holder for The Book
                        </Text>    
                    </View>
                    <TouchableHighlight
                        onPress={this._onPressButton} 
                        underlayColor='white'
                        style={styles.textContainer}
                    >
                            <BaseText>
                                <Text style={styles.text}>
                                    Cross off The List
                                </Text>
                            </BaseText>

                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f6',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    btnContainer: {
        justifyContent: 'center',
        padding: 30,
    },
    bookContainer: {
        height: 250,
        
        backgroundColor: 'gray',
    },
    textContainer: {
        height: 50,
        backgroundColor: 'green',
        margin: 10,
    },
    text: {
        height: 36,
    },
});