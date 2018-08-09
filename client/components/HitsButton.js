import React, { Component } from 'react';
import { View } from 'react-native';

import Counter from './Counter';
import BigButton from './Button';

export default class HitsButton extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Counter
        counter={this.props.counter}
        />

        <BigButton
        onButtonPress={this.props.onButtonPress}
        />

      </View>
    );
  }
}


const styles = {
  container: {
    justifyContent: 'center'  }

};
