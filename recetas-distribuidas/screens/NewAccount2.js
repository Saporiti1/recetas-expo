import React, { useState } from 'react';
import { Icon, IconComponentProvider, IconButton } from "@react-native-material/core";
import { View, Text, Image, TextInput, SafeAreaView, StyleSheet, Alert, Pressable, StatusBar } from 'react-native';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";




const NewAccount2 = ({ navigation }) => {
  const [textName, onChangeName] = useState("");
  const [textLastName, onChangeLastName] = useState("");
  const [textAge, onChangeAge] = useState("");
  const [textCountry, onChangeCountry] = useState("");

  //const [aviso, setAviso] = useState("");

  return (
    <View style={styles.container}>
      <SafeAreaView>

        <IconButton icon={props => <Icon name="arrow-left" size={25} style={{marginRight: 10, color: '#F1AE00' }} />} onPress={() => navigation.navigate('Home')}/>
        
        

        <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <View>
            <Text style={styles.textTitle}> CREAR CUENTA </Text>
            <Text style={styles.textSubTitle}> COMIDAPP </Text>
          </View>

          <View style={{display: 'flex', width: '80%', marginTop: 10, height: 150, flexDirection: 'column', justifyContent: 'space-around'}}>
            <SafeAreaView>
              <TextInput style={styles.input} onChangeText={onChangeName} value={textName} placeholder="Nombre"/>
              <TextInput style={styles.input} onChangeText={onChangeLastName} value={textLastName} placeholder="Apellido"/>
              <TextInput style={styles.input} onChangeText={onChangeAge} value={textAge} placeholder="Edad"/>
              <TextInput style={styles.input} onChangeText={onChangeCountry} value={textCountry} placeholder="País"/>
            </SafeAreaView>
          </View>


          <View>
            <Pressable onPress={() => navigation.navigate('Login')} title="Login" style={styles.bttnLogin}>
              <Text style={styles.textLogin}> Aceptar </Text>
            </Pressable>
          </View>
          <View style={styles.fixToText}>
            <Text>Haciendo click en continuar estás aceptando los </Text>
            <Pressable onPress={() => Alert.alert('Simple Button pressed')} title="Login">
              <Text style={styles.textCrear}>Términos y condiciones</Text>
            </Pressable>
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
        borderRadius: 4,
        backgroundColor: '#F1AE00',
    },
    textLogin: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
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
