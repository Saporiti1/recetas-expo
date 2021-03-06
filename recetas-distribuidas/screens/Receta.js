import React, { useEffect, useState } from 'react';
import { View, Image, Pressable, ScrollView, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { Icon, IconComponentProvider, IconButton, Text, VStack } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRoute } from '@react-navigation/native';
import MaterialTabs from 'react-native-material-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Carousell from '../components/Carousell';
import Rating from '../components/Rating';
import { addFavoriteRecipe, deleteFavoriteRecipe } from '../utils/recipesAPI';


const Receta = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const fullReceta = route.params.item;
  const ingredientes = fullReceta.recipeIngredientSet;
  const pasos = fullReceta.steps;
  const [estado, setEstado] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [userId, setUserId] = useState('');
  
  const ratingPromedio = (ratingReceta) => {
    const avgRating = ratingReceta.map(item => item.rating).reduce((a, b) => a + b, 0);
    return Math.round(avgRating / ratingReceta.length);
  }

  const getData = async () => {
    try {
      const localData = await AsyncStorage.getItem('userData');
      setUserId(JSON.parse(localData).idUser);
      //console.log( );
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, [])
  const newFavorite = async (idRecipe) => {
    getData();
    if(estado) {
      const deleteFav = await deleteFavoriteRecipe(userId, idRecipe);
      //console.log(deleteFav);
      setEstado(false);
    }else {
      const resultAPI = await addFavoriteRecipe(userId, idRecipe);
      //console.log("BUSQUEDA: " + resultAPI);
      setEstado(true);
    }
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: fullReceta.photoUrl}} style={{width: '100%', height: 250}} />

      <View style={{position: 'absolute', left: 10, top: StatusBar.currentHeight + 2}}>
        <IconButton icon={props => <Icon name="arrow-back-outline" size={40} style={{color: '#F1AE00'}} />} onPress={() => navigation.goBack()} />
      </View>

      <ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'column'}}>
            <Text style={{marginLeft: 5}}>{fullReceta.name}</Text>
            <Text style={{marginLeft: 5}}>{fullReceta.user.name}</Text>
          </View>

          <IconButton icon={estado?  props => <Icon name="bookmark" size={30} style={{color: '#F1AE00'}} /> :  props => <Icon name="bookmark-outline" size={30} style={{color: '#F1AE00'}} />} onPress={() => newFavorite(fullReceta.idRecipe)}/>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

          <TouchableOpacity onPress={() => navigation.navigate('Comentarios', {comments: fullReceta.ratingSet, nombre: fullReceta.name})} style={{flexDirection: 'row', justifyContent: 'space-between'}} >
            <Rating rating={ratingPromedio(fullReceta.ratingSet)} />
            <Text>{fullReceta.ratingSet.length}</Text>
          </TouchableOpacity>


          <View style={{ backgroundColor: '#EBEBAD', flexDirection: 'row', borderRadius: 5, height: 25, right: 10}}>
            <Text>  {fullReceta.portions}</Text>
            <Icon name="pizza" size={20} style={{color: '#F1AE00'}} />
            <Text style={{marginLeft: 5}}> {fullReceta.numberPeople}</Text>
            <Icon name="body" size={20} style={{color: '#F1AE00'}} />
          </View>
        </View>
        <MaterialTabs
          items={['Descripcion', 'Pasos', 'Ingredientes']}
          selectedIndex={selectedTab}
          onChange={setSelectedTab}
          barColor='#EBEBAD'
          indicatorColor='#FFC68C'
          textStyle={{color: 'black'}}
        />

        <View style={{backgroundColor: '#FFC68C', marginTop: 5, height: 356}}>
          {
            selectedTab == 0 ?

              <Text variant="body2" style={{ marginLeft: 5 }}>
                {fullReceta.description}
              </Text>

              : selectedTab == 1 ?
                <View>
                  {
                    <Carousell pasos={pasos} />
                  }
                  </View>

                : selectedTab == 2 ?
                  <View>
                    {
                      ingredientes.map((item) => (
                        <View style={{marginLeft: 2, padding: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
                          <Text style={{fontWeight: 'bold'}}> {'\u2B24'}</Text>
                          <Text>{item.ingredient.name}</Text>
                          <Text>{item.quantity}</Text>
                        </View>
                      ))
                    }
                  </View>
                  : null
          }
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

