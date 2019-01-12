/*  

TO DO: 

*/

import React, { Component } from 'react';
import { 
    StyleSheet,
    Text, 
    View 
} from 'react-native';
import PropTypes from 'prop-types';
import { TabHeading } from 'native-base';

TabHeading.propTypes = {
    name: PropTypes.string,
    onMenuPress: PropTypes.func,
    backgroundColor: PropTypes.string,
}

export default class CategoryComponent extends Component {
    render() {
        return (

            <View style={styles.categoryContainer}>
                
                <Text style={styles.nameContainer}> 
                    {this.props.name}
                </Text>
            </View>
 

        );
    }
}

const styles = StyleSheet.create({

    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    
        alignItems: 'center',
        // backgroundColor: '#093452',
    },
    nameContainer: {
        color: '#f5f7f9',
        fontSize: 30,
        fontFamily: 'Baskerville',
    },  
});
