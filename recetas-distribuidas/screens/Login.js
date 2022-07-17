import React, { useState, useEffect, Component } from 'react';
import { View, Text, Image, TextInput, SafeAreaView, StyleSheet, Alert, Pressable, StatusBar, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { loginUser } from '../utils/recipesAPI';


const Login = ({navigation}) => {
  const [textUser, onChangeTextUser] = useState("");
  const [textPass, onChangeTextPass] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  //const [result, setResult] = useState('');

  /*const saveData = async () => {
    try {
      await AsyncStorage.setItem('idUser', '5');
      //console.log("si???" + await AsyncStorage.getItem('idUser'));
    }catch (error) {
     console.log(error); 
    }
  }
  saveData();*/
  
  const validateUser = async () => {
    const userDataAPI = await loginUser(textUser, textPass);
    //console.log("DATA EN EL LOGIN: " + userDataAPI.idUser);

    if (userDataAPI == 404 || userDataAPI == 500) {
      Alert.alert(
        'ERROR',
        'Usuario y/o contraseña erroneos',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed')
          },
        ]
      );
    }
    else {
      //console.log(JSON.stringify(userDataAPI));
      try {
        await AsyncStorage.setItem('userData', JSON.stringify(userDataAPI));
        console.log("userData LOGIN: " + await AsyncStorage.getItem('userData'));
      }catch (error) {
       console.log(error); 
      }
      setTimeout(() => {
        navigation.navigate('Home');
      }, 1000);
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: '100%' }}>
        <Image source={require('../media/imgLogin.png')} style={{ width: '100%', height: 250 }} />

        <View style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100%'
        }}>
          <View style={{
            display: 'flex',
            width: '80%',
            marginTop: 10,
            height: 150,
            flexDirection: 'column',
            justifyContent: 'space-around'
          }}>
            <SafeAreaView style={{ top: 30 }}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeTextUser}
                value={textUser}
                placeholder="Usuario"
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangeTextPass}
                value={textPass}
                secureTextEntry={true}
                placeholder="Contraseña"
              />
            </SafeAreaView>
          </View>

          <Pressable onPress={() => navigation.navigate('ResetPassword')} title="Login" >
            <Text style={styles.textMeOlvideContra}>Me olvide la Contraseña</Text>
          </Pressable>
          

          <View style={{ display: 'flex', height: '100%' }}>
            <View style={{ display: 'flex', marginTop: 50 }}>
              <Pressable onPress={validateUser} title="Login" style={styles.bttnLogin} >
                <Text style={styles.textLogin} >Login</Text>
              </Pressable>
            </View>

            <View style={styles.fixToText}>
              <Text>No tenes cuenta?</Text>
              <Pressable onPress={() => navigation.navigate('NewAccount')} title="Login" >
                <Text style={styles.textCrear}>  Crear</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View >
  );
}
export default Login;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: StatusBar.currentHeight
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  bttnLogin: {
    marginTop: 80,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    backgroundColor: '#F1AE00',
  },
  textLogin: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  textMeOlvideContra: {
    fontWeight: 'bold',
    color: '#F1AE00',
    display: 'flex',
    marginTop: 20,
    marginLeft: 150,
  },
  fixToText: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 15,
  },
  textCrear: {
    fontWeight: 'bold',
    color: '#F1AE00',
  },
});
