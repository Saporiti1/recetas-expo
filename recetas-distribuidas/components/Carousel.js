import * as React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    Image
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    title: "Item 1",
                    text: "Text 1",
                    img:'https://www.cocinayvino.com/wp-content/uploads/2018/02/curiosidades-del-ramen-1200x900.jpg',
                },
                {
                    title: "Item 2",
                    text: "Text 2",
                    img:'https://www.cocinayvino.com/wp-content/uploads/2018/02/curiosidades-del-ramen-1200x900.jpg',
                },
                {
                    title: "Item 3",
                    text: "Text 3",
                    img:'https://www.cocinayvino.com/wp-content/uploads/2018/02/curiosidades-del-ramen-1200x900.jpg',
                },
            ]
        }
    }

    _renderItem({ item, index }) {
        return (
            <View style={{
                backgroundColor: 'floralwhite',
                borderRadius: 5,
                height: 300,
                padding: 5,
                marginLeft: 20,
                marginRight: 20,
            }}>
                <Image source={{ uri: item.img }} style={{ width: '100%', height: '50%', borderRadius: 5}}/>
                <Text style={{ fontSize: 30 }}>{item.title}</Text>
                <Text>{item.text}</Text>
            </View>

        )
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, paddingTop: 20, }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={300}
                        itemWidth={350}
                        renderItem={this._renderItem}
                        onSnapToItem={index => this.setState({ activeIndex: index })} />
                </View>
            </SafeAreaView>
        );
    }
}