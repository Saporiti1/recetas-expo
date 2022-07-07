import * as React from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';


export default class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = props;
  }
  /*state = {
    carouselItems: [{}]
  };*/

  _renderItem({item, index}) {
    return (
      <View style={{
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        height: 300,
        padding: 5,
        marginLeft: 20,
        marginRight: 20,
      }}>
        <Image source={{uri: item.img}} style={{width: '100%', height: '50%', borderRadius: 5}} />
        <Text style={{fontSize: 30}}>{item.stepNumber}</Text>
        <Text>{item.text}</Text>
      </View>

    )
  }

  render() {
    console.log(this.props);
    return (
      <SafeAreaView style={{flex: 1, paddingTop: 20}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Carousel
            layout={"default"}
            ref={ref => this.carousel = ref}
            data={this.props}
            sliderWidth={300}
            itemWidth={350}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({activeIndex: index})} />
        </View>
      </SafeAreaView>
    );
  }
}