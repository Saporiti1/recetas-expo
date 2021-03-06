import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, StatusBar, Pressable } from 'react-native';
import { Icon, IconComponentProvider, Stack, TextInput, Box, IconButton, VStack } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';



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
    const [pasos, setPasos] = useState([]);
    const [image1, setImage1] = useState(null);
    const [image4, setImage4] = useState([]);
    const [filtro, setFiltro] = useState('');



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
    const pickImage4 = async (index) => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result.uri);

        if (!result.cancelled) {
            if (index >= image4.length){
                setImage4([...image4, result.uri]);
            } else {
                const aux = image4.slice();
                aux[index] = result.uri;
                setImage4(aux);
            }
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
                    <Image source={{ uri: image1 }} style={styles.image} />
                </Stack>
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
                    <Text style={{ backgroundColor: '#FFC68C', width: '100%', display: 'flex', marginTop: 10, fontSize: 18 }}> Pasos </Text>
                    <VStack m={4} spacing={2} divider={true} style={{ backgroundColor: '#EBEBAD', borderRadius: 8 }}>
                        {
                            pasos.map((v, i) =>
                                <View style={{ marginLeft: 2, marginTop: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Box style={{ borderWidth: 3, backgroundColor: 'grey', borderRadius: 10, marginBottom: 10 }}>
                                        <IconButton icon={props => <Icon name="add-outline" size={40} />} onPress={() => pickImage4(i)} />
                                    </Box>
                                    <Image source={{ uri: image4.length > i ? image4[i] : undefined}} style={styles.image} />
                                    <TextInput fullWidth id="descripcion_receta" hiddenLabel color='#F1AE00' multiline={true} style={{ marginRight: 10, width: '70%' }} placeholder='Explicacion' value={v.explicacion} onChange={(z) => {
                                        const aux = [...pasos]
                                        aux[i].explicacion = z.target.value
                                        setPasos(aux)
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
                            onPress={() => setPasos([...pasos, { uri: '', explicacion: '', pasoNum: 0 }])}
                        >
                            <Text>Agregar paso</Text>
                        </Pressable>
                    </VStack>
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
                                    <TextInput id="NombreReceta" variant="standard" color='#F1AE00' keyboardType='numeric' style={{ width: '20%' }} placeholder='Cantidad' value={v.cantidad} onChange={(z) => {
                                        const aux = [...valores]
                                        aux[i].cantidad = z.target.value
                                        setValores(aux)
                                    }} />
                                    <Picker selectedValue={v.unidad} style={{ height: 30, width: '30%' }} onValueChange={(value, itemIndex) => setValores(value)}>
                                        <Picker.Item label='Kg' value='kg' />
                                        <Picker.Item label='Lt' value='lt' />
                                        <Picker.Item label='Cm3' value='cm3' />
                                        <Picker.Item label='mml' value='mml' />
                                    </Picker>
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
                            onPress={() => setValores([...valores, { ingrediente: '', cantidad: 0, unidad: '' }])}
                        >
                            <Text>Agregar Ingrediente</Text>
                        </Pressable>
                    </VStack>

                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18, backgroundColor: '#FFC68C', paddingTop: 10, width: '50%' }}>Cantidad de personas</Text>
                        <TextInput id="NombreReceta" variant="standard" keyboardType='numeric' color='#F1AE00' style={{ width: '40%', marginRight: 15 }} placeholder='Cantidad' />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                        <Text style={{ fontSize: 18, backgroundColor: '#FFC68C', paddingTop: 10, width: '50%' }}>Cantidad de porciones</Text>
                        <TextInput id="NombreReceta" variant="standard" keyboardType='numeric' color='#F1AE00' style={{ width: '40%', marginRight: 15 }} placeholder='Cantidad' />
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
        marginLeft: 5,
        marginTop: 3,
        marginRight: 5
    }
});