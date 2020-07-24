import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default () => (
  <View style={styles.wrapper}>
    <Text style={styles.text}>React Native France</Text>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 30,
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
});
