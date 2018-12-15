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
                        <BaseText>
                            <Text style={styles.headerText}>
                                Arrowverse
                            </Text>
                        </BaseText>
                    </View>
                </View>
                <ScrollView>
                    <TouchableOpacity
                        style={styles.linkContainer}
                        onPress={() => NavigationService.navigate('Home')}
                    >
                        <View style={styles.textContainer}>
                            <BaseText>
                                <Text style={styles.text}>
                                    Home
                                </Text>
                            </BaseText>
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
        backgroundColor: '#f5f5f6',

    },
    headerContainer: {
        backgroundColor: '#455a64',
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
    },
    textContainer: { 
        paddingLeft: 10,
    },
    text: { 
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Roboto',
    }
});