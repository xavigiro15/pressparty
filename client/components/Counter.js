import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Counter extends Component {

  render() {
    return (
      <View style={styles.counter}>
        <Text style={styles.counterText}>
          {this.props.counter} HITS
        </Text>
      </View>
    );
  }
}


const styles = {
  counter: {
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontWeight: 'bold',
    fontFamily: 'Futura',
    fontSize: 20,
  }
};
