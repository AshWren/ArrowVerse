/*  

TO DO: 

*/

import React, { Component } from 'react';
import { 
    StyleSheet,
    Text, 
    View 
} from 'react-native';

import Header from '../shared/theme/Header';
import CategoryComponent from '../shared/category/CategoryComponent';



export default class LibraryScreen extends Component {
    render() {

    
    
        return (
            <View>

                <Header 
                    title={'Library'} 
                    onMenuPress={this.props.navigation}
                />

                <Text>LibraryScreen Works!</Text>

                <View 
                    style={styles.arrowContainer}
                    
                >
                    <CategoryComponent 
                        name={'Arrow'}
                        
                    />
                </View>
                <View style={styles.flashContainer}>
                    <CategoryComponent 
                        name={'Flash'}
                    />
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({

    arrowContainer: {
        height: 100,
        width: 100,
        margin: 20,
        backgroundColor: '#00351D',
    },
    nameContainer: {
        color: '#f5f7f9',
        fontSize: 30,
        fontFamily: 'Baskerville',
    },  
});

