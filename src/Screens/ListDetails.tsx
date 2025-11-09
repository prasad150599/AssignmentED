import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity,ImageBackground, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Places from '../assets/Data/Places.json';
import PlacesList from '../assets/Data/PlacesList.json';

const ListDetails = ({ navigation, route }: any) => {

    const PlaceItem = ({ place }: any) => {
      console.log("PlaceData::", place)
    return (
      <TouchableOpacity onPress={()=>{navigation.navigate("PlaceDetails", {place: place})}} style={{flexDirection:"row", marginHorizontal:10, marginVertical:10, padding:10, borderRadius:10, borderWidth:1, borderColor:"#6e6e6e"}}>
        <View style={{marginRight:20}}>
              <Image source={{uri:place.image_url}} height={120} width={120}/>
              </View>
              <View style={{flex:2}}>
                <Text style={{fontSize:16, marginBottom:10, fontWeight:"bold"}}>{place.name}</Text>
                <Text style={{fontSize:14}} numberOfLines={3}>{place.description}</Text>
              </View>
      </TouchableOpacity>
    );
  };

  const { listData } = route.params;
  return (
    <ScrollView style={styles.container}>
      <Image source={{uri:listData.places[0].image_url}} height={400} width={"100%"}/>
      <Text style={{fontSize:24, margin:20}}>{listData.listname}</Text>
      <Text style={{fontSize:16, marginHorizontal:20}}>{listData.listDescription}</Text>
      <FlatList
        data={listData.places}
        renderItem={( {item} )=> <PlaceItem place={item}/>}
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
