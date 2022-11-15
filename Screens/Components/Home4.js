import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Ant from 'react-native-vector-icons/AntDesign';
import {Card} from 'react-native-paper';
const ProductList = [
    {
        id: '1',
        name: 'phone',
        image: require('../../assets/img/plants.png'),
        desc: '15days pack',
        price: 'Top Picks',
        uprice: 'Plants Saplings',
        discount: '10%'
    },
    {
        id: '2',
        name: 'med',
        image: require('../../assets/img/kc.jpeg'),
        desc: '15days pack',
        price: 'Min. 50% Off',
        uprice: 'Kitchen Containers',
        discount: '10%'
    },
    {
        id: '3',
        name: 'oppo',
        image: require('../../assets/img/bb.jpeg'),
        desc: '15days pack',
        price: 'Best Picks',
        uprice: 'Home & Kitchen',
        discount: '10%'
    },
    {
        id: '4',
        name: 'vivo',
        image: require('../../assets/img/tiffin.jpeg'),
        desc: '15days pack',
        price: 'Widest Range',
        uprice: 'Kids TiffinBox',
        discount: '10%'
    },
  
  ];
const image = require('../../assets/img/purple5.webp');
const {height, width} = Dimensions.get('window');
const Home4 = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}> 
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={{color:'black',fontSize:22,fontWeight:'500'}}>Wedding & Gifting Specials</Text>
    <Ant name="rightcircle" color={'blue'} size={22} style={{right:10,padding:5}} />
    </View>
    <View
        style={{
          alignItems: 'center',
          flex: 1,
          paddingBottom: 20,
        }}>
        <FlatList
          columnWrapperStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
        
            
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            backgroundColor: 'transparent',
          }}
          numColumns={2}
          data={ProductList}
          renderItem={({item}) => (
            <Card style={styles.card} onPress={null}>
              <TouchableOpacity   onPress={null} style={{
                    flex:1,
                    backgroundColor:'#fff'
                  }}> 
              
                {/* <View style={{backgroundColor: '#f1533b', width: 35, alignItems: 'center', borderTopLeftRadius: 10}}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#fff',
                      fontWeight: '600',
                    }}>
                    {item.discount}
                  </Text>
                </View> */}
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    // justifyContent: 'space-evenly',
                    // marginBottom: 10,
                    height: height / 6,
                    width: width / 3,
                    marginHorizontal:10,
                    marginLeft:20,
                    // borderColor:'gold',
                    // borderWidth:1,
                    // top:20,
                  }}>
                  <Image
                    style={{
                      resizeMode: 'cover',
                      height: '80%',
                      width: '100%',
                      top:20,
                    }}
                    source={item.image}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 12,
                  }}>
                  {/* <Text
                    style={{
                      fontSize: 18,
                      color: '#353535',
                      fontWeight: '600',
                    }}>
                    {item.Name}
                  </Text> */}

                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      width: width / 2.5,
                    //   paddingTop: 5,
                    }}>
                    <View style={{flexDirection: 'column', alignItems: 'center',bottom:5,marginHorizontal:1}}>
                      <Text
                        style={{
                          fontSize: 13,
                          color: 'black',
                          fontWeight: '500',
                          alignSelf:'flex-start',
                        //   right:10
                        //   textAlign:'center'
                        }}>
                        {item.uprice}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          marginLeft: 10,
                          color: 'green',
                          fontWeight: '500',
                          alignSelf:'flex-start',
                          right:10
                        //   textDecorationLine: 'line-through',
                        }}>
                        {item.price}
                      </Text>
                    </View>
                  </View>
                </View>
             
                </TouchableOpacity>
              {/* </View> */}
            </Card>
          )}
          keyExtractor={item => item.id}
        />
      </View>
     </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'transparent',
    // borderTopLeftRadius:10,
    // borderTopRightRadius:10,
    // top:30,
  },
  image: {
    // flex:1
    flex: 4/5,
    justifyContent: 'center',

  },
  text: {
    color: 'white',
    fontSize: 24,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  card: {
    height: height / 3.2,
    width: width / 2.2,
    backgroundColor: '#fff',
    // borderRadius: 10,
    marginHorizontal: 8,
    marginVertical: 6,
    borderWidth: 0.75,
    borderColor: 'white',
  },
});
export default Home4;
