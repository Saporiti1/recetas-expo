import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, IconComponentProvider, IconButton, Divider, Stack } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

const NavBarInf = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Divider style={{ marginTop: -14 }} leadingInset={32} trailingInset={32} />
            <Stack fill center spacing={4} style={styles.bottomInfFixed} >
                <IconButton icon={props => <Icon name="home-outline" size={30} style={{ color: '#F1AE00' }} />} onPress={() => navigation.navigate('Home')} />
                <IconButton icon={props => <Icon name="search" size={30} style={{ color: '#F1AE00' }} />} onPress={() => navigation.navigate('Home')} />
                <IconButton icon={props => <Icon name="add-outline" size={40} style={{ color: '#F1AE00' }} />} onPress={() => navigation.navigate('Home')} />
                <IconButton icon={props => <Icon name="ios-bookmarks-outline" size={30} style={{ color: '#F1AE00' }} />} onPress={() => navigation.navigate('Home')} />
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
        marginTop: 16
    }
});