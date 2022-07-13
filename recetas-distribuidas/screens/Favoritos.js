import React, { Component, useState, useEffect } from 'react';
import { View, Image, StyleSheet, FlatList, Dimensions, StatusBar, Text } from 'react-native';
import { Icon, IconComponentProvider } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/Ionicons";

import NavBarSup from '../components/NavBarSup';
import NavBarInf from '../components/NavBarInf';
import { getFavoriteRecipes } from '../utils/recipesAPI';


const numColumns = 2
const WIDTH = Dimensions.get('window').width;

//LE SAQUE EL RATING PORQUE ERA MÁS COMPLEJO PARA CALCULARLO... IGUAL LO DEJO COMENTADO ACÁ ABAJO...
/*<View style={{flexDirection: 'row', marginTop: 35, justifyContent: 'space-between'}}>
    <Rating rating={3}/>
    <Icon name="bookmark-sharp" size={25} style={{color: '#F1AE00', paddingLeft: 100}}/>
  </View>*/

class FlatListItem extends Component {
  render() {
    return (
      <View>
        <View style={{flexDirection: 'row', backgroundColor: '#F4F4F4', borderRadius: 12, width: '95%', marginLeft: 10}}>
          <Image
            source={{uri: this.props.item.photoUrl}}
            style={{width: 100, height: 100, margin: 5, borderRadius: 12}}
          />
          <View style={{height: 100, marginTop: 5}}>
            <Text>{this.props.item.name}</Text>
            <Text>{this.props.item.user.name}</Text>

          </View>
        </View>
        <View style={{height: 3, backgroundColor: 'white'}}>

        </View>
      </View>
    );
  }
}

class Favoritos extends Component {

  render() {
    //NO FUNCIONA LA LLAMADA A LA API POR EL FORMATO EN GENERAL DE FAVORITOS... 
    //CAMBIAR A COMO ESTÁN LAS DEMÁS SCREENS TIPO HOME, LOGIN, NEWACCOUNT...
    //Error: Invalid hook call. Hooks can only be called inside of the body of a function component.
    
    //VER DE DONDE CONSEGUIR EL ID DEL USUARIO...
    //
    const [idUser, setUserId] = useState('');
    const [favorites, setFavorites] = useState('');

    useEffect(() =>{
      const getFavorites = async () => {
        const favoritesAPI = await getFavoriteRecipes(idUser);

        setFavorites(favoritesAPI);

        console.log(favoritesAPI);
        
        
      }
      getFavorites();
    }, []);

    return (
      <View style={{flex: 1, paddingTop: StatusBar.currentHeight}}>
        <NavBarSup />

        <View style={{backgroundColor: '#EBEBAD'}}>
          <Text style={{fontSize: 18, paddingLeft: 130}}>Tus Platos Favoritos</Text>
        </View>

        <View style={{height: 3, backgroundColor: 'white'}}>

        </View>
        <FlatList
          data={favorites}
          renderItem={({item, index}) => {
            return (
              <FlatListItem item={item} index={index} />
            );
          }}
        />
        <View style={{height: 50}}>

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