import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';


class AnimalView extends Component {
  render() {
    var pictures = {};
    pictures["hippo-1"] = require('./img/animal/hippo.png');

    let selectedImage = pictures[this.props.image];
    return (
      <View>
        <Image source={selectedImage} resizeMode='contain' style={styles.headerImage} />
        <View style={{ flex: 1, }} />
        <View style={styles.textView}>
          <Text style={styles.text}>
            {this.props.children}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerImage: {
    height: 100,
    width: 300,
  },
  textView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  }
});

module.exports = AnimalView;
