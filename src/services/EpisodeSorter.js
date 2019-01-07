/*  

TO DO: class that sorts "fetch" data to only provide the shows

*/


class EpisodeSorter {

EpisodeList = require('../assets/data/EpisodeList.json');

    getAllEpisodesBySeason(name,seasonNum) {

        const EpisodeByShow = this.EpisodeList.shows.filter(show => {
            return show.ShowName.toLowerCase() === name.toLowerCase();
        });

        console.log("EpisodeByShow", EpisodeByShow);

        const EpisodeBySeason = EpisodeByShow[0].SeasonList.filter(show => {
            return show.SeasonNumber === seasonNum;
        })

        console.log("EpisodeBySeason", EpisodeBySeason);

    return EpisodeBySeason[0].EpisodeList;

    }

    getAllEpisodesByYear(yearNum) {

        const showList = [];
        
        const allEpisodes = [];


        const shows = this.EpisodeList.shows;
    
        for (i = 0; i < shows.length; i++){

            
            console.log('show', shows[i]);

            const yearSeason = shows[i].SeasonList.filter(season => season.YearNumber == yearNum);
            
            console.log('yearSeason', yearSeason);

            const episodes = yearSeason[0].EpisodeList;

            allEpisodes.push(episodes);

            console.log('episodes', episodes);
            showList.push(yearSeason);

        }

        console.log('showList',showList);
    
        console.log("allEpisodes", allEpisodes);

        return allEpisodes;
    }

}

export default new EpisodeSorter();