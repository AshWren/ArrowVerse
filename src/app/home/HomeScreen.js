/*  

TO DO: 

picture of The Book to replace holder

change press to swipe w/ animation

fix colors and positions


*/

import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import NavigationService from '../NavigationService';
import EpisodeSorter from '../../services/EpisodeSorter';

import BaseText from '../shared/theme/BaseText';

export default class HomeScreen extends Component {

    _onPressButton() {
        NavigationService.navigate('List');
    }

    
    render() {
    const ArrowSeasonShows = EpisodeSorter.getAllEpisodesByYear(2)

        return (

            <TouchableHighlight 
                onPress={this._onPressButton} 
                underlayColor='white'
                style={styles.container}
            >
                <View style={styles.btnContainer}>
                    <View style={styles.bookContainer}>
                        <Text>
                            Holder for The Book
                        </Text>    
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            Cross the next one 
                        </Text>
                        <View style={styles.bottomText}>

                        <Text style={styles.text}>
                            off The List
                            
                        </Text>
                        <Icon 
                            name='md-arrow-forward' 
                            color='#f5f7f9'
                            size={24}
                            
                        />
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#051b2a',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    btnContainer: {
        justifyContent: 'center',
        padding: 30,
    },
    bookContainer: {
        height: 300,
        backgroundColor: '#2A6790',
    },
    textContainer: {
        height: 50,
        margin: 10,
    },
    bottomText: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },  
    text: {
        fontSize: 20,
        color: '#f5f7f9',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        textAlign: 'center',
        margin: 5,
        marginRight: 10,
    },
    icon: {
        margin: 5
    },  
});