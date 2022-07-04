import React, { useState } from 'react';
import { Icon, IconComponentProvider, IconButton } from "@react-native-material/core";
import { View, Text, Image, TextInput, SafeAreaView, StyleSheet, Alert, Pressable, StatusBar } from 'react-native';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';


import { addAccountDetails } from '../utils/recipesAPI';


const NewAccount2 = ({route}) => {
  const navigation = useNavigation();
  
  const userEmail = route.params;

  const [textName, onChangeName] = useState("");
  const [textLastName, onChangeLastName] = useState("");
  const [textAge, onChangeAge] = useState("");
  const [textCountry, onChangeCountry] = useState("");

  //const [aviso, setAviso] = useState("");

  const addNewDataUser = async () => {
    const userDataAPI = await addAccountDetails(userEmail, textName, textLastName, textAge, textCountry);
    console.log(userDataAPI);

    if(textName == '' || textLastName == '' || textAge == '' || textCountry == '') {
      Alert.alert('Debe ingresar todos los datos');
      //setAviso(<Alert severity="error">Debe ingresar todos los datos</Alert>);
    }else {
      if(userDataAPI == 200) {
        //setAviso(<Alert severity="success">Bienvenido, {inputOneName}!</Alert>);
        setTimeout(() => {
          navigation.navigate('Login');
        }, 1500);
      }else {
        Alert.alert('Hubo un problema en la carga');
        //setAviso(<Alert severity="error">Hubo un problema en la carga</Alert>);
      }
    }
  }


  return (
    <View style={styles.container}>
      <SafeAreaView>

        <IconButton style={{marginLeft: 20, marginTop: 20}} icon={props => <Icon name="arrow-left" size={40} style={{color: '#F1AE00' }} />} onPress={() => navigation.navigate('NewAccount')}/>

        <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{marginBottom: 60}}>
            <Text style={styles.textTitle}> CREAR CUENTA </Text>
            <Text style={styles.textSubTitle}> COMIDAPP </Text>
          </View>

          <View style={{display: 'flex', width: '80%', marginTop: 10, height: 200, flexDirection: 'column', justifyContent: 'space-around'}}>
            <SafeAreaView>
              <TextInput style={styles.input} onChangeText={onChangeName} value={textName} placeholder="Nombre"/>
              <TextInput style={styles.input} onChangeText={onChangeLastName} value={textLastName} placeholder="Apellido"/>
              <TextInput style={styles.input} onChangeText={onChangeAge} value={textAge} placeholder="Edad"/>
              <TextInput style={styles.input} onChangeText={onChangeCountry} value={textCountry} placeholder="País"/>
            </SafeAreaView>
          </View>


          <View style={{display: 'flex', height: 250, flexDirection: 'column', alignItems: 'center'}}>
            <View>
              <Pressable onPress={addNewDataUser} title="Login" style={styles.bttnNewAcc}>
                <Text style={styles.textLogin}> Aceptar </Text>
              </Pressable>
            </View>
            <View style={styles.fixToText}>
              <Text>Haciendo click en continuar estás aceptando los </Text>
              <Pressable onPress={() => Alert.alert('Términos y condiciones')} title="Login">
                <Text style={styles.textCrear}>Términos y condiciones</Text>
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
    <NewAccount2 />
  </IconComponentProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    paddingTop: StatusBar.currentHeight
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  bttnNewAcc: {
    marginTop: 120,
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
    marginTop: 70,
    fontSize: 30,
  },
  textSubTitle:{
    fontFamily: 'sans-serif',
    alignSelf: 'center',
    fontSize: 23,
    color: 'red'
  },
  textMeOlvideContra: {
    fontWeight: 'bold',
    color: '#F1AE00',
    display: 'flex',
    marginLeft: 150,
  },
  fixToText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  textCrear: {
    fontWeight: 'bold',
    color: '#F1AE00',
  },
});
