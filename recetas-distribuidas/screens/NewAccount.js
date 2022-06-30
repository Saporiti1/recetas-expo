import React, { useState } from 'react';
import { Icon, IconComponentProvider, IconButton } from "@react-native-material/core";
import { View, Text, Image, TextInput, SafeAreaView, StyleSheet, Alert, Pressable, Button } from 'react-native';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";




const NewAccount = ({ navigation }) => {
  const [textEmail, onChangeEmail] = useState("");
  const [textUser, onChangeUser] = useState("");
  const [textPass, onChangePass] = useState("");

  //const [aviso, setAviso] = useState("");

  return (
    <View style={styles.container}>
      <SafeAreaView>

        <IconButton icon={props => <Icon name="arrow-left" size={25} style={{marginRight: 10, color: '#F1AE00' }} />} onPress={() => navigation.navigate('Home')}/>
        
        
        <Image source={require('../media/imgLogin.png')} style={{ width: '100%', height: 250 }} />

        <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <View>
            <Text style={styles.textTitle}> CREAR CUENTA </Text>
            <Text style={styles.textSubTitle}> COMIDAPP </Text>
          </View>

          <View style={{display: 'flex', width: '80%', marginTop: 10, height: 150, flexDirection: 'column', justifyContent: 'space-around'}}>
            <SafeAreaView>
              <TextInput style={styles.input} onChangeText={onChangeEmail} value={textEmail} placeholder="Email"/>
              <TextInput style={styles.input} onChangeText={onChangeUser} value={textUser} placeholder="Usuario"/>
              <TextInput style={styles.input} onChangeText={onChangePass} value={textPass} secureTextEntry={true} placeholder="Contraseña"/>
            </SafeAreaView>
          </View>


          <View>
            <Pressable onPress={() => navigation.navigate('NewAccount2')} title="Login" style={styles.bttnLogin}>
              <Text style={styles.textLogin}> Continuar </Text>
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
    <NewAccount />
  </IconComponentProvider>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: Platform.OS === 'android' ? 25 : 0
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
