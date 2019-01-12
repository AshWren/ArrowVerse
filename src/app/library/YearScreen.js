/*  

TO DO: 

*/

import React, { Component } from 'react';
import { Text, View } from 'react-native';



import Header from '../shared/theme/Header';


class YearScreen extends Component {
    render() {
        return (
            <View>

                <Header 
                    title={'Years'} 
                />

                <Text>YearScreen Works!</Text>
            </View>
        );
    }
}

export default YearScreen;