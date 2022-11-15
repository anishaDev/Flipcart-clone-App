import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ant from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home1 from './Home1';
import Category from './Category';
import Cart from './Cart';
import Notification from './Notification';
import Account from './Account';
// import { ScrollView } from 'react-native-gesture-handler';
import Homecar2 from './HomeCaraousal';
import Home2 from './Home2';
import Home3 from './Home3';
import Home4 from './Home4';
// import Homecar2 from './HomeCaraousal';
const {height, width} = Dimensions.get('window');
const image =  require('../../assets/img/pp1.jpeg');
function HomeScreen() {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <ScrollView
        vertical={true}
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}>
        <View style={styles.container}>
          <View
            style={{
              flex: 1,
            }}>
            <Home1 />
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Homecar2 />
        </View>
        <View style={{flex: 1,alignContent:'center',bottom:70}}>
          <Home2 />
        </View>
  
        <View style={{flex:1,backgroundColor:'purple',bottom:190,borderColor:'gold',borderWidth:1,borderRadius:10}}>
                   <Image
          source={require('../../assets/img/purple3.webp')}
          style={{
            resizeMode: 'contain',
            overflow: 'hidden',
            width: width - 20,
            height: 100,
            marginLeft: 10,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            // bottom: 240,

            borderRadius: 5,
          }}
        /> 
          {/* <Home3 /> */}
        </View>
        <View style={{flex: 1,bottom:200}}>
          <Home3 />
        </View>
        <View style={{flex:1,bottom:200}}>
          <Home4/>
        </View>
      </ScrollView>
    </View>
  );
}
const Tab = createBottomTabNavigator();
export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 90,
        },
      }}>
      <Tab.Screen
        name="Home"
        style={{color: 'red', justifyContent: 'center'}}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarColor: '#000000',
          tabBarActiveTintColor: '#000000',

          tabBarIcon: ({color}) => (
            <Icon name="home-outline" color={'#000000'} size={22} />
          ),
        }}
      />

      <Tab.Screen
        name="Categories"
        component={Category}
        options={{
          tabBarLabel: 'Categories',
          headerShown: false,
          tabBarColor: '#000000',
          tabBarActiveTintColor: '#000000',

          tabBarIcon: ({color}) => (
            <MaterialIcons name="category" color={'#000000'} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: 'Notification',
          headerShown: false,
          tabBarColor: '#000000',
          tabBarActiveTintColor: '#000000',

          tabBarIcon: ({color}) => (
            <Ant name="bells" color={'#000000'} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          headerShown: false,
          tabBarColor: '#000000',
          tabBarActiveTintColor: '#000000',

          tabBarIcon: ({color}) => (
            <EvilIcons name="user" color={'#000000'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          headerShown: false,
          tabBarColor: '#000000',
          tabBarActiveTintColor: '#000000',
          //tabBarStyle: {position: 'absolute'},
          tabBarIcon: ({color}) => (
            <Ant name="shoppingcart" color={'#000000'} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  
  },
  container1: {
    flex: 4/6,
    backgroundColor:'purple',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    top:30,
  },

});
