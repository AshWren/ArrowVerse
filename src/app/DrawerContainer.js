import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import NavigationService from './NavigationService';

import BaseText from './shared/theme/BaseText';

export default class DrawerContainer extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerTextContainer}>            
                        <Text style={styles.headerText}>
                            Arrowverse
                        </Text>
                    </View>
                </View>
                <ScrollView>
                    <TouchableOpacity
                        style={styles.linkContainer}
                        onPress={() => NavigationService.navigate('Home')}
                    >
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>
                                Home
                            </Text>            
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.linkContainer}
                        onPress={() => NavigationService.navigate('List')}
                    >
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>
                                The List
                            </Text>            
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.linkContainer}
                        onPress={() => NavigationService.navigate('Library')}
                    >
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>
                                Library
                            </Text>            
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#051b2a',

    }, 
    headerContainer: {
        backgroundColor: '#093452',
        paddingTop: 50,
        paddingBottom: 20,
        flexDirection: 'row', 
        justifyContent: 'center',
        
    },
    headerTextContainer: { 

    },
    headerText: { 
        color: '#fff',
        fontSize: 34,
        fontFamily: 'Roboto',
    },
    linkContainer: { 
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderColor: '#2A6790',
        borderWidth: 1,
    },
    textContainer: { 
        paddingLeft: 10,
    },
    text: { 
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: 'bold',

    }
});