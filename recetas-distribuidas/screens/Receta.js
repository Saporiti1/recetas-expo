import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { Icon, IconComponentProvider, IconButton } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import MaterialTabs from 'react-native-material-tabs';

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
                    textStyle={{color: 'black'}}
                />
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