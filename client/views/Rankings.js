import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  Alert,
  Button,
  AlertIOS,
} from 'react-native';

import { StackNavigator } from 'react-navigation';



export default class Rankings extends Component {

  state = {
    scores: []
  }

  static navigationOptions = {
    title: 'Rankings',
    headerLeft: null,
    cardStack: {
            gesturesEnabled: false,
        },
  }

  componentDidMount() {
    fetch('http://localhost:3000/scores')
    .then(response => response.json())
    .then(scores => {
        return this.setState({scores:scores});
      })
  }

  restart = () => {
    const { navigate } = this.props.navigation;

    navigate('PressParty')
  }

  renderScores = () => {
    return this.state.scores.map(score => (
      <View>
        <Text style={styles.players}>
          {score.name} — {score.value} HITS
        </Text>
      </View>
    ))
  }

  render() {
    const { name } = this.props.navigation.state.params.state.userInfo;

    return (
      <ScrollView style={styles.container}>
        {this.renderScores()}
        <Button
          onPress={this.restart}
          title="Restart"
        />
      </ScrollView>
    );
  }

}
  const styles = {
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    players: {
      fontWeight: 'bold',
      padding: 5,
      borderBottomColor: 'black',
      borderBottomWidth: 1,

    },

  };
