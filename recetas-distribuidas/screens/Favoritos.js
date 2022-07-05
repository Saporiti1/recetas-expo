import React, { Component } from 'react';
import { View, Image, StyleSheet, FlatList, Dimensions, StatusBar, Text } from 'react-native';
import { Icon, IconComponentProvider, Stack, TextInput } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/Ionicons";
import RNPickerSelect from 'react-native-picker-select';
import Rating from '../components/Rating';

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
];

const numColumns = 2
const WIDTH = Dimensions.get('window').width;

class FlatListItem extends Component {
    render() {


        return (
            <View>
                <View style={{ flexDirection: 'row', backgroundColor: '#F4F4F4', borderRadius: 12, width: '95%', marginLeft: 10 }}>
                    <Image
                        source={{ uri: this.props.item.img }}
                        style={{ width: 100, height: 100, margin: 5, borderRadius: 12 }}
                    />
                    <View style={{ height: 100, marginTop: 5 }}>
                        <Text>{this.props.item.title}</Text>
                        <Text>{this.props.item.author}</Text>

                        <View style={{ flexDirection: 'row', marginTop: 35, justifyContent: 'space-between' }}>

                            <Rating />

                            <Icon name="bookmark-sharp" size={25} style={{ color: '#F1AE00', paddingLeft: 100 }} />
                        </View>
                    </View>

                </View>

                <View style={{ height: 3, backgroundColor: 'white' }}>

                </View>
            </View>
        );
    }
}

class Favoritos extends Component {



    render() {

        return (
            <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
                <NavBarSup />
                
                <View style={{ backgroundColor: '#EBEBAD' }}>
                <Text style={{fontSize: 18, paddingLeft: 130}}>Tus Platos Favoritos</Text>
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

                <View style={{ height: 3, backgroundColor: 'white' }}>

                </View>
                <FlatList
                    data={itemData}
                    renderItem={({ item, index }) => {

                        return (
                            <FlatListItem item={item} index={index} />
                        );
                    }}
                />
                <View style={{ height: 50 }}>

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