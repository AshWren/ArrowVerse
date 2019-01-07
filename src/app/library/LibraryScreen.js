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

class LibraryScreen extends Component {
    render() {

    // const ArrowShow = ShowSorter.getAllEpisodesByShow("Arrow");

   
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