import React, { useState } from 'react';
import { View, FlatList, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const db = require('../db.json');

import logoCopa from '../assets/logo-copa.png';
import Brasil from '../assets/Brasil.png';
import Bolivia from '../assets/Bolivia.png';
import Peru from '../assets/Peru.png';
import Venezuela from '../assets/Venezuela.png';

export default function Main({ navigation }) {
  const [jogos, setJogos] = useState(db.jogos);

  function handleResultado(item) {
    navigation.navigate('Resultado', {
      item,
    });
  }

  function verificaBandeiraCasa(item) {
    switch (item.timeCasa) {
      case 'Brasil':
        return (
          <Image source={Brasil} />
        );
      case 'Peru':
        return (
          <Image source={Peru} />
        );
      case 'Venezuela':
        return (
          <Image source={Venezuela} />
        );
      case 'Bolivia':
        return (
          <Image source={Bolivia} />
        );
    }
  }

  function verificaBandeiraFora(item) {
    switch (item.timeFora) {
      case 'Brasil':
        return (
          <Image source={Brasil} />
        );
      case 'Peru':
        return (
          <Image source={Peru} />
        );
      case 'Venezuela':
        return (
          <Image source={Venezuela} />
        );
      case 'Bolivia':
        return (
          <Image source={Bolivia} />
        );
    }
  }
 
  renderJogos = ({ item }) => (
    <View style={styles.confronto}>
      <View style={styles.info}>
        <View style={styles.infoHeader}>
          <View style={styles.esquerda}>
            {verificaBandeiraCasa(item)}
            <Text style={styles.timeCasaText}>{item.timeCasa} </Text>
          </View>
          <View style={styles.centro}>
            <Text style={styles.centroText}>X</Text>
          </View>
          <View style={styles.direita}>
            {verificaBandeiraFora(item)}
            <Text style={styles.timeForaText}>{item.timeFora} </Text>
          </View>
        </View>
        <Text style={styles.status}>{item.status} </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => handleResultado(item)} >
        <Text style={styles.textBtn}>Ver resultado</Text>
      </TouchableOpacity>
    </View>
  )
  
  return (
    
    <KeyboardAvoidingView behavior="padding" style={styles.container}>

      <FlatList
        style={styles.list}
        data={jogos}
        keyExtractor={item => item.id.toString()}
        renderItem={this.renderJogos}
        ListHeaderComponent={<View style={styles.headerFlatlist}><Image style={styles.logo} source={logoCopa} /></View>}
        
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    height: 160,
    width: 160,
    marginTop: 25,
  },

  headerFlatlist: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  list: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30,
  },

  confronto: {
    borderTopWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  info: {
    alignItems: 'center',
  },

  infoHeader: {
    flexDirection: 'row',
  },
  
  esquerda: {
    alignItems: 'center',
  },

  centro: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginHorizontal: 20,
  },

  direita: {
    alignItems: 'center',
  },

  timeCasaText: {
    fontSize: 15,
  },

  timeForaText: {
    fontSize: 15,
  },

  centroText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  status: {
    marginTop: 10,
    fontWeight: 'bold',
  },

  times: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },

  textBtn: {
    color: '#fff',
    fontWeight: 'bold',
  },

  button: {
    height: 42,
    backgroundColor: '#0000CD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginVertical: 10,
  },
});
