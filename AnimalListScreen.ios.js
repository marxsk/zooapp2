import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput,
} from 'react-native';

var AlphabetListView = require('react-native-alphabetlistview');
var AnimalSwipe = require('./AnimalSwipe.ios');
var navigator = null;

class Cell extends Component {
  goAnimalScreen(linkAnimal) {
    navigator.push({
      title: 'Animal',
      component: AnimalSwipe,
      passProps: { link: linkAnimal},
    });
  };

  render() {
    return (
      <TouchableHighlight
        style={styles.buttonx}
        onPress={() => this.goAnimalScreen(this.props.item.link)}
        underlayColor='#bbbbbb'
      >
      <View style={{height:30}}>
        <Text>{this.props.item.name}</Text>
      </View>
      </TouchableHighlight>
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
    navigator = this.props.navigator;

    let state = this.prepareSortedStructure([
        {name: 'hyena', link: 'link:hyena'},
        {name: 'hospoda', link: 'link:hospoda'},
        {name: 'hroch', link: 'link:hroch'},
        {name: 'agama', link: 'link:agama'},
        {name: 'antracit', link: 'link:antracit'},
        {name: 'choroš', link: 'link:choros'},
        {name: 'drozd', link: 'link:drozd'},
        {name: 'šimpanz', link: 'link:simpanz'},
        {name: 'červík', link: 'link:cerv'},
        {name: 'medvěd kamčatský', link: 'link:medvedKamcatsky'},
        {name: 'tygr sumaterský', link: 'link:tygrSumatersky'},
    ]);

    return state;
  },
  prepareSortedStructure(animals) {
    let state = {
      fullData: {}
    };

    for (let animal of animals) {
      let firstLetter = animal.name.charAt(0).toUpperCase();

      if ((firstLetter === 'C') && (animal.name.charAt(1) === 'h')) {
        firstLetter = 'Ch';
      }

      if (!(firstLetter in state.fullData)) {
        state.fullData[firstLetter] = [];
      }

      state.fullData[firstLetter].push(animal);
    };

    for (let letter in state.fullData) {
      state.fullData[letter].sort(function(a, b) {
        return a.name.localeCompare(b.name);
      })
    };

    state['data'] = state.fullData;

    return state;
  },
  setFilter(text) {
    this.setState({
      text: text.text,
      data: this.filter(text.text.toUpperCase()),
    })
  },
  filter(text) {
    let data = {};
    for (let letter in this.state.fullData) {
      for (let idx in this.state.fullData[letter]) {
        if (this.state.fullData[letter][idx].name.toUpperCase().includes(text)) {
          if (!(letter in data)) {
            data[letter] = [];
          }
          data[letter].push(this.state.fullData[letter][idx]);
        }
      }
    }
    return data;
  },
  render() {
    return (
      <View style={styles.container}>
      <TextInput
        style={{height: 40, textAlign: 'center', borderColor: 'gray', borderWidth: 1, backgroundColor: 'white'}}
        onChangeText={(text) => this.setFilter({text})}
        value={this.state.text}
        placeholder='Search for Animal'
        autoCorrect={false}
      />
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
  buttonx: {
  }
});

module.exports = AnimalListScreen;
