import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, IconComponentProvider, IconButton } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';

const NavBarSup = () => {
    const navigation = useNavigation();

    return (
        <View>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: 10,
                paddingRight: 15,
                backgroundColor: '#EBEBAD',
                height: 50
            }}>
                <View >
                    <IconButton icon={props => <Icon name="arrow-left" size={25} style={{ marginRight: 10, color: '#F1AE00' }} />} onPress={() => navigation.goBack()} />
                </View>

                <View style={{}}>
                    <Text style={styles.comidaApp}> COMIDAPP </Text>
                </View>
                <View >
                    <Icon name="account-tie" size={25} style={{ marginRight: 10, color: '#F1AE00' }} />
                </View>
            </View>

        </View>
    )
};
export default () => (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <NavBarSup />
    </IconComponentProvider>
);

const styles = StyleSheet.create({
    comidaApp: {
        color: '#FF0000',
        fontSize: 'large',
        fontSize: 20,
    }
});