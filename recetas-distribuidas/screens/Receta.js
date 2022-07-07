import React, { useState } from 'react';
import { View, Image, Pressable, ScrollView, StyleSheet, StatusBar, FlatList } from 'react-native';
import { Icon, IconComponentProvider, IconButton, Text, VStack } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import MaterialTabs from 'react-native-material-tabs';
import Carousel from '../components/Carousel';
import Rating from '../components/Rating';


const Receta = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState(0);


  return (
    <View style={styles.container}>
      <Image source={require('../media/Receta1.png')} style={{width: '100%', height: 250}} />

      <View style={{position: 'absolute', left: 10, top: StatusBar.currentHeight + 2}}>
        <IconButton icon={props => <Icon name="arrow-back-outline" size={40} style={{color: '#F1AE00'}} />} onPress={() => navigation.goBack()} />
      </View>

      <ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'column'}}>
            <Text style={{marginLeft: 5}}> Fideos con salsa </Text>
            <Text style={{marginLeft: 5}}> por  Author </Text>
          </View>

          <Icon name="bookmark-outline" size={30} style={{color: '#F1AE00', right: 10}} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

          <Pressable onPress={() => navigation.navigate('Comentarios')} style={{flexDirection: 'row', justifyContent: 'space-between'}} >
            <Rating rating={3} />
            <Text>(289)</Text>
          </Pressable>


          <View style={{ backgroundColor: '#EBEBAD', flexDirection: 'row', borderRadius: 5, height: 25, right: 10}}>
            <Text>3</Text>
            <Icon name="pizza" size={20} style={{color: '#F1AE00'}} />
            <Text style={{marginLeft: 5}}>9</Text>
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
                Eum quasi quidem quibusdam.
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
                Eum quasi quidem quibusdam.
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
                Eum quasi quidem quibusdam.
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
                Eum quasi quidem quibusdam.
              </Text>

              : selectedTab == 1 ?

                <Carousel />

                : selectedTab == 2 ?
                  <View>
                    {
                      itemData.map((item) => (
                        <View style={{marginLeft: 2, padding: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
                          <Text style={{fontWeight: 'bold'}}> {'\u2B24'}</Text>
                          <Text>{item.nombreIngrediente}</Text>
                          <Text>{item.cantidadIngrediente}</Text>
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


const itemData = [
  {
    nombreIngrediente: 'Sal',
    cantidadIngrediente: 6,
  },
  {
    nombreIngrediente: 'Pimienta',
    cantidadIngrediente: 6,
  },
  {
    nombreIngrediente: 'Queso',
    cantidadIngrediente: 6,
  },
  {
    nombreIngrediente: 'Huevos',
    cantidadIngrediente: 6,
  },
];