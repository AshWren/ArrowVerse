import { StackNavigator, DrawerNavigator } from 'react-navigation';

import DrawerContainer from './DrawerContainer';

import HomeScreen from './home/HomeScreen';
import LibraryScreen from './library/LibraryScreen';
import ListScreen from './list/ListScreen';
import SeasonScreen from './season/SeasonScreen';
import SettingsScreen from './settings/SettingsScreen';

const DrawerNav = DrawerNavigator(
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
        }
    },
    {
        headerMode: 'none',
        contentComponent: DrawerContainer,
    }
);

const StackNav = StackNavigator(
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

const AppNav = StackNavigator(
    {
        Stack: {
            screen: StackNav,
        },
        Drawer: {
            screen: DrawerNav,
        }
    },
    {
        headerMode: 'none',
        initialRouteName: 'Stack',
        navigationOptions: {

        }
    }
);

export default AppNav;