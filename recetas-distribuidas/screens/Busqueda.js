import React, { useState, Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { Stack, Icon, IconComponentProvider, TextInput, IconButton } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/Ionicons";
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';


import NavBarSup from '../components/NavBarSup';
import NavBarInf from '../components/NavBarInf';
import { searchSomeRecipes } from '../utils/recipesAPI';

const starImgFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true';
const starImgCorner = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true';


//ESTO Y EL FLATLIST NO ME SIRVEN, NECESITO ENVIARLE MÁS PARÁMETROS... 


const Busqueda = () => {
  const navigation = useNavigation();
  const [filtro, setFiltro] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const [recipesScroll, setRecipesScroll] = useState([]);


  //VER BIEN ESTO...
  const buscarRecetas = async () => {
    const recipeDataApi = await searchSomeRecipes(filtro, inputSearch);
    setRecipesScroll(recipeDataApi);
    console.log(recipeDataApi.length);
  }

  //VER BIEN ESTO...
  /*useEffect(() => {
    buscarRecetas();
  }, [])*/

  const ratingPromedio = (ratingReceta) => {
    const avgRating = ratingReceta.map(item => item.rating).reduce((a, b) => a + b, 0);
    return Math.round(avgRating / ratingReceta.length);
  }


  return (
    <View style={styles.container}>
      <NavBarSup />

      <View style={{backgroundColor: '#EBEBAD'}}>
        <Stack spacing={2} style={{margin: 16}}>
          <Picker selectedValue={filtro} style={{height: 30, width: '80%'}} onValueChange={(value, itemIndex) => setFiltro(value)}>
            <Picker.Item label='Usuario' value='Usuario'/>
            <Picker.Item label='Categoría' value='Categoría'/>
            <Picker.Item label='Ingrediente' value='Ingrediente'/>
            <Picker.Item label='No ingrediente' value='Noingrediente'/>
            <Picker.Item label='Nombre' value='Nombre'/>
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
                source={{}}
                style={{width: 100, height: 100, margin: 5, borderRadius: 12}}
              />
              <View style={{height: 100, marginTop: 5}}>
                <Text>{item.name}</Text>
                <Text>{item.user.name}</Text>

                <View style={{flexDirection: 'row', marginTop: 35, justifyContent: 'space-between'}}>
                  <Text style={{width: '65%'}}>{ratingPromedio(item.ratingSet)}</Text>

                  <Icon name="bookmark-sharp" size={25} style={{color: '#F1AE00'}} />
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