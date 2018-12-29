/*  

TO DO: 
reverse the slider 

*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
    Text, 
    View 
} from 'react-native';

const EpisodeDropDownComponent = (props) => {
    const { children, hide } = props;
    if (hide) {
        return null;
    }
    return (
        <View {...this.props} >
            { children }
        </View>
    );
};

EpisodeDropDownComponent.propTypes = {
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


export default EpisodeDropDownComponent;