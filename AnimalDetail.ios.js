import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';

var Swiper = require('react-native-swiper');
var AnimalView = require('./AnimalView.ios');
const styles = require('./styles.ios');

var AnimalDetail = React.createClass({
  render() {
    if (this.props.type === 'swiper') {
      return this.render_swiper();
    } else if (this.props.type === 'scroll') {
      return this.render_scroll();
    } else {
      return (<View />);
    }
  },

  render_scroll() {
    return(
      <View style={styles.container}>
        <View style={{
          flex: 0,
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
        }}>
        <Image
          source={require('./img/animal/hippo.png')}
          resizeMode='contain'
          style={{
            height: 100,
            width: 300,
          }}
        />
        <View style={{
          flex: 1,
        }} />
        </View>
        <ScrollView
          style={styles.scrollView}
        >
          <Text style={styles.ctext}>
          Ahoj děti!  Jsem bazilišek a chtěl bych vám povědět něco o svých kamarádech, se kterými tady v zoo bydlím. Jsou to agamy kočinčinské, jeden sameček agamák a dvě samičky. (Samečka poznáte podle toho, že je barevnější, má na hřbetě větší hřeben a má žlutooranžově zbarvený spodek krku. Jinak jsou všechny agamy svrchu zelené, trochu do hněda a mají světlá bříška.)
          </Text>
          <Text style={styles.ctext}>
          Agamy měří zhruba tři čtvrtě metru – takže jsou o něco delší než dvě dlouhá pravítka. Možná si říkáte, že až tak dlouhé nevypadají. To proto, že mají dlouhatánský ocas. Hodí se jim, když lezou po stromech nebo když plavou. Cože? Že jste nevěděly, že agamy umí plavat? No jéje! Agamy jsou ve vodě jako doma, a ještě se umí skvěle potápět. A aby toho nebylo málo, umí agamy taky utíkat jen po zadních nohou. A jak rychle!
          </Text>
          <Text style={styles.ctext}>
          Pokud si teď říkáte, že vás na agamách už nic nepřekvapí, jste na omylu: agamy mají tři oči! Dvě normální, těch jste si určitě všimly, a mezi nimi mají takový puntík, kterým vnímají jen světlo. A to tak dobře, že se dokážou probudit, když nad nimi letí dravec, který by je mohl chtít sníst. Agamy samotné se krmí hlavně hmyzem. Občas si pošmáknou i na nějaké rybce nebo myšce. Zato zelenina jim moc nevoní.
          </Text>
          <Text style={styles.ctext}>
          Jak jsem říkal na začátku, tyhle agamy jsou z Kočinčíny, to je v Asii – na spodku Číny, kousku Vietnamu a tam kolem. Agamy totiž mají rády teplíčko; potřebují ho, aby mohly naklást vajíčka, která zahrabávají do země. A když je dost teplo, vylíhnou se z vajíček za nějaké dva měsíce malé agamky.
          </Text>
          <Text style={styles.ctext}>
          No a na konec, připomínají vám agamy trochu jedno zlobivé pohádkové zvíře? Nejste samy, Angličané říkají agamám čínský vodní drak.
          </Text>
        </ScrollView>
      </View>
    );
  },

  render_swiper() {
    return(
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
  );
  }
});

module.exports = AnimalDetail;
