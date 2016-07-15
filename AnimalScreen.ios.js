import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';

var AnimalScreen = React.createClass({
  render() {
    return (
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
          <Text style={styles.text}>
          Ahoj děti!  Jsem bazilišek a chtěl bych vám povědět něco o svých kamarádech, se kterými tady v zoo bydlím. Jsou to agamy kočinčinské, jeden sameček agamák a dvě samičky. (Samečka poznáte podle toho, že je barevnější, má na hřbetě větší hřeben a má žlutooranžově zbarvený spodek krku. Jinak jsou všechny agamy svrchu zelené, trochu do hněda a mají světlá bříška.)
          </Text>
          <Text style={styles.text}>
          Agamy měří zhruba tři čtvrtě metru – takže jsou o něco delší než dvě dlouhá pravítka. Možná si říkáte, že až tak dlouhé nevypadají. To proto, že mají dlouhatánský ocas. Hodí se jim, když lezou po stromech nebo když plavou. Cože? Že jste nevěděly, že agamy umí plavat? No jéje! Agamy jsou ve vodě jako doma, a ještě se umí skvěle potápět. A aby toho nebylo málo, umí agamy taky utíkat jen po zadních nohou. A jak rychle!
          </Text>
          <Text style={styles.text}>
          Pokud si teď říkáte, že vás na agamách už nic nepřekvapí, jste na omylu: agamy mají tři oči! Dvě normální, těch jste si určitě všimly, a mezi nimi mají takový puntík, kterým vnímají jen světlo. A to tak dobře, že se dokážou probudit, když nad nimi letí dravec, který by je mohl chtít sníst. Agamy samotné se krmí hlavně hmyzem. Občas si pošmáknou i na nějaké rybce nebo myšce. Zato zelenina jim moc nevoní.
          </Text>
          <Text style={styles.text}>
          Jak jsem říkal na začátku, tyhle agamy jsou z Kočinčíny, to je v Asii – na spodku Číny, kousku Vietnamu a tam kolem. Agamy totiž mají rády teplíčko; potřebují ho, aby mohly naklást vajíčka, která zahrabávají do země. A když je dost teplo, vylíhnou se z vajíček za nějaké dva měsíce malé agamky.
          </Text>
          <Text style={styles.text}>
          No a na konec, připomínají vám agamy trochu jedno zlobivé pohádkové zvíře? Nejste samy, Angličané říkají agamám čínský vodní drak.
          </Text>
        </ScrollView>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'yellow',
    padding: 0,
    paddingTop: 64,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderWidth: 3,
    borderColor: 'green',
  },
  text: {
    fontSize: 22,
    color: '#fff',
  },
  scrollView: {
    backgroundColor: '#aaaabb',
    padding: 5,
    borderWidth: 5,
  },
});

module.exports = AnimalScreen;
