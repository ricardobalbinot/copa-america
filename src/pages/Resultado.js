import React, { useState, useEffect } from 'react';
import { View, FlatList, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import logoCopa from '../assets/logo-copa.png';
import Brasil from '../assets/Brasil.png';
import Bolivia from '../assets/Bolivia.png';
import Peru from '../assets/Peru.png';
import Venezuela from '../assets/Venezuela.png';

export default function Resultado({ navigation }) {
  const item = navigation.getParam('item', {});
  const [jogo, setJogo] = useState(item);

  const [placarCasa, placarFora] = jogo.resultado.split('-');

  function verificaBandeiraCasa() {
    switch (jogo.timeCasa) {
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

  function verificaBandeiraFora() {
    switch (jogo.timeFora) {
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

  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
      <Image style={styles.logo} source={logoCopa} />
      <View style={styles.confronto}>
        <View style={styles.info}>
          <View style={styles.infoHeader}>
            <View style={styles.esquerda}>
              {verificaBandeiraCasa()}
              <Text style={styles.timeCasaText}>{jogo.timeCasa} </Text>
              <Text style={styles.times}>{placarCasa}</Text>
            </View>
            <View style={styles.centro}>
              <Text style={styles.centroText}>X</Text>
            </View>
            <View style={styles.direita}>
              {verificaBandeiraFora()}
              <Text style={styles.timeForaText}>{jogo.timeFora} </Text>
              <Text style={styles.times}>{placarFora}</Text>
            </View>
          </View>
          
          <Text style={styles.data}>{jogo.data}</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  logo: {
    height: 160,
    width: 160,
    marginTop: 30,
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
    marginHorizontal: 30,
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
    marginTop: 15,
  },

  resultado: {
    flexDirection: 'row',
  },

  paisEsquerda: {
    marginRight: 50,
  },

  list: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30,
  },

  confronto: {
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 30,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    marginHorizontal: 20,
  },

  info: {
    alignItems: 'center',
  },

  times: {
    fontWeight: 'bold',
    fontSize: 28,
  },

  textBtn: {
    color: '#fff',
    fontWeight: 'bold',
  },

  data: {
    marginTop: 10,
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
