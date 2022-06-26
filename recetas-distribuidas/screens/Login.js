import React, { useState } from 'react';
import { View, Text, Image, TextInput, SafeAreaView, StyleSheet, Alert, Pressable, Button } from 'react-native';



const Login = ({ navigation }) => {
    const [text, onChangeText] = React.useState("");
    const [textPass, onChangeTextPass] = React.useState("");

    return (
        <View style={{ backgroundColor: '#F4F4F4', height: 'auto'}}>
            <Image source={require('../media/imgLogin.png')} style={{ width: '100%', height: 300 }} />

            <View style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{
                    display: 'flex',
                    width: '80%',
                    marginTop: 10,
                    height: 150,
                    flexDirection: 'column',
                    justifyContent: 'space-around'
                }}>
                    <SafeAreaView>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
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
                <Pressable onPress={() => Alert.alert('Simple Button pressed')} title="Login" >
                    <Text style={styles.textMeOlvideContra} >Me olvide la Contraseña</Text>
                </Pressable>
                <View>
                    <Pressable onPress={() => Alert.alert('Simple Button pressed')} title="Login" style={styles.bttnLogin} >
                        <Text style={styles.textLogin} >Login</Text>
                    </Pressable>
                </View>

                <View style={styles.fixToText}>
                    <Text>No tenes cuenta?</Text>
                    <Pressable onPress={() => Alert.alert('Simple Button pressed')} title="Login" >
                        <Text style={styles.textCrear}>  Crear</Text>
                    </Pressable>
                </View>
            </View>
        </View >
    );
}
export default Login;


const styles = StyleSheet.create({
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
    }
});
