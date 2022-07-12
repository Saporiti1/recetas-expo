import * as React from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';


const Carousell = ({pasos}) => {


  //source={{uri: item.multimediaSet[0].contentUrl}}

  const renderItem = ({ item, index }) => {
    return (
      <View style={{
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        height: 300,
        padding: 5,
        marginLeft: 20,
        marginRight: 20,
      }}>
        <Image source={require('../media/imgLogin.png')} style={{ width: '100%', height: '50%', borderRadius: 5 }} />
        <Text style={{ fontSize: 30 }}>{item.stepNumber}</Text>
        <Text>{item.text}</Text>
      </View>

    )
  }
  //console.log("RENDER: " + this.state.carouselItems);
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <Carousel
          layout={"default"}
          ref={ref => this.carousel = ref}
          data={pasos}
          sliderWidth={300}
          itemWidth={350}
          renderItem={renderItem}
          onSnapToItem={index => this.setState({ activeIndex: index })} />
      </View>
    </SafeAreaView>
  );
}
