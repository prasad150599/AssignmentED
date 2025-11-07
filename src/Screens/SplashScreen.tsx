import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Eighty Days</Text>
      <Text style={styles.logo}>ED✈️</Text>
      <Text style={styles.tagline}>Explore the world with ease!</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1953b8ff",
    paddingHorizontal: 20,
  },

  appName: {
    fontSize: 36,
    fontWeight: "700",
    color: "#ffffff",
    letterSpacing: 1,
    marginBottom: 10,
  },

  logo: {
    fontSize: 50,
    fontWeight: "800",
    color: "#ffffff",
    marginTop: 5,
  },
  tagline: {
    marginTop: 20,
    fontSize: 18,
    color: "#e7f0ff",
    fontWeight: "500",
    letterSpacing: 0.5,
  },
});
