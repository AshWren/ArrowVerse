/*  

TO DO: 

make search button work 
*/

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';


import NavigationService from '../../NavigationService';

import Icon from 'react-native-vector-icons/Ionicons';
import { TabHeading } from 'native-base';

TabHeading.propTypes = {
    title: PropTypes.string,
    onMenuPress: PropTypes.func,
}

export default class Header extends Component {


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Icon.Button
                        onPress={() => this.props.onMenuPress.openDrawer()} 
                        name='ios-menu'
                        color='#f5f7f9'
                        size={24}
                        backgroundColor='transparent'
                    />
                    <Text style={styles.headerText}>
                        {this.props.title}
                    </Text>
                    <Icon.Button 
                        name='ios-search'
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
