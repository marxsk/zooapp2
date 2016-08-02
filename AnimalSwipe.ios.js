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

      <Swiper style={styles.wrapper} showsButtons={true} loop={false}>
        <View style={styles.slide1}>
          <AnimalView image='hippo-1'>
            <Text style={{color: 'red'}}>Ahoj děti!</Text>  Jsem bazilišek a chtěl bych vám povědět něco o svých kamarádech, se kterými tady v zoo bydlím. Jsou to agamy kočinčinské, jeden sameček agamák a dvě samičky. (Samečka poznáte podle toho, že je barevnější, má na hřbetě větší hřeben a má žlutooranžově zbarvený spodek krku. Jinak jsou všechny agamy svrchu zelené, trochu do hněda a mají světlá bříška.)
          </AnimalView>
        </View>

        <View style={styles.slide2}>
          <AnimalView image='hippo-1'>
            Agamy měří zhruba tři čtvrtě metru – takže jsou o něco delší než dvě dlouhá pravítka. Možná si říkáte, že až tak dlouhé nevypadají. To proto, že mají dlouhatánský ocas. Hodí se jim, když lezou po stromech nebo když plavou. Cože? Že jste nevěděly, že agamy umí plavat? No jéje! Agamy jsou ve vodě jako doma, a ještě se umí skvěle potápět. A aby toho nebylo málo, umí agamy taky utíkat jen po zadních nohou. A jak rychle!
          </AnimalView>
        </View>

        <View style={styles.slide1}>
          <AnimalView image='hippo-1'>
            Pokud si teď říkáte, že vás na agamách už nic nepřekvapí, jste na omylu: agamy mají tři oči! Dvě normální, těch jste si určitě všimly, a mezi nimi mají takový puntík, kterým vnímají jen světlo. A to tak dobře, že se dokážou probudit, když nad nimi letí dravec, který by je mohl chtít sníst. Agamy samotné se krmí hlavně hmyzem. Občas si pošmáknou i na nějaké rybce nebo myšce. Zato zelenina jim moc nevoní.
          </AnimalView>
        </View>

        <View style={styles.slide1}>
          <AnimalView image='hippo-1'>
            Jak jsem říkal na začátku, tyhle agamy jsou z Kočinčíny, to je v Asii – na spodku Číny, kousku Vietnamu a tam kolem. Agamy totiž mají rády teplíčko; potřebují ho, aby mohly naklást vajíčka, která zahrabávají do země. A když je dost teplo, vylíhnou se z vajíček za nějaké dva měsíce malé agamky.
          </AnimalView>
        </View>

        <View style={styles.slide2}>
          <AnimalView image='hippo-1'>
            No a na konec, připomínají vám agamy trochu jedno zlobivé pohádkové zvíře? Nejste samy, Angličané říkají agamám čínský vodní drak.
          </AnimalView>
        </View>
      </Swiper>
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
