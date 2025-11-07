import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import Places from '../assets/Data/Places.json'

const HomeScreen: React.FC = ({ navigation }: any) => {

  const ListItem = ({ item }: any) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={() => {navigation.navigate('PlaceDetails', { place: item });}}>
      <View style={{flex: 1, margin: 10}}>
        <Image source={{ uri: item.image_url }} style={styles.image} />
        <View style={{ marginTop: 8 }}>
          <Text style={styles.title} numberOfLines={1}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome to Eighty Days</Text>

      <FlatList
        data={Places}
        keyExtractor={(item) => item.google_place_id.toString()}
        renderItem={({ item }) => <ListItem item={item} />}
        contentContainerStyle={styles.listContent}
      numColumns={2}
      />
    </SafeAreaView>
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
  listContent: {
    paddingHorizontal: 10,
    paddingBottom: 40,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    height: 220,
  },
  image: {
    width: '100%',
    height: '90%',
    borderRadius: 10,
    backgroundColor: '#eee',
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

export default HomeScreen;
