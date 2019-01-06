/*  

TO DO: 

styles and positioning
sectionList


*/

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../shared/theme/Header';
import EpisodeComponent from '../shared/episode/EpisodeComponent';



export default class ListScreen extends Component {

    render() {
        return (

            <View style={styles.container}>
                
                <Header title={'The List'} />

                <View style={styles.listContainer}>
                    <EpisodeComponent />
                    <EpisodeComponent />
                    <EpisodeComponent />
                    <EpisodeComponent />
                    <EpisodeComponent />
                    <EpisodeComponent />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#051b2a',
        flexDirection: 'column',
        alignItems: 'stretch',
        top: 0,
    },
    listContainer: {
        top: 0,
    }
    
});
