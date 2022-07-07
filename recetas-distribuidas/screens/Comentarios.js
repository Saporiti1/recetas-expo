import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView, StatusBar } from 'react-native';
import { IconButton, Icon, IconComponentProvider, Divider, Provider, Stack, Button,
    Dialog, DialogHeader, DialogContent, DialogActions, TextInput } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation, useRoute } from '@react-navigation/native';


import Rating from '../components/Rating';
import RatingDinamico from '../components/RatingDinamico';
import NavBarSup from '../components/NavBarSup';
import { newReview } from '../utils/recipesAPI';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Comentarios = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const fullReceta = route.params.comments;
    const nameReceta = route.params.nombre;
    const [visible, setVisible] = useState(false);
    const [stars, setStars] = useState(0);
    const [comment, setComment] = useState('');

    /*const [state, setState] = useState('');
    callbackFunction = (childData) => {
        this.setState({message: childData})
    }*/

    const addComment = async () => {
        //HABÍA QUE VER COMO CREAR EL ID DEL COMENTARIO...
        const idComment = parseInt(Math.random()*18);
        //SETEEO ACA A LAS ESTRELLAS PORQUE NO PUEDO OBTENER EL VALOR DEL "RATING DINAMICO"...
        setStars(4);
        const reviewdataAPI = await newReview(stars, comment, idComment);
        console.log(reviewdataAPI);
        if(reviewdataAPI !== 200) {
            Alert.alert('Hubo un error cargando el comentario');
        }
        setVisible(false);
    }


    return (
        <View style={styles.container}>
            <NavBarSup />

            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>{nameReceta}</Text>
                    <Text>Comentarios y calificaciones</Text>
                </View>
                <View style={{ marginTop: 25 }}>
                    <Rating  rating={3}/>
                </View>
                <IconButton icon={props => <Icon name="pencil" size={25} style={{color: '#F1AE00'}}/>} onPress={() => setVisible(true)} style={{marginTop: 10, left: 30}} />

                <Dialog visible={visible} onDismiss={() => setVisible(false)} >
                    <DialogHeader title="Ingrese su puntuacion" />
                    <DialogContent>
                        <Stack spacing={2}>

                            <RatingDinamico />
                            
                            <Text style={{marginTop: 5}}>Comentario</Text>
                            <TextInput fullWidth id="descripcion_receta" hiddenLabel color='#F1AE00' multiline={true} value={comment} onChangeText={setComment}/>
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
                            onPress={addComment}
                        />
                    </DialogActions>
                </Dialog>
            </View>

            <Divider />
            <ScrollView>
                <View>
                    {
                        fullReceta.map((item, key) => {
                            return (
                                <View style={{marginTop: 5, left: 5}} key={item}>
                                    <Text style={{fontSize: 18}}>{item.user.name}</Text>
                                    <Text style={{marginLeft: 250, bottom: 20}}> <Rating rating={item.rating} /> </Text>

                                    <Text>{item.comments}</Text>

                                    <Divider style={{marginTop: 5, width: '80%', left: 30}} />
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