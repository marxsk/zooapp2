import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image,
} from 'react-native';

var ContactScreen = require('./ContactScreen.ios');
var AnimalListScreen = require('./AnimalListScreen.ios');
var AnimalSwipe = require('./AnimalSwipe.ios');

var MainMenu = React.createClass({
  goContactScreen: function() {
    this.props.navigator.push({
      title: 'Contact',
      component: ContactScreen,
    })
  },
  goAnimalScreen: function(linkAnimal) {
    this.props.navigator.push({
      title: 'Animal',
      component: AnimalSwipe,
      passProps: { link: linkAnimal},
    })
  },
  goAnimalListScreen: function() {
    this.props.navigator.push({
      title: 'Animal List',
      component: AnimalListScreen,
    })
  },
  render() {
    return (
      <View style={styles.container}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.goAnimalListScreen()}
            underlayColor='#bbbbbb'
          >
            <Image source={require('./img/menu/amazon.jpg')} />
          </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => this.goContactScreen()}
          underlayColor='#bbbbbb'
        >
          <Image source={require('./img/menu/salamander.jpg')} />
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => this.goAnimalScreen('link:agama')}
          underlayColor='#bbbbbb'
        >
          <Image source={require('./img/menu/climate.jpg')} />
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
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#123456',
  },
});

module.exports = MainMenu;
