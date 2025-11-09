import React from 'react';
<<<<<<< HEAD
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity,ImageBackground, ScrollView } from 'react-native';
=======
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
>>>>>>> 93f917e (Updated screens with ListComponent and ListDetails)
import { SafeAreaView } from 'react-native-safe-area-context';
import Places from '../assets/Data/Places.json';
import PlacesList from '../assets/Data/PlacesList.json';

const ListDetails = ({ navigation, route }: any) => {

  const PlaceItem = ({ place }: any) => {
    console.log("PlaceData::", place)
    return (
      <TouchableOpacity onPress={() => { navigation.navigate("PlaceDetails", { place: place }) }}
        style={styles.itemContainer}>
        <View style={{ marginRight: 20 }}>
          <Image source={{ uri: place.image_url }} height={120} width={120} />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={{ fontSize: 16, marginBottom: 10, fontWeight: "bold" }}>{place.name}</Text>
          <Text style={{ fontSize: 14 }} numberOfLines={3}>{place.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const { listData } = route.params;
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: listData.places[0].image_url }} style={styles.image} />
      <Text style={{ fontSize: 24, margin: 20 }}>{listData.listname}</Text>
      <Text style={{ fontSize: 16, marginHorizontal: 20 }}>{listData.listDescription}</Text>
      <FlatList
        data={listData.places}
        renderItem={({ item }) => <PlaceItem place={item} />}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 16,
  },

  itemContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#6e6e6e"
  },
  image: {
    height: 400,
    width: "100%" 
  },
  id: {
    fontSize: 14,
    color: '#555',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },
});

export default ListDetails;
