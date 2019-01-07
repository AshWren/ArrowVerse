/*  

TO DO: class that sorts "fetch" data to only provide the shows

*/

import React, { Component } from 'react';
import { Text, View } from 'react-native';





class ShowSorter {

EpisodeList = require('../assets/data/EpisodeList.json');

    getAllEpisodesByShow(name) {

        const EpisodesByShow = this.EpisodeList.shows.filter(show => {
            return show.ShowName.toLowerCase() === name.toLowerCase();
        });

    return EpisodesByShow;

    }

}

export default new ShowSorter();