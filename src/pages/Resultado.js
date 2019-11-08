import React, { useState } from 'react';
import { View, FlatList, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import logoCopa from '../assets/logo-copa.png';
import Brasil from '../assets/Brasil.png';
import Bolivia from '../assets/Bolivia.png';
import Peru from '../assets/Peru.png';
import Venezuela from '../assets/Venezuela.png';

export default function Resultado({ navigation }) {
  const item = navigation.getParam('item', {});
  const [jogo, setJogo] = useState(item);
  
  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
      <Image style={styles.logo} source={logoCopa} />

      <View style={styles.confronto}>
        <View style={styles.info}>
          <View style={styles.bandeiras}>
            <Image style={styles.bandeiraEsquerda} source={Brasil} />
            <Image source={Bolivia} />
          </View>
          <View style={styles.paises}>
            <Text style={styles.paisEsquerda}>{jogo.timeCasa} </Text>
            <Text>{jogo.timeFora} </Text>
          </View>
          <View style={styles.resultado}>
            <Text style={styles.times}>{jogo.resultado}</Text>
          </View>
          <Text>{jogo.data}</Text>
        </View>
      </View>
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

  bandeiras: {
    flexDirection: 'row',
  },

  paises: {
    flexDirection: 'row',
  },

  resultado: {
    flexDirection: 'row',
  },

  bandeiraEsquerda: {
    marginRight: 50,
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

  button: {
    height: 42,
    backgroundColor: '#0000CD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginVertical: 10,
  },
});
