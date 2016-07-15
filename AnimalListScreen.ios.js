import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

var AlphabetListView = require('react-native-alphabetlistview');

class Cell extends Component {
  render() {
    return (
      <View style={{height:30}}>
        <Text>{this.props.item.name}</Text>
      </View>
    );
  }
}
class SectionItem extends Component {
  render() {
    return (
      <Text style={{color:'#f00'}}>{this.props.title}</Text>
    );
  }
}
class SectionHeader extends Component {
  render() {
    // inline styles used for brevity, use a stylesheet when possible
    var textStyle = {
      textAlign:'center',
      color:'#fff',
      fontWeight:'700',
      fontSize:16
    };

    var viewStyle = {
      backgroundColor: '#ccc'
    };
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{this.props.title}</Text>
      </View>
    );
  }
}

var AnimalListScreen = React.createClass({
  getInitialState() {
    let state = this.prepareSortedStructure([
        {name: 'agama', link: 'link:agama'},
        {name: 'hyena', link: 'link:hyena'},
        {name: 'hospoda', link: 'link:hospoda'},
        {name: 'hroch', link: 'link:hroch'},
        {name: 'antracit', link: 'link:antracit'},
        {name: 'choroš', link: 'link:choros'},
      ]);

    return state;
  },
  prepareSortedStructure(animals) {
    let state = {
      data: {}
    };

    for (let animal of animals) {
      let firstLetter = animal.name.charAt(0).toUpperCase();

      // @todo: This code is not used because AlphabetList is not prepared for that
      //  fix that later
      /*
      if ((firstLetter === 'C') && (animal.name.charAt(1) === 'h')) {
        firstLetter = 'Ch';
      }
      */

      if (!(firstLetter in state.data)) {
        state.data[firstLetter] = [];
      }

      state.data[firstLetter].push(animal);
    };

    for (let letter in state.data) {
      state.data[letter].sort(function(a, b) {
        return a.name.localeCompare(b.name);
      })
    };

    return state;
  },
  render() {
    return (
      <View style={styles.container}>
        <AlphabetListView
          data={this.state.data}
          cell={Cell}
          cellHeight={30}
          sectionListItem={SectionItem}
          sectionHeader={SectionHeader}
          sectionHeaderHeight={22.5}
        />
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
    color: 'green',
  },
});

module.exports = AnimalListScreen;
