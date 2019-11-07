import React, { useState } from 'react';
import { View, FlatList, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const db = require('../db.json');

import logoCopa from '../assets/logo-copa.png';

export default function Main() {
  const [jogos, setJogos] = useState(db.jogos);
 
  renderJogos = ({ item }) => (
    <View>
      <Text >Adversário: {item.adversario}</Text>
      <Text >Jogo: {item.status}</Text>
      <TouchableOpacity>
        <Text>Ver mais</Text>
      </TouchableOpacity>
    </View>
  )
  
  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
      <Image source={logoCopa} />

      <FlatList
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
});
