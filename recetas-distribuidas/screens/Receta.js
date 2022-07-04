import React, { useState } from 'react';
import { View, Image, TextInput, ScrollView, StyleSheet, StatusBar, FlatList } from 'react-native';
import { Icon, IconComponentProvider, IconButton, Text } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import MaterialTabs from 'react-native-material-tabs';
import Carousel from '../components/Carousel';

const Receta = () => {
    const navigation = useNavigation();
    const [selectedTab, setSelectedTab] = useState(0);


    return (
        <View style={styles.container}>
            <Image source={require('../media/Receta1.png')} style={{ width: '100%', height: 250 }} />

            <View style={{ position: 'absolute', left: 10, top: StatusBar.currentHeight + 2 }}>
                <IconButton icon={props => <Icon name="arrow-back-outline" size={40} style={{ color: '#F1AE00' }} />} onPress={() => navigation.goBack()} />
            </View>

            <ScrollView>
                <MaterialTabs
                    items={['Descripcion', 'Pasos', 'Ingredientes']}
                    selectedIndex={selectedTab}
                    onChange={setSelectedTab}
                    barColor='#EBEBAD'
                    indicatorColor='#FFC68C'
                    textStyle={{ color: 'black' }}
                />


                <View style={{ backgroundColor: '#FFC68C', marginTop: 5, height: 356 }}>
                    <Carousel />
                </View>
            </ScrollView>

        </View >
    );
}
export default () => (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <Receta />
    </IconComponentProvider>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: StatusBar.currentHeight
    },
    image: {
        width: 'auto',
        height: 250,
        resizeMode: 'cover',
        marginVertical: 20,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        paddingHorizontal: 40,
        alignItems: 'center',
        backgroundColor: '#000',
    }
});

/*
<Text variant="body2" style={{marginLeft: 5}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
                        Eum quasi quidem quibusdam.
                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
                        Eum quasi quidem quibusdam.
                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
                        Eum quasi quidem quibusdam.
                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
                        Eum quasi quidem quibusdam.
                    </Text>
*/

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@augusto'
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@juan'
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@elmichael'
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@jordan'
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@jordan'
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@jordan'
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@jordan'
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@augusto'
    },

];