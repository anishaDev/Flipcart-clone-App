import { StyleSheet, Text, View ,Image,TextInput,Dimensions} from 'react-native'
import React,{useState} from 'react'
import Feather from 'react-native-vector-icons/Feather';
import ToggleSwitch from 'toggle-switch-react-native'
const {height, width} = Dimensions.get('window');
const Home1 = () => {
  const [search, setSearch] = useState('');
  const [toggle,setToggle] = useState(false)
  return (
    <View style={{flex:1,justifyContent:'flex-start',alignItems:'flex-start',backgroundColor:'#fff'}}>
      <Image source={require("../../assets/Logo/Flipkart-logo.png")}
      style={{resizeMode: 'contain',
      height:100,
      width:100,
      bottom:20


      }}/>
     
      <View style={{justifyContent:'space-between',alignItems:'center',bottom:40,backgroundColor:'#fff',flexDirection:'row'}}>
      <ToggleSwitch
          // label="Brand Mall"
          onColor="#d4d4d4"
          // isOn={setToggle}
          onToggle={toggle => {
            setToggle
          }}
        />
   <View
        style={{
          height: 40,
          width: width - 100,
          backgroundColor: '#E6E6E6',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          // paddingLeft: 30,
          borderRadius: 1,
          // marginRight: 40,
          // padding:5,
          marginLeft:40
          
        }}>
         
        <Feather name="search" color="black" size={18} style={{}} />

        <View
          style={{
            height: 50,
            width: width - 220,
            justifyContent: 'center',
            backgroundColor: 'transparent',
            borderRadius: 10,
            padding:3,
         
          }}>
        
          <TextInput
          onKeyPress={null}
            placeholder="Search for products "
            placeholderTextColor={"#000"}
            keyboardType="default"
            style={{flex: 1, fontSize: 14, paddingLeft: 10, color: '#000'}}
            autoCapitalize="none"
            onChangeText={val => setSearch(val)}></TextInput>
        </View>
        <View style={{flexDirection:'row',
        marginRight:30,
        justifyContent:'space-between'
      }}>

        <Feather name="mic" color="black" size={18} style={{marginLeft:10}} />
        <Feather name="camera" color="black" size={18} style={{marginLeft:15}} />
        </View>
       
      </View>
      </View>
    </View>
  )
}

export default Home1

const styles = StyleSheet.create({})