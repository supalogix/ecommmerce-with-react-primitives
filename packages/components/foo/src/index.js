import React from "react"
import { View, Text, Image, StyleSheet } from 'react-primitives';

export default class Foo extends React.Component {
  render() {
    return (
      <View style={styles.foo}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  foo: {
    width: 100,
    height: 100,
    backgroundColor: '#ff00ff',
  },
});