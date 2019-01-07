/*  

TO DO: 

*/

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
    createMaterialTopTabNavigator,
    createStackNavigator,
} from 'react-navigation'


import Header from '../shared/theme/Header';
import ShowSorter from '../../services/ShowSorter';
import EpisodeSorter from '../../services/EpisodeSorter';

class LibraryScreen extends Component {
    render() {

    // const ArrowShow = ShowSorter.getAllEpisodesByShow("Arrow");

    const ArrowSeasonShows = EpisodeSorter.getAllEpisodesByYear(2)
   
    console.log(ArrowSeasonShows);
    
        return (
            <View>

                <Header 
                    title={'Library'} 
                    onMenuPress={this.props.navigation}
                />

                <Text>LibraryScreen Works!</Text>
            </View>
        );
    }
}

export default LibraryScreen;