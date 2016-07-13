import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

var ContactScreen = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Kontaktne informacie
        </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#5515f4',
    paddingTop: 70,
  },
  text: {
    fontSize: 22,
    color: '#fff',
  },
});

module.exports = ContactScreen;
