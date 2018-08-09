import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, TouchableNativeFeedback, Alert, Button, AlertIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Expo from 'expo';


export default class LogIn extends Component {

  state = { userInfo: null, loggedIn: null };

  async logIn() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('152986195384288', {
        permissions: ['public_profile'],
      });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture`);
        const userInfo = await response.json();
        this.setState({userInfo});
        this.setState({loggedIn: true});
      this.props.navigation.navigate('Home',{
              state: this.state,
            });
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Button
          onPress={() => this.logIn()}
          title="Log in with Facebook"
        />

      </View>
    );
  }

}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
      padding: 25,
    },
  });
