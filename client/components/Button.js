import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';


export default class BigButton extends Component {

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.button} onPress={this.props.onButtonPress}>
          <View >
            <Text style={styles.buttonText}>HIT ME!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = {
  button: {
    backgroundColor: '#3bbef7',
    marginBottom: 20,
    height: 280,
    width: 280,
    borderRadius: 140,
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Futura',
    fontSize: 12,
  }

};
