import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import {
    IconButton, Icon, IconComponentProvider, Divider, Provider,
    Stack,
    Button,
    Dialog,
    DialogHeader,
    DialogContent,
    DialogActions,
    TextInput,
} from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';
import Rating from '../components/Rating';


import NavBarSup from '../components/NavBarSup';

const itemData = [
    {
        usuario: 'Federico',
        comentario: 'Local agradable en el que pedimos el menú degustación de verano en la que los platos estaban equilibrados pero no puedo dejar de resaltar que el primero (sopa fría de melón) fue una combinación de melón y pepino con el regusto amargo de este último que realmente "mata" la experiencia. El resto adecuado y en su punto',
        rating: 5
    },
    {
        usuario: 'Juan',
        comentario: 'Local agradable en el que pedimos el menú degustación de verano en la que los platos estaban equilibrados pero no puedo dejar de resaltar que el primero (sopa fría de melón) fue una combinación de melón y pepino con el regusto amargo de este último que realmente "mata" la experiencia. El resto adecuado y en su punto',
        rating: 3
    },
    {
        usuario: 'Ivan',
        comentario: 'Local agradable en el que pedimos el menú degustación de verano en la que los platos estaban equilibrados pero no puedo dejar de resaltar que el primero (sopa fría de melón) fue una combinación de melón y pepino con el regusto amargo de este último que realmente "mata" la experiencia. El resto adecuado y en su punto',
        rating: 4
    },
    {
        usuario: 'Augusto',
        comentario: 'Local agradable en el que pedimos el menú degustación de verano en la que los platos estaban equilibrados pero no puedo dejar de resaltar que el primero (sopa fría de melón) fue una combinación de melón y pepino con el regusto amargo de este último que realmente "mata" la experiencia. El resto adecuado y en su punto',
        rating: 1
    },
];

const Comentarios = () => {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false);


    return (
        <View style={styles.container}>
            <NavBarSup />

            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>Fideos con salsa</Text>
                    <Text>Comentarios y calificaciones</Text>
                </View>
                <View style={{ marginTop: 25 }}>
                    <Rating />
                </View>
                <IconButton icon={props => <Icon name="pencil" size={25} style={{ color: '#F1AE00' }} />} onPress={() => setVisible(true)} style={{ marginTop: 10, left: 30 }} />

                <Dialog visible={visible} onDismiss={() => setVisible(false)} >
                    <DialogHeader title="Ingrese su puntuacion" />
                    <DialogContent>
                        <Stack spacing={2}>
                            <Rating />
                            <Text style={{marginTop: 5}}>Comentario</Text>
                            <TextInput fullWidth id="descripcion_receta" hiddenLabel color='#F1AE00' multiline={true} />
                        </Stack>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            title="Cancel"
                            compact
                            variant="text"
                            color='#F1AE00'
                            onPress={() => setVisible(false)}
                        />
                        <Button
                            title="Enviar"
                            compact
                            variant="text"
                            color='#F1AE00'
                            onPress={() => setVisible(false)}
                        />
                    </DialogActions>
                </Dialog>
            </View>

            <Divider />
            <ScrollView>
                <View>
                    {
                        itemData.map((item, key) => {
                            return (
                                <View style={{ marginTop: 5, left: 5, }}>
                                    <Text style={{ fontSize: 18 }}>{item.usuario}</Text>
                                    <Text style={{ marginLeft: 250, bottom: 20 }}> <Rating /> </Text>

                                    <Text>{item.comentario}</Text>

                                    <Divider style={{ marginTop: 5, width: '80%', left: 30 }} />
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
};


export default () => (
    <Provider>
        <IconComponentProvider IconComponent={MaterialCommunityIcons}>
            <Comentarios />
        </IconComponentProvider>
    </Provider>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
    },
});