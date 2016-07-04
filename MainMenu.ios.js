import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
} from 'react-native';

var ContactScreen = require('./ContactScreen.ios');

var MainMenu = React.createClass({
  goContactScreen: function() {
    this.props.navigator.push({
      title: 'Contact',
      component: ContactScreen,
    })
  },
  render() {
    return (
      <View style={styles.container}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.goDerper()}
            underlayColor='#bbbbbb'
          >
            <Text style={styles.buttonText}>Zviera</Text>
          </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => this.goContactScreen()}
          underlayColor='#bbbbbb'
        >
          <Text style={styles.buttonText}>Kontakt</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => this.goDerper()}
          underlayColor='#bbbbbb'
        >
          <Text style={styles.buttonText}>Hugo</Text>
        </TouchableHighlight>

      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#5515f4',
    paddingTop: 20,
  },
  button: {
    backgroundColor: '#123456',
    borderWidth: 5,
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
  },
});

module.exports = MainMenu;
