/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import MainScreen from './src/Screens/MainScreen';
import { useEffect, useState } from 'react';
import SplashScreen from './src/Screens/SplashScreen';
import NetInfo from "@react-native-community/netinfo";
import NetErrorScreen from './src/Screens/NetErrorScreen';


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check internet connection
    const unsubscribe = NetInfo.addEventListener(state => {
  return setIsConnected(state.isConnected ?? false);
});


    // Simulate splash loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isConnected ? <MainScreen /> : <NetErrorScreen />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
