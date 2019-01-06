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
                
                <Header 
                    title={'The List'} 
                    onMenuPress={this.props.navigation}
                />


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


    // opDrawer= () => {
    //     console.log('start open drawer')
        
    //     // this.props.navigation.openDrawer();
    
    //     console.log('end open drawer')
    // };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#051b2a',
        flexDirection: 'column',
        alignItems: 'stretch',
        top: 0,
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
    listContainer: {
        top: 0,
    }
    
});
