import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


function NetErrorScreen() {
  return (
    <View style={styles.container}>
     

      <Text style={styles.title}>No Internet Connection</Text>

      <Text style={styles.subtitle}>
        Please check your network settings and try again.
      </Text>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
}
export default NetErrorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
    paddingHorizontal: 30,
    paddingVertical: 12,
    backgroundColor: "#007AFF",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
