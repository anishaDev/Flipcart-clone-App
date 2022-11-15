import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default function BannerSlider({data}) {
  return (
    <View>
      <Image
        source={data.image}
        style={{
          height: height/4.5,
          width: 295,
          borderRadius: 10,
          resizeMode: 'cover',
          borderWidth: 0,
          borderColor: 'white',
          
        }}
      />
    </View>
  );
}