import { 
    createStackNavigator, 
    createDrawerNavigator, 
    createBottomTabNavigator,
} from 'react-navigation';

import DrawerContainer from './DrawerContainer';

import HomeScreen from './home/HomeScreen';
import LibraryScreen from './library/LibraryScreen';
import ListScreen from './list/ListScreen';
import SeasonScreen from './season/SeasonScreen';
import SettingsScreen from './settings/SettingsScreen';

import ShowScreen from './library/ShowScreen';
import YearScreen from './library/YearScreen';


const LibraryTabs = createBottomTabNavigator(
    {  
        Show: {
            screen: ShowScreen,
            navigationOptions: {
                title: "SHOWS",
            }
        },
        Year: {
            screen: YearScreen,
            navigationOptions: {
                title: "MULTIVERSE",
            }
        }
    },
    {
        headerMode: 'none',
        initialRouteName: 'Show',
        tabBarOptions: {
            activeTintColor: '#fff', 
            inactiveTintColor: '#2A6790',
            activeBackgroundColor: '#2A6790', 
            inactiveBackgroundColor: '#051B2A',
            labelStyle: {
                fontSize: 24,
                paddingBottom: 10,
            }
        }
    }
);

const DrawerNav = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Library: {
            screen: LibraryTabs,
        },
        List: {
            screen: ListScreen,
        },
        Season: {
            screen: SeasonScreen,
        },
        Settings: {
            screen: SettingsScreen,
        }
    },
    {
        headerMode: 'none',
        contentComponent: DrawerContainer,
    }
);



const StackNav = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Library: {
            screen: LibraryScreen,
        },
        List: {
            screen: ListScreen,
        },
        Season: {
            screen: SeasonScreen,
            
        },
        Settings: {
            screen: SettingsScreen,
        },
        Drawer: {
            screen: DrawerNav,
        }
    },
    {
        headerMode: 'none',
        initialRouteName: 'Drawer',
    }
);

const AppNav = createStackNavigator(
    {
        Stack: {
            screen: StackNav,
        },
        Drawer: {
            screen: DrawerNav,
        },
    },
    {
        headerMode: 'none',
        initialRouteName: 'Stack',
        navigationOptions: {

        }
    }
);

export default AppNav;