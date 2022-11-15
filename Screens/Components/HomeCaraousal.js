import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image, TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {OnBoardData} from './OnBoardData';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {BannerStory} from './data';

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;


export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);


const {height, width} = Dimensions.get('window');
export default function Homecar1() {

  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  const [activeIndex,setActiveIndex] = React.useState(0); // search useState online
  const [carouselItems,setCarouselItems] = React.useState( [
  {
    id: 1,
    name: 'Find a Peronal Coach',
    url: require('../../assets/img/purple.webp'),
    navigate:'Coach',
    title:'Coach',
  },
  {
    id: 2,
    name: 'Purchase Membership',
    url: require('../../assets/img/purple3.webp'),
    navigate:'MemberShipScreen',
    title:'MemberShipScreen',
  },
  {
    id: 3,
    name: 'Find Tournaments',
    url: require('../../assets/img/Pic1.jpg'),
    navigate:'MemberShipScreen',
    title:'MemberShipScreen',
  },
  {
    id: 4,
    name: 'Purchase Membership',
    url: require('../../assets/img/Pic1.jpg'),
    navigate:'Tour1',
    title:'Tour1',
  },
]);

const navigation = useNavigation();

const renderItem = ({item,index}) => {

  return (
    <View style={{
      // backgroundColor:'red',
    // borderRadius:1,
    // borderWidth:1,
    // padding:10,
    // width:width-20,
    }}>
    <View
      style={{

        alignItems: 'center',
        width: width/1.75 ,
        height: height / 6.5,
        borderRadius: 13,
        // borderWidth:1,
        borderColor:'#fff',
      
      
      }}>
        <TouchableOpacity onPress={()=>navigation.navigate(item.navigate)}>
      <LinearGradient
        colors={['#fff', '#fff']}
        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        style={{
          height: height / 7,
          width: width / 1.75,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 13,
          // paddingLeft:5,
          // paddingRight:5
        }}>
          <Image source={item.url}
          style={{height:'90%', width: '95%', resizeMode: 'cover',borderRadius:10}}/>

       
      </LinearGradient>
      </TouchableOpacity>
      
    </View>
    </View>
  );
};


 

  return (
    <View
      style={{
        flex:1,
        backgroundColor: '#fff',
        // backgroundColor:'yellow',
        justifyContent: 'center',
        alignItems: 'center', 
         bottom:20,
        //  height:130,
      }}>
          <TouchableOpacity >
     
      
        <Carousel
          ref={isCarousel}
          data={carouselItems}
          // data1={data}
          renderItem={renderItem}
          sliderWidth={width - 30}
          itemWidth={width / 1.75}
          onSnapToItem={index => setIndex(index)}
          loop={true}
          // autoplay={true}
        />
        <View style={{bottom:40}}> 
        <Pagination 
          dotsLength={carouselItems.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            top:-15,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: 'red',
          }}
          tappableDots={true}
          inactiveDotStyle={{
            backgroundColor: '#d5d5d5',
            // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.75}
          inactiveDotScale={0.75}
        />
        </View>
     
      </TouchableOpacity>
    </View>
  );
};
