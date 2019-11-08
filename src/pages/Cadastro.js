import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import firebase from '../firebase';

import logoCopa from '../assets/logo-copa.png';

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleCadastrar() {
    try {
      if (senha < 3) {
        alert("Senha menor que 3")
        return;
      }

      firebase.auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(navigation.navigate('Main'))
    } catch (error) {
      console.log(error.toString());
    }
  }

  async function handleVoltar() {
    navigation.navigate('Login');
  }

  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
      <Image source={logoCopa} />

      <View style={styles.form}>
        <Text style={styles.label}>E-MAIL *</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        /> 

        <Text style={styles.label}>SENHA *</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity onPress={handleCadastrar} style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleVoltar} style={styles.buttonCadastro}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity> 
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

  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30,
  },

  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 2,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
  },

  button: {
    height: 42,
    backgroundColor: '#0000CD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },

  buttonCadastro: {
    height: 42,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 5,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 19,
  },
});
