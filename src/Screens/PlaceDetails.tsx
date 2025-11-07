import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Marker } from 'react-native-maps';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';

interface PlaceDetailsProps {
  route: {
    params: {
      place: {
        name: string;
        vicinity: string;
        rating: number;
        photos: { url: string }[];
        coordinates: { lat: number; lng: number };
      };
    };
  };
}

const PlaceDetails = ({ navigation,route }: any) => {
  const { place } = route.params;
  const region = {
    latitude: place.coordinates.lat,
    longitude: place.coordinates.lng,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  return (                  
    <SafeAreaView style={styles.container}>     
        <Image source={{ uri: place.image_url }} style={styles.image} />
        <Text style={styles.name}>{place.name}</Text>
        <Text style={styles.rating}>Rating: {place.rating} {'\u2022'} {place.categories[0].name}</Text>
        <Text style={styles.country}>Country: {place.country.name}</Text>
        <Text style={styles.description}>{place.description}</Text>

        <TouchableOpacity style={{height:300, borderRadius:20,width:"100%",margin:10}}
        onPress={() => {navigation.navigate('PlaceMapView', { place: place });}} >

        <MapView
        provider="google" // Use Google Maps (not Apple)
        style={StyleSheet.absoluteFill}
        initialRegion={region}
        zoomEnabled={true} showsCompass showsUserLocation showsMyLocationButton
        >
            <Marker
                coordinate= {{latitude: place.coordinates.lat, longitude: place.coordinates.lng}}
                title= {place.name}
                
            />
        </MapView>
       </TouchableOpacity>
        
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16,
        textAlign: 'left',
        alignSelf: "flex-start"
    },
    vicinity: {
        fontSize: 16,
        color: '#666',
        marginTop: 8,
    },
    rating: {
        fontSize: 14,
        color: '#666',
        marginTop: 8,
        alignSelf: "flex-start"
    },
    country:{
        fontSize: 16,
        color: '#272727',
        marginTop: 8,
        alignSelf: "flex-start"
    },
    description: {
        fontSize: 16,
        color: '#272727',
        marginTop: 8,
        alignSelf: "flex-start"
    },
});

export default PlaceDetails;