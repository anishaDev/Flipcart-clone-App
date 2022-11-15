import React, {useState, useEffect} from 'react';
import {
  Text,
  ScrollView,
  Image,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ant from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');
const Home2 = () => {
  const Story = [
    {
      id: '1',
      name: 'Supercoin',
      image: require('../../assets/img/flip1.png'),
    },
    {
      id: '2',
      name: 'Plus',
      image: require('../../assets/img/flip2.jpeg'),
    },
    {
      id: '3',
      name: 'Coupons',
      image: require('../../assets/img/flip3.jpeg'),
    },
    {
      id: '4',
      name: 'Credit',
      image: require('../../assets/img/flip4.webp'),
    },
    {
      id: '5',
      name: 'Live',
      image: require('../../assets/img/flip5.webp'),
    },
    {
        id: '6',
        name: 'whats New?',
        image: require('../../assets/img/flip6.png'),
      },
      {
        id: '7',
        name: 'Feeds',
        image: require('../../assets/img/flip7.png'),
      },
      {
        id: '8',
        name: 'Games',
        image: require('../../assets/img/flip5.webp'),
      },
  ];

  return (
    <View
      style={{width: width, height: height / 3.6, backgroundColor: '#fff'}}>
         
    
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{flex: 1}}>
        {Story.map((data, index) => {
          return (
            <View key={data.id}>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  paddingHorizontal: 12,
                  paddingVertical: 5,
                  marginHorizontal: 10,
            
                  backgroundColor: '#f5f5f5',
                  borderRadius: 100,
                  height: 60,
                  width: 60,
              
                }}>
           
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 100,
                    borderWidth: 0,
                    borderColor: '#353535',
                    marginBottom: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={data.image}
                    style={{
                      resizeMode: 'cover',
                      overflow: 'hidden',
                      width: '50%',
                      height: '50%',
                      borderRadius: 100,
                    }}
                  />
                </View>
                <View
                  style={{
                    width: width / 3.5,
                    paddingBottom: 20,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}>
                  <View style={{borderWidth:0}}>
                    <Text
                      style={{
                        fontSize: 11,
                        fontWeight: '300',
                        color: '#000000',
                        marginBottom: 5,
                        fontFamily: 'Poppins-Regular',
                    width:"80%",
                        marginRight: 0,borderWidth:0,textAlign:'center'
                      }} numberOfLines={1}>
                      {data.name}
                    </Text>
                
                  </View>
                  {/* <TouchableOpacity style={styles.button} onPress={null}>
                    <Text style={styles.buttonText}>Follow</Text>
                  </TouchableOpacity> */}
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    //padding: 10,
    height: 22,
    width: width / 4.5,

    backgroundColor: '#58B847',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#FFFFFF',
    fontFamily: 'Titillium Web',
  },
});

export default Home2;
