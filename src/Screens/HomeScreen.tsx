import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity,ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Places from '../assets/Data/Places.json';
import PlacesList from '../assets/Data/PlacesList.json';

const HomeScreen: React.FC = ({ navigation }: any) => {

  const ListItem = ({ item }: any) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={() => {navigation.navigate('ListDetails', { listData: item })}}>
        <ImageBackground style={styles.image} 
      source={{ uri: item.places[0].image_url }} >
        <Text style={{fontSize:16,fontWeight:'bold', color:"#FFFFFF", margin:10}} numberOfLines={1}>{item.listname}</Text>
     </ImageBackground>
    </TouchableOpacity>
  );
};

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome to Eighty Days</Text>

      <FlatList
        data={PlacesList}
        keyExtractor={(item) => item.listId.toString()}
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
    height: 220,
    margin:4
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#eee',
    justifyContent:"flex-end"
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
