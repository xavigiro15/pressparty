import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class Profile extends Component {

  render() {
    const { name } = this.props.navigation.state.params.state.userInfo;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{name}</Text>
        <Button
          title="Log out"
          // onPress={FB.logout()}
        />
      </View>
    );
  }
}
