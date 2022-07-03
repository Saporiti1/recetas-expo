import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Alert, Pressable, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { Box, Icon, IconComponentProvider } from "@react-native-material/core";
import { Card, CardAction, CardImage } from 'react-native-material-cards';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';


import NavBarSup from '../components/NavBarSup';
import NavBarInf from '../components/NavBarInf';
import { searchRecipes } from '../utils/recipesAPI';


const starImgFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true';
const starImgCorner = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true';


const Home = () => {
  const navigation = useNavigation();
  //const [defaultRating, setDefaultRating] = useState(4);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);


  const [foodData, setFoodData] = useState('');
  const [userData, setUserData] = useState('');
  const [foodRating, setRating] = useState(0);
  const [recipeOne, setRecipeOne] = useState('');
  const [recipeTwo, setRecipeTwo] = useState('');
  const [recipeThree, setRecipeThree] = useState('');

  useEffect(() =>{
    const validateUser = async () => {
      const recipeDataApi = await searchRecipes()
      .then(
        (result) => {
          setFoodData(result[0]);
          setUserData(result[0].user);
          //NO ME LA ESTÁ CARGANDO LA PRIMERA VEZ... 
          //Y POR ESO SIEMPRE ROMPE AL COMIENZO... POR ESO SEPARO EN 3
          //setRecipesScroll(result.slice(0,3));

          //NO DEBERÍA DIVIDIRLO EN 3... PERO BUENO...
          setRecipeOne(result[0]);
          setRecipeTwo(result[1]);
          setRecipeThree(result[2]);

          const avgRating = result[0].ratingSet.map(item => item.rating).reduce((a, b) => a + b, 0);
          setRating(Math.round(avgRating / result[0].ratingSet.length));
      });

      //setFoodData(recipeDataApi[0]);
    }
    validateUser();
  }, []);

  //<Text>{recipesScroll[0].name}</Text>

  const CustomRatingBar = () => {

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
                    item <= foodRating
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
          height: 300,
          top: 3,
          backgroundColor: '#FCDC8C',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Card style={{margin: 10, borderRadius: 20, backgroundColor: 'grey', width: '100%'}} onPress={() => navigation.navigate('Receta')}>
            <CardImage
              //source={foodData.photoUrl}
              source={{uri: 'https://cdn.pixabay.com/photo/2016/08/31/17/41/sunrise-1634197_960_720.jpg' }}
              style={{borderTopLeftRadius: 20, borderTopRightRadius: 20, width: '98%' }}

            />
            <Text>{`${foodData.name}`}</Text>
            <Text>{'por ' + `${userData.name}`}</Text>
            <CardAction separator={false} inColumn={false} style={{justifyContent: 'space-between'}}>
              <CustomRatingBar />

              <Icon name="bookmark-outline" size={25} style={{marginRight: 10, color: '#F1AE00'}}/>

            </CardAction>
          </Card>
        </Box>
      </View>

      <View >
        <Text style={styles.novedades}>Recomendaciones</Text>

        <View>
          <Box style={styles.scrollHorizontal}>
            <ScrollView scrollEventThrottle={16}>
              <View style={{height: 170}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                  <View style={{height: 170, width: 170, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                    <View style={{flex: 2}}>
                      <Image
                        //source={recipeOne.photoUrl}
                        source={require('../media/imgLogin.png')}
                        style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}
                      />
                    </View>
                    <View style={{flex: 1, paddingLeft: 20, backgroundColor: 'grey'}}>
                      <Text>{recipeOne.name}</Text>
                    </View>
                  </View>

                  <View style={{height: 170, width: 170, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                    <View style={{flex: 2}}>
                      <Image
                        //source={recipeTwo.photoUrl}
                        source={require('../media/imgLogin.png')}
                        style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}
                      />
                    </View>
                    <View style={{flex: 1, paddingLeft: 20, backgroundColor: 'grey'}}>
                      <Text>{recipeTwo.name}</Text>
                    </View>
                  </View>

                  <View style={{height: 170, width: 170, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                    <View style={{flex: 2}}>
                      <Image
                        //source={recipeThree.photoUrl}
                        source={require('../media/imgLogin.png')}
                        style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}
                      />
                    </View>
                    <View style={{flex: 1, paddingLeft: 20, backgroundColor: 'grey'}}>
                      <Text>{recipeThree.name}</Text>
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
    paddingTop: StatusBar.currentHeight
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