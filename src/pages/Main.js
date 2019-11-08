import React, { useState } from 'react';
import { View, FlatList, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const db = require('../db.json');

import logoCopa from '../assets/logo-copa.png';

export default function Main({ navigation }) {
  const [jogos, setJogos] = useState(db.jogos);

  function handleResultado() {
    // navigation.navigate('Resultado');
  }
 
  renderJogos = ({ item }) => (
    <View style={styles.confronto}>
      <View style={styles.info}>
        <Text style={styles.times}>{item.timeCasa} X {item.timeFora}</Text>
        <Text >{item.status}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleResultado} >
        <Text style={styles.textBtn}>Ver mais</Text>
      </TouchableOpacity>
    </View>
  )
  
  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
      <Image style={styles.logo} source={logoCopa} />

      <FlatList
        style={styles.list}
        data={jogos}
        keyExtractor={item => item.id.toString()}
        renderItem={this.renderJogos}
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
  },

  list: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30,
  },

  confronto: {
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 30,
  },

  info: {
    alignItems: 'center',
  },

  times: {
    fontWeight: 'bold',
    fontSize: 18,
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
