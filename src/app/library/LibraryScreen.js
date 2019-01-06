/*  

TO DO: 

*/

import React, { Component } from 'react';
import { Text, View } from 'react-native';


import Header from '../shared/theme/Header';

class LibraryScreen extends Component {
    render() {
        return (
            <View>

                <Header title={'Library'} />
                <Text>LibraryScreen Works!</Text>
            </View>
        );
    }
}

export default LibraryScreen;