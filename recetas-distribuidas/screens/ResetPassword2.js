import React, { useState } from 'react';
import { Icon, IconComponentProvider, IconButton } from "@react-native-material/core";
import { View, Text, Image, TextInput, SafeAreaView, StyleSheet, Alert, Pressable, StatusBar } from 'react-native';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation, useRoute } from '@react-navigation/native';


import { passwordReset } from '../utils/recipesAPI';
import { requestPasswordReset } from '../utils/recipesAPI';


const ResetPassword2 = ({}) => {
  const navigation = useNavigation();

  const route = useRoute();
  const codigoEnviado = route.params.userDataAPI;
  const userMail = route.params.textEmail;

  const [textCodigo, onChangeCodigo] = useState("");
  const [textPass, onChangePass] = useState("");
  const [textPass2, onChangePass2] = useState("");

  //const [aviso, setAviso] = useState("");

  const validateCode = async () => {
    if(codigoEnviado !== parseInt(textCodigo)) {
      Alert.alert('El código ingresado no coincide');
      //setAviso(<Alert severity="error">El código ingresado no coincide</Alert>);
    }
    else if(textPass !== textPass2) {
      Alert.alert('Las contraseñas no coinciden');
      //setAviso(<Alert severity="error">Las contraseñas no coinciden</Alert>);
    }
    else if(codigoEnviado == parseInt(textCodigo) && textPass == textPass2) {
      const userDataAPI = await passwordReset(userMail, codigoEnviado, textPass2);

      //setAviso(<Alert severity="success">Todo en orden</Alert>);
      setTimeout(() => {
        navigation.navigate('Login');
      }, 1500);
    }
  }
  const sendCodeEmail = async () => {
    const userPassAPI = await requestPasswordReset(textEmail);
    if(userPassAPI != 1000 || userPassAPI != 404) {
      Alert.alert('Hubo un error al enviar el código');
      //setAviso(<Alert severity="error">Hubo un error al enviar el código</Alert>);
    }
  }


  return (
    <View style={styles.container}>
      <SafeAreaView>

        <IconButton style={{marginLeft: 20, marginTop: 20}} icon={props => <Icon name="arrow-left" size={40} style={{color: '#F1AE00'}} />} onPress={() => navigation.navigate('ResetPassword')} />

        <View style={{display: 'flex', width: '100%', height: 250, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../media/imgReset.png')} style={{width: 160, height: 160 }} />
        </View>

        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <View>
            <Text style={styles.textTitle}> CAMBIAR CONTRASEÑA </Text>
          </View>

          <View style={{display: 'flex', width: '80%', marginTop: 10, height: 200, flexDirection: 'column', justifyContent: 'space-around' }}>
            <SafeAreaView>
              <TextInput style={styles.input} onChangeText={onChangeCodigo} value={textCodigo} placeholder="Código" />
              <TextInput style={styles.input} onChangeText={onChangePass} value={textPass} secureTextEntry={true} placeholder="Contraseña" />
              <TextInput style={styles.input} onChangeText={onChangePass2} value={textPass2} secureTextEntry={true} placeholder="Contraseña" />
            </SafeAreaView>
          </View>

          <View style={{display: 'flex', height: 250, flexDirection: 'column', alignItems: 'center'}}>
            <View>
              <Pressable onPress={validateCode} style={styles.bttnLogin}>
                <Text style={styles.textLogin}> Continuar </Text>
              </Pressable>
            </View>
            <View style={styles.fixToText}>
              <Text>No te llegó un mail? </Text>
              <Pressable onPress={sendCodeEmail} title="Login">
                <Text style={styles.textCrear}>volver a enviar</Text>
              </Pressable>
            </View>
          </View>

        </View>
      </SafeAreaView>
    </View >
  );
};
export default () => (
  <IconComponentProvider IconComponent={MaterialCommunityIcons}>
    <ResetPassword2 />
  </IconComponentProvider>
);

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
    marginTop: 40,
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
  textTitle:{
    fontSize: 20,
  },
  textMeOlvideContra: {
    fontWeight: 'bold',
    color: '#F1AE00',
    display: 'flex',
    marginLeft: 150,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  textCrear: {
    fontWeight: 'bold',
    color: '#F1AE00',
  },
});
