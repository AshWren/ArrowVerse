/*  

TO DO: 
get slider reversed
*/

import React, { Component } from 'react';
import { 
    StyleSheet, 
    Switch,
    Text, 
    TouchableOpacity, 
    View 
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { CheckBox } from 'react-native-elements';
import DropDownComponent from './DropDown';
import { FlatList } from 'react-native-gesture-handler';

export default class EpisodeComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShown: false,
        };
    }

    render() {
        return (
            <View style={styles.card}>
            <View style={styles.container}>
                
                    <View style={styles.checkbox}>
                        <CheckBox 
                            
                        />
                    </View>
                    <View style={styles.showIcon}>
                        <Text>0</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>
                            Episode Title
                        </Text>
                        <View style={styles.bottomTextContainer}>
                            <Text style={styles.seasonText}>
                                Season XX
                            </Text>
                            <Text style={styles.episodeText}>
                                Episode XX
                            </Text>
                        </View>
                    </View>
            
                        <Switch 
                            
                            onValueChange={
                                value => this.setState({
                                    isShown: value,
                                })}
                            value={
                                this.state.isShown
                            }
                            style={{transform: [
                                {
                                scaleX: .5,
                                },
                                {
                                scaleY: .5,
                            }],}}
                        />
             
                
                
            </View>
            <View >
                    <DropDownComponent 
                        show={this.state.isShown}
                    >
                        <View style={styles.containerDropDown}>
                            <View style={styles.row1}>
                                <View style={styles.multiverse}>
                                    <Text>Multiverse Episode:</Text>
                                    <Text>XXX</Text>
                                </View>
                                <View style={styles.airDate}>
                                    <Text>Air Date:</Text>
                                    <Text>XX.XX.XX</Text>
                                </View>
                            </View>
                            <View style={styles.row2}>
                                {/* <View style={styles.showTitle}> */}
                                    <Text>Arrow</Text>
                                {/* </View> */}
                                {/* <View style={styles.showSynopsis}> */}
                                    <Text>Synopsis: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est eopksio laborum. Sed ut perspiciatis unde omnis istpoe natus error sit voluptatem accusantium doloremque eopsloi laudantium, </Text>
                                {/* </View> */}
                            </View>
                        </View>
                            
                        
                    </DropDownComponent>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00351D',
        height: 75,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    checkbox: {
        color: '#f5f7f9',
    },
    showIcon: {
        color: '#f5f7f9',
    },
    textContainer: {
        width: '60%',
        color: '#f5f7f9',
        alignContent: 'center',
    },
    titleText: {
        color: '#f5f7f9',
        textAlign: 'center',
    },
    bottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    seasonText: {
        color: '#f5f7f9',
    },
    episodeText: {
        color: '#f5f7f9',
    },
    containerDropDown: {
        backgroundColor: '#004928',
        height: 300,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 75,
        top: 0,
        alignSelf: 'flex-start',
        margin: 10,
    },
    multiverse: {
        width: '35%',
    },
    airDate: {
        width: '25%',
    },
    row2: {
        flexDirection: 'column',
        width: '100%',
        
        margin: 10,
    },
    showTitle: {

    },
    showSynopsis: {

    },
});

