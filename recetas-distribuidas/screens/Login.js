import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, SafeAreaView, StyleSheet, Alert, Pressable, StatusBar, Modal } from 'react-native';


import { loginUser } from '../utils/recipesAPI';



const Login = ({ navigation }) => {
  const [textUser, onChangeTextUser] = useState("");
  const [textPass, onChangeTextPass] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  //const [aviso, setAviso] = useState('');


  //ACA NO LE DOY CON EL USE EFFECT PERO FUNCIONA BIEN... IGUAL VERLO BIEN...
  const validateUser = async () => {
    const userDataAPI = await loginUser(textUser, textPass);

    //console.log(userDataAPI);
    if (userDataAPI == 200) {
      //setAviso(<Alert severity="success">Todo en orden</Alert>);
      setTimeout(() => {
        navigation.navigate('Home');
      }, 1000);
    }
    else {
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
