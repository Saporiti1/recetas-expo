import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, IconComponentProvider, IconButton, Box, Stack } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

const NavBarInf = () => {
    const navigation = useNavigation();

    return (
        <View style={{position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: "flex-end", backgroundColor: 'white', height: 50 }}>
                <Stack fill center spacing={4} style={styles.bottomInfFixed} >
                    <IconButton icon={props => <Icon name="home-outline" size={30} style={{ color: '#F1AE00' }} />} onPress={() => navigation.navigate('Home')} />
                    <IconButton icon={props => <Icon name="search" size={30} style={{ color: '#F1AE00' }} />} onPress={() => navigation.navigate('Busqueda')} />
                    <IconButton icon={props => <Icon name="add-outline" size={40} style={{ color: '#F1AE00' }} />} onPress={() => navigation.navigate('CrearReceta')} />
                    <IconButton icon={props => <Icon name="ios-bookmarks-outline" size={30} style={{ color: '#F1AE00' }} />} onPress={() => navigation.navigate('Favoritos')} />
                </Stack>
        </View>
    )
};
export default () => (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <NavBarInf />
    </IconComponentProvider>
);

const styles = StyleSheet.create({
    bottomInfFixed: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});