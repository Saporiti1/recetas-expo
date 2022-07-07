import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, StatusBar, Pressable } from 'react-native';
import { Icon, IconComponentProvider, Stack, TextInput, Box, IconButton, VStack } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';


import NavBarSup from '../components/NavBarSup';
import NavBarInf from '../components/NavBarInf';

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        step: 'Paso numero 1',
        descripcion: 'La comida es comprimida y dirigida desde la boca hacia el esófago mediante la deglución, y del esófago al estómago, donde los alimentos son mezclados con ácido clorhídrico que los descompone, sobre todo, a las proteínas desnaturalizándolas.',
    },

];


const CrearReceta = () => {

    const navigation = useNavigation();
    const [valores, setValores] = useState([]);
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);


    const pickImage1 = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage1(result.uri);
        }
    };
    const pickImage2 = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage2(result.uri);
        }
    };

    const pickImage3 = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage3(result.uri);
        }
    };



    return (
        <View style={styles.container}>
            <NavBarSup />

            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10 }}>
                <TextInput id="NombreReceta" variant="outlined" color='#F1AE00' style={{ width: '80%' }} placeholder='Nombre' />

                <Stack direction="row" spacing={3} style={{ marginTop: 1 }}>
                    <Box style={{ borderWidth: 3, backgroundColor: 'grey', borderRadius: 10 }}>
                        <IconButton icon={props => <Icon name="add-outline" size={40} />} onPress={pickImage1} />
                    </Box>
                    <Box style={{ borderWidth: 3, backgroundColor: 'grey', borderRadius: 10 }}>
                        <IconButton icon={props => <Icon name="add-outline" size={40} />} onPress={pickImage2} />
                    </Box>
                    <Box style={{ borderWidth: 3, backgroundColor: 'grey', borderRadius: 10 }}>
                        <IconButton icon={props => <Icon name="add-outline" size={40} />} onPress={pickImage3} />
                    </Box>
                </Stack>
                <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 3}}>
                    <Image source={{ uri: image1 }} style={styles.image} />
                    <Image source={{ uri: image2 }} style={styles.image} />
                    <Image source={{ uri: image3 }} style={styles.image} />
                </View>
            </View>

            <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
                <View>
                    <View>
                        <View>
                            <Text style={{ backgroundColor: '#FFC68C', width: '100%', display: 'flex', marginTop: 10, fontSize: 18 }}> Descripcion </Text>
                        </View>
                        <View style={{ backgroundColor: '#EBEBAD' }}>
                            <Box
                                style={{
                                    bgcolor: 'background.paper',
                                    borderRadius: 12,
                                    boxShadow: 1,
                                    fontWeight: 'bold',
                                    marginTop: 5
                                }}
                            >
                                <TextInput fullWidth id="descripcion_receta" hiddenLabel color='white' multiline={true} />
                            </Box>
                        </View>
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={{ backgroundColor: '#FFC68C', width: '100%', display: 'flex', marginTop: 10, fontSize: 18 }}> Pasos </Text>
                    </View>
                    <View>
                        <Box style={{ borderRadius: 12, marginTop: 1 }}>
                            <View>
                                {itemData.map((item) => (
                                    <Box style={{ display: 'flex', flexDirection: 'row', borderRadius: 12, boxShadow: 1, fontWeight: 'bold', backgroundColor: '#EBEBAD', }} >
                                        <Image source={{ uri: item.img }} style={{ width: 110, height: 110, marginLeft: 1, borderRadius: 12 }} />

                                        <View style={{ paddingLeft: 5, width: '73%' }} >
                                            <Text style={{ fontSize: 16, color: 'brown' }}>{item.step}</Text>
                                            <Text style={{ fontSize: 12 }}>{item.descripcion}</Text>
                                        </View>
                                    </Box>
                                ))}
                            </View>
                        </Box>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 5, backgroundColor: '#EBEBAD' }} >
                        <Box style={{ borderWidth: 3, backgroundColor: 'grey', borderRadius: 12, width: 110, height: 110 }}>
                            <IconButton icon={props => <Icon name="add-outline" size={40} />} style={{ width: 105, height: 100 }} />
                        </Box>
                        <View style={{ paddingLeft: 5, width: '96%' }}>
                            <Text style={{ fontSize: 16, color: 'brown' }}>NUEVO PASO</Text>
                            <TextInput fullWidth id="descripcion_receta" hiddenLabel color='white' multiline={true} />
                        </View>

                    </View>
                </View>
                <View>
                    <Text style={{ backgroundColor: '#FFC68C', width: '100%', display: 'flex', marginTop: 10, fontSize: 18 }}> Ingredientes </Text>
                    <VStack m={4} spacing={2} divider={true} style={{ backgroundColor: '#EBEBAD', borderRadius: 8 }}>
                        {
                            valores.map((v, i) =>
                                <View style={{ marginLeft: 2, marginTop: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontWeight: 'bold', paddingTop: 20 }}> {'\u2B24'}</Text>
                                    <TextInput id="NombreReceta" variant="standard" color='#F1AE00' style={{ width: '40%' }} placeholder='Ingrediente' value={v.ingrediente} onChange={(z) => {
                                        const aux = [...valores]
                                        aux[i].ingrediente = z.target.value
                                        setValores(aux)
                                    }} />
                                    <TextInput id="NombreReceta" variant="standard" color='#F1AE00' style={{ width: '40%' }} placeholder='Cantidad' value={v.cantidad} onChange={(z) => {
                                        const aux = [...valores]
                                        aux[i].cantidad = z.target.value
                                        setValores(aux)
                                    }} />
                                </View>
                            )
                        }
                        <Pressable style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingVertical: 12,
                            paddingHorizontal: 32,
                            borderRadius: 12,
                            backgroundColor: '#F1AE00',
                            width: 250,
                            marginLeft: 80
                        }}
                            onPress={() => setValores([...valores, { ingrediente: '', cantidad: 0 }])}
                        >
                            <Text>Agregar Ingrediente</Text>
                        </Pressable>
                    </VStack>

                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18, backgroundColor: '#FFC68C', paddingTop: 10, width: '50%' }}>Cantidad de personas</Text>
                        <TextInput id="NombreReceta" variant="standard" color='#F1AE00' style={{ width: '40%' }} placeholder='Cantidad' />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                        <Text style={{ fontSize: 18, backgroundColor: '#FFC68C', paddingTop: 10, width: '50%' }}>Cantidad de porciones</Text>
                        <TextInput id="NombreReceta" variant="standard" color='#F1AE00' style={{ width: '40%' }} placeholder='Cantidad' />
                    </View>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 10 }}>
                    <Pressable style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: 12,
                        paddingHorizontal: 32,
                        borderRadius: 12,
                        backgroundColor: '#F1AE00',
                        width: 250
                    }}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text >Agregar Receta</Text>
                    </Pressable>
                </View>
                <View style={{ height: 70 }}>

                </View>
            </ScrollView>

            <NavBarInf />
        </View>
    )

};
export default () => (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <CrearReceta />
    </IconComponentProvider>
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,

    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    }
});