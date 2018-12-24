import React, {Component} from 'react';
import AppNav from './src/app/AppNav';
import NavigationService from './src/app/NavigationService';

import { createStackNavigator, createAppContainer } from 'react-navigation';

const TopLevelNavigator = createStackNavigator(
  {
    Nav: {
      screen: AppNav,
    }
  }
)

const AppContainer = createAppContainer(TopLevelNavigator);

export default class App extends React.Component {
 

  render() {
    return (
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
