import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './ProfileScreen';
import MapScreen from './MapScreen';
import HomeStack from './HomeStack';
import ListViewComp from './ListDetails';

const Tab =  createBottomTabNavigator();

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer > 
       <Tab.Navigator
  initialRouteName="Home"
  screenOptions={({ route }) => ({
    headerShown: false,
    tabBarShowLabel: true,

    tabBarIcon: ({ focused }) => {
      let iconSource;

      if (route.name === "Home") {
        iconSource = require("../assets/icons/home.png");
      } else if (route.name === "Map") {
        iconSource = require("../assets/icons/map.png");
      } else if (route.name === "Profile") {
        iconSource = require("../assets/icons/profile.png");
      }

      return (
        <Image
          source={iconSource}
          style={{
            width: 28,
            height: 28,
            tintColor: focused ? "#1953b8" : "#000000ff",
          }}
          resizeMode="contain"
        />
      );
    },
  })}
>
           {/* <Tab.Screen name="ListViewComp" component={ListViewComp} /> */}
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center'
  },
  TextStyle:{
    fontSize:14,

  }
});
