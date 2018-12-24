/*  

TO DO: 

styles and positioning
sectionList

make search button work 
*/

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import EpisodeComponent from '../shared/episode/EpisodeComponent';


export default class ListScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Icon.Button
                        onPress={() => this.props.navigation.openDrawer()} 
                        name='ios-menu'
                        color='#f5f7f9'
                        size={24}
                        backgroundColor='transparent'
                    />
                    <Text style={styles.headerText}>
                        The List
                    </Text>
                    <Icon.Button 
                        name='ios-search'
                        color='#f5f7f9'
                        size={24}
                        backgroundColor='transparent'
                    />
                </View>
                <View style={styles.listContainer}>
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
        
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 100,
        alignItems: 'center',
        backgroundColor: '#093452',
    },
    headerText: {
        color: '#f5f7f9',
        fontSize: 30,
        fontFamily: 'Baskerville',
    },  
});
