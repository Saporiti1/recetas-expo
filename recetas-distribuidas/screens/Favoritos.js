import React, { Component } from 'react';
import { View, Image, StyleSheet, FlatList, Dimensions, StatusBar } from 'react-native';
import { Icon, IconComponentProvider, Stack, TextInput } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/Ionicons";
import RNPickerSelect from 'react-native-picker-select';

import NavBarSup from '../components/NavBarSup';
import NavBarInf from '../components/NavBarInf';

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@elmichael'
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@elmichael'
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
        author: '@jordan'
    },
];

const numColumns = 2
const WIDTH = Dimensions.get('window').width;

class Favoritos extends Component {

    formatData = (data, numColumns) => {
        const totalRows = Math.floor(itemData.length / numColumns);
        let totalLastRow = itemData.length - (totalRows * numColumns);

        while (totalLastRow !== 0 && totalLastRow !== numColumns) {
            itemData.push({ key: 'blank', empty: true })
            totalLastRow++
        }
        return itemData
    }

    _renderItem = ({ item, index }) => {
        let { itemStyle, itemInvisible } = styles;

        if (item.empty) {
            return <View style={[itemStyle, itemInvisible]} />
        }

        return (
            <View style={itemStyle}>
                {itemData.map((item) => (
                    <Image source={{ uri: item.img }} style={{ width: 170, height: 170, marginTop: 10 }} />
                ))}
            </View>
        )
    }

    render() {

        return (
            <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
                <NavBarSup />

                <View style={{ backgroundColor: '#EBEBAD' }}>
                    <Stack spacing={2} style={{ margin: 16 }}>
                        <RNPickerSelect
                            placeholder={{ label: 'Seleccione un ingrediente', value: null }}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Football', value: 'football' },
                                { label: 'Baseball', value: 'baseball' },
                                { label: 'Hockey', value: 'hockey' },
                            ]}
                        />
                        <TextInput
                            variant="outlined"
                            trailing={props => <Icon name="search" {...props} style={{ color: '#F1AE00' }} />}
                            color='#F1AE00'
                        />
                    </Stack>
                </View>

                <View style={{ paddingTop: 40 }}>
                    <FlatList
                        data={this.formatData(itemData, numColumns)}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={numColumns}
                    />
                </View>

                <NavBarInf />
            </View>

        )
    }
};
export default () => (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <Favoritos />
    </IconComponentProvider>
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
    },
    itemStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 170,
        flex: 1,
        margin: 1,
        height: WIDTH / numColumns
    },
    itemInvisible: {
        backgroundColor: 'transparent'
    }
});