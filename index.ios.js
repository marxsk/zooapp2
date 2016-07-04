import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} from 'react-native';

var MainMenu = require('./MainMenu.ios');

class zooapp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.navigationContainer}
        initialRoute={{
          title: 'Navigator Example',
          navigationBarHidden: true,
          backButtonTitle: 'XYZ',
          component: MainMenu,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  navigationContainer: {
    flex: 1,
  },
});

AppRegistry.registerComponent('zooapp', () => zooapp);
