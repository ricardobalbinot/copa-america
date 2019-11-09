import React, { useState } from 'react';
import { View, ToastAndroid, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import firebase from '../firebase';

import logoCopa from '../assets/logo-copa.png';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleLogin() {
    if (email && senha) {
      try {
        firebase.auth()
        .signInWithEmailAndPassword(email, senha)
        .then((user) => {
          ToastAndroid.show('Usuário logado com sucesso!', ToastAndroid.SHORT);
          navigation.navigate('Main');
        }).catch( (error) => {
          if (error.code === 'auth/wrong-password' || error.code === 'auth/invalid-email') {
            ToastAndroid.show('Login ou senha incorretos!', ToastAndroid.SHORT);
          } else if (error.code === 'auth/user-not-found') {
            ToastAndroid.show('Usuário não encontrado', ToastAndroid.SHORT);
          }
        })
      } catch (error) {
        ToastAndroid.show('Tente novamente', ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.show('Preencha todos os campos', ToastAndroid.SHORT);
    }
    
  }

  async function handleCadastrar() {
    navigation.navigate('Cadastro');
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
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

        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCadastrar} style={styles.buttonCadastro}>
          <Text style={styles.buttonText}>Cadastro</Text>
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
