/*  

TO DO: 

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
                        <Text  style={styles.text}>0</Text>
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
                            <View style={styles.info}>
                                <View style={styles.row1}>
                                    <View style={styles.multiverse}>
                                        <Text style={styles.text}>Multiverse </Text>
                                        <Text style={styles.text}>Episode: XXX</Text>
                                    </View>
                                    <View style={styles.airDate}>
                                        <Text style={styles.text}>Air Date:</Text>
                                        <Text  style={styles.text}>XX.XX.XX</Text>
                                    </View>

                                </View>
                               <View styles={styles.row2}>
                                    <View style={styles.showTitleContainer}>
                                        <Text style={styles.showTitle}>Arrow</Text>
                                    </View>
                                    <View style={styles.showSynopsisContainer}>
                                        <Text style={styles.showSynopsis}>Synopsis: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est eopksio laborum. Sed ut perspiciatis unde omnis istpoe natus error sit voluptatem accusantium doloremque eopsloi laudantium, </Text>
                                    </View>
                                </View>
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
        height: 240,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    info: {
        width: '100%',
        top: 0,
        margin: 10,
    },  
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        top: 0,
        alignSelf: 'flex-start',

    },
    multiverse: {
        width: '35%',
        color: '#f5f7f9',
        
    },
    airDate: {
        width: '25%',
        color: '#f5f7f9',
    },
    row2: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '95%',
        height: 150,
        top: 0,
        alignSelf: 'flex-start',
    },
    showTitleContainer: {
    },
    showTitle: {
        color: '#f5f7f9',
        textAlign: 'center',
        fontSize: 36,
        textTransform: 'uppercase',
        margin: 10,
    },
    showSynopsisContainer: {
        width: '95%',
    },
    showSynopsis: {
        color: '#f5f7f9',
        fontSize: 16,
    },
    text: {
        color: '#f5f7f9',
        fontSize: 16,
    },
});

