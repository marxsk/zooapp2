import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TabBarIOS,
} from 'react-native';

var Swiper = require('react-native-swiper');
var AnimalView = require('./AnimalView.ios');
var AnimalDetail = require('./AnimalDetail.ios');

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  slide1: {
    flex: 1,
    backgroundColor: '#9DD6EB',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 64,
  },
  slide2: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 64,
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 64,
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 22,
  }
})

var swiper = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'childTab',
    };
  },

  render: function() {
    if (this.props.link === 'link:agama') {
      return (
        <TabBarIOS
     unselectedTintColor="yellow"
     tintColor="white"
     barTintColor="darkslateblue">
     <TabBarIOS.Item
            title="Children"
            selected={this.state.selectedTab === 'childTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'childTab',
              });
            }}>
        <AnimalDetail />
      </TabBarIOS.Item>
      <TabBarIOS.Item
        title="Wikipedia"
        selected={this.state.selectedTab === 'wikiTab'}
        onPress={() => {
          this.setState({
            selectedTab: 'wikiTab',
          });
        }}>
        <Text>No content yet</Text>
      </TabBarIOS.Item>
      <TabBarIOS.Item
        title="Adult"
        selected={this.state.selectedTab === 'adultTab'}
        onPress={() => {
          this.setState({
            selectedTab: 'adultTab',
          });
        }}>
        <Text>No content yet</Text>
      </TabBarIOS.Item>
      <TabBarIOS.Item
        title="Susedia"
        selected={this.state.selectedTab === 'neighTab'}
        onPress={() => {
          this.setState({
            selectedTab: 'neighTab',
          });
        }}>
        <Text>No content yet</Text>
      </TabBarIOS.Item>
      <TabBarIOS.Item
        title="QR codes"
        selected={this.state.selectedTab === 'qrTab'}
        onPress={() => {
          this.setState({
            selectedTab: 'qrTab',
          });
        }}>
        <Text>No content yet</Text>
      </TabBarIOS.Item>

    </TabBarIOS>
    )} else {
      return(
      <View style={styles.slide1}>
        <Text>Text is missing</Text>
      </View>
      );
    }
  }
})

module.exports = swiper;
