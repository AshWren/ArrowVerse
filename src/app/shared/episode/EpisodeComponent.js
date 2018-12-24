/*  

TO DO: 

*/

import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { CheckBox } from 'react-native-elements';

export default class EpisodeComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.checkbox}>
                    <CheckBox 
                        
                    />
                </View>
                <View style={styles.showIcon}>
                    <Text>0</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>
                        Episode Title
                    </Text>
                    <View style={styles.bottomTextContainer}>
                        <Text style={styles.seasonText}>
                            Season XX
                        </Text>
                        <Text style={styles.episodeText}>
                            Episode XX
                        </Text>
                    </View>
                </View>
                <View style={styles.expandBtnContainer}>
                <Icon.Button 
                    name='ios-arrow-down'
                    color='#f5f7f9'
                    size={24}
                    backgroundColor='transparent'
                />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#004928',
        height: 75,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    checkbox: {
        color: '#f5f7f9',
    },
    showIcon: {
        color: '#f5f7f9',
    },
    textContainer: {
        width: '60%',
        color: '#f5f7f9',
        alignContent: 'center',
    },
    titleText: {
        color: '#f5f7f9',
        textAlign: 'center',
    },
    bottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    seasonText: {
        color: '#f5f7f9',
    },
    episodeText: {
        color: '#f5f7f9',
    },
    

});

