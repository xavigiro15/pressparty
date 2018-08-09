import React from 'react';
import { AppRegistry, Image } from 'react-native';
import { addNavigationHelpers, StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation';
import Expo from 'expo';


import LogIn from '~/views/LogIn';
import Profile from '~/views/Profile';
import PressParty from '~/views/PressParty';
import Rankings from '~/views/Rankings';

const stackNavigatorOpts = {
  cardStyle: {
    backgroundColor: '#fff',
    paddingTop: Expo.Constants.statusBarHeight
  },
  headerMode: 'none',
  initialRouteName: 'LogIn',
};

// const tabNavigatorOpts = {
//   animationEnabled: true,
//   initialRouteName: 'PressParty',
//   tabBarComponent: TabBarBottom,
//   tabBarPosition: 'top',
//   tabBarOptions: {
//     activeBackgroundColor: 'transparent',
//     inactiveBackgroundColor: 'transparent',
//     activeTintColor: constants.colors.primary,
//     inactiveTintColor: constants.colors.lightGray,
//     showIcon: true,
//     showLabel: false,
//     style: {
//       backgroundColor: 'transparent',
//       borderTopWidth: 0,
//       marginBottom: 20
//     }
//   }
// };

export const AppNavigator = StackNavigator(
  {
    Home: {
      screen: TabNavigator(
        {
          Profile: {
            screen: Profile,
            // navigationOptions: tabNavigationOptsGenerator(tabProfileImg, 30, 23)
          },
          PressParty: {
            screen: PressParty,
            // navigationOptions: tabNavigationOptsGenerator(tabMatchingImg, 31, 80)
          },
          Rankings: {
            screen: Rankings,
            // navigationOptions: tabNavigationOptsGenerator(tabContactsImg, 30, 34)
          }
        },
        // tabNavigatorOpts
      ),
      // navigationOptions
    },
    LogIn: {
      screen: LogIn,
      // navigationOptions
    },
  },
  stackNavigatorOpts
);
