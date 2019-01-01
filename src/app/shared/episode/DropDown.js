/*  

TO DO: 
reverse the slider 

*/

import React, { Component } from 'react';
import { 
    Text, 
    View 
} from 'react-native';
import PropTypes from 'prop-types';

const DropDownComponent = (props) => {
    const { children, show } = props;


    if (show) {
        return (
        
            <View {...this.props} >
                { children }
            </View>
        )
    }
    return null;
};

DropDownComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.element,
        ])),
    ]).isRequired,
    hide: PropTypes.bool,
};


export default DropDownComponent;