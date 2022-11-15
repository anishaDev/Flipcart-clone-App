import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Home1 from './Screens/Components/Home1';
import Home3 from './Screens/Components/Home3';
import Home4 from './Screens/Components/Home4';
import BottomTab from './Screens/Components/HomeFeed';

import Tabs from './Screens/Components/HomeFeed';

const App = () => {
  return (
    <NavigationContainer>
       <StatusBar backgroundColor="transparent" barStyle="dark-content" />
       <View style={{flex:1}}>
      <BottomTab />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
