import React, { useState } from 'react';
import { Icon, IconComponentProvider, IconButton } from "@react-native-material/core";
import { View, Text, Image, TextInput, SafeAreaView, StyleSheet, Alert, Pressable, StatusBar } from 'react-native';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';


import { requestPasswordReset } from '../utils/recipesAPI';


const ResetPassword = ({}) => {
  const navigation = useNavigation();
  const [textEmail, onChangeEmail] = useState("");

  //const [aviso, setAviso] = useState("");

  const sendCodeEmail = async () => {
    const userDataAPI = await requestPasswordReset(textEmail);
    //console.log(userDataAPI);
    
    //SUPUSE QUE EL CÓDIGO DE VERIFICACIÓN ES MAYOR A 1000... SINO DESPUÉS SE CAMBIA LA LÓGICA...
    if(userDataAPI > 1000) {
      navigation.navigate('ResetPassword2', {userDataAPI: userDataAPI, textEmail: textEmail});
    } else if(userDataAPI == 404) {
      Alert.alert('El correo electrónico no existe');
      //setAviso(<Alert severity="error">El correo electrónico no existe</Alert>);
    } else {
      Alert.alert('Hubo un error al enviar el código');
      //setAviso(<Alert severity="error">Hubo un error al enviar el código</Alert>);
    }
  }



  return (
    <View style={styles.container}>
      <SafeAreaView>

        <IconButton style={{marginLeft: 20, marginTop: 20}} icon={props => <Icon name="arrow-left" size={40} style={{ marginRight: 10, color: '#F1AE00' }} />} onPress={() => navigation.navigate('Login')} />

        <View style={{display: 'flex', width: '100%', height: 250, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../media/imgReset.png')} style={{width: 160, height: 160 }} />
        </View>

        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <View>
            <Text style={styles.textTitle}> CAMBIAR CONTRASEÑA </Text>
          </View>

          <View style={{ display: 'flex', width: '80%', marginTop: 10, height: 150, flexDirection: 'column', justifyContent: 'space-around' }}>
            <SafeAreaView>
              <TextInput style={styles.input} onChangeText={onChangeEmail} value={textEmail} placeholder="Email" />
            </SafeAreaView>
          </View>


          <View>
            <Pressable onPress={sendCodeEmail} style={styles.bttnLogin}>
              <Text style={styles.textLogin}> Continuar </Text>
            </Pressable>
          </View>
          

        </View>
      </SafeAreaView>
    </View >
  );
};
export default () => (
  <IconComponentProvider IconComponent={MaterialCommunityIcons}>
    <ResetPassword />
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
    marginTop: 90,
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
    marginTop: 10,
  },
  textCrear: {
    fontWeight: 'bold',
    color: '#F1AE00',
  },
});
