import React, { Component } from 'react';
import { AppLoading, Asset } from 'expo';

import { AppNavigator } from '~/router';


export default class App extends Component {
  render () {
    return (
        <AppNavigator />
    );
  }
}
