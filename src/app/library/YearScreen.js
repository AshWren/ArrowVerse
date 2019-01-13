/*  

TO DO: 

*/

import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    TouchableOpacity, 
    View 
} from 'react-native';
import PropTypes from 'prop-types';


import Header from '../shared/theme/Header';
import CategoryComponent from '../shared/category/CategoryComponent';
import NavigationService from '../NavigationService';
import { TabHeading } from 'native-base';



export default class YearScreen extends Component {

   _onPressYearOne() {
       console.log('onPressYearOne')
       NavigationService.navigate('YearOne')
   }


    render() {
        return (
            <View style={styles.container}>

                <Header 
                    title={'Library'}
                    onMenuPress={this.props.navigation} 
                />
                    
                <View style={styles.bodyContainer}>

                <TouchableOpacity 
                    style={styles.categoryContainer}
                    onPress={this._onPressYearOne}
                >
                    <CategoryComponent 
                        name={'Year 1'}
                    />
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.categoryContainer}
                >
                    <CategoryComponent 
                        name={'Year 2'}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.categoryContainer}
                >
       
                    <CategoryComponent 
                        name={'Year 3'}
                    />         
                </TouchableOpacity>
                
                </View>


           
                <Text>YearScreen Works!</Text>
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

    bodyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },  
    categoryContainer: {
        height: 100,
        width: 100,
        margin: 10,
        backgroundColor: '#00351D',
    },
});


