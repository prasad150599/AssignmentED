import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import PlaceDetails from './PlaceDetails';
import PlaceMapView from './PlaceMapView';

const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    
      <Stack.Navigator initialRouteName='HomeScreen' 
      screenOptions={{ headerShown: false, gestureEnabled: true, 
      gestureDirection: "horizontal"}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PlaceDetails" component={PlaceDetails} />
        <Stack.Screen name="PlaceMapView" component={PlaceMapView}/>
      </Stack.Navigator>
  
  );
};

export default HomeStack;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  TextStyle:{
    fontSize:18,
    fontWeight:'bold'

  }
});
