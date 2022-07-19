import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Stack, Icon, IconComponentProvider, TextInput, IconButton } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/Ionicons";
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import NavBarSup from '../components/NavBarSup';
import NavBarInf from '../components/NavBarInf';
import { searchSomeRecipes, addFavoriteRecipe, deleteFavoriteRecipe } from '../utils/recipesAPI';

const starImgFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true';
const starImgCorner = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true';


const Busqueda = () => {
  const navigation = useNavigation();
  const [filtro, setFiltro] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const [recipesScroll, setRecipesScroll] = useState([]);
  const [estado, setEstado] = useState(false);
  const [userId, setUserId] = useState('');

  const buscarRecetas = async () => {
    const recipeDataApi = await searchSomeRecipes(filtro, inputSearch);
    setRecipesScroll(recipeDataApi);
    //console.log(recipeDataApi.length);
  }

  /*useEffect(() => {
    buscarRecetas();
  }, [])*/

  const ratingPromedio = (ratingReceta) => {
    const avgRating = ratingReceta.map(item => item.rating).reduce((a, b) => a + b, 0);
    return Math.round(avgRating / ratingReceta.length);
  }

  
  const getData = async () => {
    try {
      const localData = await AsyncStorage.getItem('userData');
      setUserId(JSON.parse(localData).idUser);
      //console.log("BUSQUEDAAAAAAAAAAA: " + userId);
    }catch (error) {
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
  //CUANDO LE DOY FAVORITO A UNA RECETA, LAS DEMÁS TAMBIÉN SE CAMBIAN PORQUE LA VARIABLE ESTADO
  //PASÓ A TRUE... ENTONCES TODAS SE CAMBIAN TAMBIÉN... IGUAL ESO NO QUIERE DECIR QUE SE AGREGARON
  //COMO FAVORITAS... SOLA A LA QUE SE LE DIÓ CLICK...


  return (
    <View style={styles.container}>
      <NavBarSup />

      <View style={{backgroundColor: '#EBEBAD'}}>
        <Stack spacing={2} style={{margin: 16}}>
          <Picker selectedValue={filtro} style={{height: 30, width: '80%'}} onValueChange={(value, itemIndex) => setFiltro(value)}>
            <Picker.Item label='Usuario' value='usuario'/>
            <Picker.Item label='Tipo' value='tipo'/>
            <Picker.Item label='Ingrediente' value='ingrediente'/>
            <Picker.Item label='No ingrediente' value='noingrediente'/>
            <Picker.Item label='Nombre' value='nombre'/>
          </Picker>
          <TextInput
            variant="outlined"
            trailing={props => <IconButton icon={props => <Icon name="search" {...props} style={{ color: '#F1AE00' }} />} onPress={buscarRecetas} />}
            color='#F1AE00'
            placeholder='Busqueda'
            value={inputSearch}
            onChangeText={(event) => {setInputSearch(event)}}
          />
          
        </Stack>
      </View>
      <View style={{height: 3, backgroundColor: 'white'}}>

      </View>

      <View style={{height: 50}}>
        {recipesScroll.map((item) => {
          return (
          <TouchableOpacity onPress={() => navigation.navigate('Receta', {item: item})}>
            <View style={{flexDirection: 'row', backgroundColor: '#F4F4F4', borderRadius: 12, width: '95%', marginLeft: 10}}>
              <Image
                source={{uri: item.photoUrl}}
                style={{width: 100, height: 100, margin: 5, borderRadius: 12}}
              />
              <View style={{height: 100, marginTop: 5}}>
                <Text>{item.name}</Text>
                <Text>{item.user.name}</Text>

                <View style={{flexDirection: 'row', marginTop: 35, justifyContent: 'space-between'}}>
                  <Text style={{width: '65%'}}>{ratingPromedio(item.ratingSet)}</Text>

                  <TouchableOpacity onPress={() => newFavorite(item.idRecipe)}>
                    <Icon name={estado? "bookmark" : "bookmark-outline"} size={25} style={{color: '#F1AE00'}}/>
                  </TouchableOpacity>
                  
                </View>
              </View>
              <View style={{height: 3, backgroundColor: '#F4F4F4'}} />

            </View>
          </TouchableOpacity>
          )
        })

        }
      </View>

      <NavBarInf />
    </View>
  );
}
export default () => (
  <IconComponentProvider IconComponent={MaterialCommunityIcons}>
    <Busqueda />
  </IconComponentProvider>
);

/*
<FlatList
          data={recipesScroll}
          renderItem={({ item, index }) => {
            return (
              <FlatListItem item={item} index={index} />
            );
          }}
        />
*/


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