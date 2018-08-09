import React, { Component } from 'react';
import { AppRegistry, Alert, Button, AlertIOS, StyleSheet, Text, View, TouchableHighlight, TouchableNativeFeedback} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Rankings from '~/views/Rankings';
import LogIn from '~/views/LogIn';
import HitsButton from '~/components/HitsButton';
import Timer from '~/components/Timer';

const seconds = 3;

class PressParty extends Component {

  static navigationOptions = {
    title: 'Press Party!',
  };

  state = {
    activeCount: false,
    seconds: seconds,
    hits : 0,
  };

  onButtonPress = () => {
    console.log('Pressed');
    if (this.state.activeCount === false) {
      this.setState({ activeCount: true})
      timerId = setInterval(this.countdown, 1000);
    }
    if (this.state.activeCount) {
      this.setState({ hits: this.state.hits + 1 });
    }
  }


  countdown = () => {
    console.log('countdownClick');
    if(this.state.seconds === 1){
      clearTimeout(timerId);
      this.state.seconds = 0;
      this.setState({ seconds: this.state.seconds });
      console.log(this.state.seconds);
      this.scoreAlert();
    } else {
      this.state.seconds--;
      this.setState({ seconds: this.state.seconds });
    }
  }


  endTimer = () => {
    this.setState({ activeCount: false});
    this.scoreAlert();
  }

  scoreAlert = () => {Alert.alert(
    'Final Score',
    this.state.hits.toString() + ' hits at a speed of ' + (this.state.hits/seconds).toFixed(2).toString() + ' hps',
    [
      {text: 'Okay', onPress: this.daFetch},
    ],
  )}


  daFetch = () => {
    const { name } = this.props.navigation.state.params.state.userInfo;

    fetch('http://localhost:3000/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        value: this.state.hits,
      })
    })
    .then(() => this.rankingNav())
  }

  rankingNav = () => {
    const { navigate } = this.props.navigation;
    navigate('Rankings');

    //parar crono
    if (this.state.activeCount === true) {
      clearTimeout(timerId);
    }
    
    this.setState({
      hits: 0,
      seconds: seconds,
      activeCount: false,
    });
  }




  render() {


    return (
      <View style={styles.container}>
        <Timer
          start={this.state.activeCount}
          seconds={this.state.seconds}
        />

        <HitsButton
          onButtonPress={this.onButtonPress}
          counter={this.state.hits}
        />

      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});


export default PressParty;
