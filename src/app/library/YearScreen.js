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


class LibraryScreen extends Component {
    render() {
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