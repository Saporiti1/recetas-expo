import React, { useState, Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Pressable, Button, TouchableOpacity, StatusBar } from 'react-native';
import { Stack, Icon, IconComponentProvider, TextInput } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/Ionicons";
import RNPickerSelect from 'react-native-picker-select';

import NavBarSup from '../components/NavBarSup';
import NavBarInf from '../components/NavBarInf';


const starImgFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true';
const starImgCorner = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true';

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

function useCounter() {
    const [defaultRating, setDefaultRating] = useState(4);
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);


    const CustomRatingBar = () => {
        const [recipesScroll, setRecipesScroll] = useState([]);

        return (
            <View style={styles.customRatingBarStyle}>
                {
                    maxRating.map((item, key) => {
                        return (
                            <TouchableOpacity
                                activeOpactity={0.7}
                                key={item}
                            >
                                <Image
                                    style={styles.starImgStyle}
                                    source={
                                        item <= defaultRating
                                            ? { uri: starImgFilled }
                                            : { uri: starImgCorner }
                                    }
                                />
                            </TouchableOpacity>)
                    })
                }
            </View>
        )
    }
}

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

                        <View style={{ flexDirection: 'row', marginTop: 35, justifyContent: 'space-between'}}>
                            
                                <Text style={{width: '65%'}}>Aca va el rating</Text>
                            
                                <Icon name="bookmark-sharp" size={25} style={{ color: '#F1AE00'}} />
                        </View>
                    </View>

                </View>

                <View style={{ height: 3, backgroundColor: 'white' }}>

                </View>
            </View>
        );
    }
}

class Busqueda extends Component {

    render() {
        return (
            <View style={styles.container}>
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
                            style={{}}
                        />
                        <TextInput
                            variant="outlined"
                            trailing={props => <Icon name="search" {...props} style={{ color: '#F1AE00' }} />}
                            color='#F1AE00'
                            placeholder='Busqueda'
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
        );
    }
}
export default () => (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <Busqueda />
    </IconComponentProvider>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,

    },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 10
    },
    starImgStyle: {
        width: 20,
        height: 20,
        resizeMode: 'cover',
    },
});