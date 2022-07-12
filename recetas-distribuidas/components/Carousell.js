import * as React from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
//import { IconComponentProvider } from "@react-native-material/core";
//import MaterialCommunityIcons from "@expo/vector-icons/Ionicons";


const Carousell = ({pasos}) => {
  //const route = useRoute();
  //const pasos = route.params.pasos;


  //source={{uri: item.multimediaSet[0].contentUrl}}

  const renderItem = ({item}) => {
    return (
      <View style={{
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        height: 300,
        padding: 5,
        marginLeft: 20,
        marginRight: 20,
      }}>
        <Image source={require('../media/imgLogin.png')} style={{width: '100%', height: '50%', borderRadius: 5}} />
        <Text style={{fontSize: 30}}>{item.stepNumber}</Text>
        <Text>{item.text}</Text>
      </View>

    )
  }
  //SI BIEN ME TRAE Y PUEDO VER LOS PASOS... NO ME LOS ESTÁ RENDERIZANDO...
  //console.log(pasos);
  //este map es para chequear que puedo ver los datos
  pasos.map((itema) => {
    console.log(itema.stepNumber);
  })

  return (
    <SafeAreaView style={{flex: 1, paddingTop: 20}}>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <Carousel
          layout={"default"}
          data={pasos}
          sliderWidth={300}
          itemWidth={350}
          renderItem={renderItem}
          onSnapToItem={index => this.setState({activeIndex: index})} />
      </View>
    </SafeAreaView>
  );
}
export default Carousell;
/*export default () => (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <Carousell />
    </IconComponentProvider>
);*/
