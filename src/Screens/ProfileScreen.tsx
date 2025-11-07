import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      <Image
        source={{ uri: "https://i.pravatar.cc/150" }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Prasad Bundele</Text>
      <Text style={styles.email}>prasad@example.com</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>About Me</Text>
        <Text style={styles.cardText}>
          Travel lover ✈️ | React Native Developer | Always exploring new technologies.
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "#f7f9fc",
  },

  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#1953b8",
  },

  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#222",
  },

  email: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
  },

  card: {
    width: "85%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    marginTop: 10,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },

  cardText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },

  button: {
    marginTop: 25,
    backgroundColor: "#1953b8",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
