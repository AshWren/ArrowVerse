// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View } from 'react-native';
// import { StackViewStyleInterpolator } from 'react-navigation-stack';
// import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux';

// // import Home from './src/app/home/HomeScreen';
// // import Library from './src/app/library/LibraryScreen';
// // import List from './src/app/list/ListScreen';
// // import Season from './src/app/season/SeasonScreen';
// // import Settings from './src/app/settings/SettingsScreen';



// const App = () => (

//   <View></View>
//   // <Router>
//   //   <Stack key="root">
//   //     <Scene key="home" component={Home} title="Home"/>
//   //     <Scene key="library" component={Library} title="Library"/>
//   //     <Scene key="list" component={List} title="List"/>
//   //     <Scene key="season" component={Season} title="Season"/>
//   //     <Scene key="settings" component={Settings} title="Settings"/>

//   //   </Stack>
//   // </Router>
// );

// export default App;

import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
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


// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
        
//         <AppNav 
//           style={styles.container}
//           ref={navigatorRef => {
//           NavigationService.setTopLevelNavigator(navigatorRef);
//         }}
//         />
//       </View>
//       // <AppNav navigation={this.props.navigation} />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     top: 0
//   }
// });



// const AppContainer = createAppContainer(AppNavigator);

// class App extends React.Component {
//   someEvent() {
//     // call navigate for AppNavigator here:
//     this.navigator &&
//       this.navigator.dispatch(
//         NavigationActions.navigate({ routeName: someRouteName })
//       );
//   }
//   render() {
//     return (
//       <AppContainer
//         ref={nav => {
//           this.navigator = nav;
//         }}
//       />
//     );
//   }
// }