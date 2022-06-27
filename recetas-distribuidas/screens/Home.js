import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Alert, Pressable, Button, TouchableOpacity, ScrollView } from 'react-native';
import { Box, Icon, IconComponentProvider } from "@react-native-material/core";
import { Card, CardContent, CardAction, CardImage } from 'react-native-material-cards';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import NavBarSup from '../components/NavBarSup';
import NavBarInf from '../components/NavBarInf';


const starImgFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true';
const starImgCorner = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true';

const Home = ({ navigation }) => {
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
    return (
        <View style={styles.container}>
            <NavBarSup />
        
            <Text style={styles.novedades}>Novedades</Text>

            <View>
                <Box style={{
                    display: 'flex',
                    width: 'auto',
                    height: 330,
                    top: 3,
                    backgroundColor: '#FCDC8C',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Card style={{ margin: 10, borderRadius: 20, backgroundColor: 'grey' }}>
                        <CardImage
                            source={{ uri: 'https://cdn.pixabay.com/photo/2016/08/31/17/41/sunrise-1634197_960_720.jpg' }}
                            style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20, width: '98%' }}
                        />
                        <Text >Ensalada 7 elemntos</Text>
                        <Text >Por roberto carlos</Text>
                        <CardAction separator={false} inColumn={false} style={{ justifyContent: 'space-between' }}>
                            <CustomRatingBar />

                            <Icon name="bookmark-outline" size={25} style={{ marginRight: 10, color: '#F1AE00' }} />

                        </CardAction>
                    </Card>
                </Box>
            </View>

            <View >
                <Text style={styles.novedades}>Recomendaciones</Text>

                <View>
                    <Box style={styles.scrollHorizontal}>
                        <ScrollView scrollEventThrottle={16}>
                            <View style={{ height: 170 }}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                                    <View style={{ height: 170, width: 170, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                                        <View style={{ flex: 2 }}>
                                            <Image
                                                source={require('../media/imgLogin.png')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 1, paddingLeft: 20, backgroundColor: 'grey' }}>
                                            <Text>Home</Text>
                                        </View>
                                    </View>

                                    <View style={{ height: 170, width: 170, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                                        <View style={{ flex: 2 }}>
                                            <Image
                                                source={require('../media/imgLogin.png')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 1, paddingLeft: 20, backgroundColor: 'grey' }}>
                                            <Text>buenas</Text>
                                        </View>
                                    </View>

                                    <View style={{ height: 170, width: 170, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                                        <View style={{ flex: 2 }}>
                                            <Image
                                                source={require('../media/imgLogin.png')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 1, paddingLeft: 20, backgroundColor: 'grey' }}>
                                            <Text>Home</Text>
                                        </View>
                                    </View>
                                    <View style={{ height: 170, width: 170, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                                        <View style={{ flex: 2 }}>
                                            <Image
                                                source={require('../media/imgLogin.png')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <View style={{ flex: 1, paddingLeft: 20, backgroundColor: 'grey' }}>
                                            <Text>Home</Text>
                                        </View>
                                    </View>

                                </ScrollView>

                            </View>

                        </ScrollView>
                    </Box>
                </View>
            </View>
            <NavBarInf />
        </View>
    )
};
export default () => (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <Home />
    </IconComponentProvider>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
    },
    novedades: {
        paddingLeft: 15,
        marginTop: 3,
        marginBottom: 0,
        height: 25,
        fontSize: 22,
        color: '#1E1E1E',
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
    scrollHorizontal: {
        width: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        display: 'flex',
        position: 'relative',
        paddingLeft: 15,
        horizontal: 'true',
        gap: 1,
        decelerationRate: 0,
        snapToInterval: 200, //your element width
        snapToAlignment: 'center',
        '::-webkit-scrollbar': { display: 'none' },
    }
});