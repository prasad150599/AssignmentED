import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Marker } from 'react-native-maps';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';


interface PlaceMapViewProps {
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

const PlaceMapView = ({navigation, route }: any) => {
  const { place } = route.params;
  const region = {
    latitude: place.coordinates.lat,
    longitude: place.coordinates.lng,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  return (                  
    <SafeAreaView style={styles.container}>     
       
        <MapView
        provider="google" // Use Google Maps (not Apple)
        style={StyleSheet.absoluteFill}
        initialRegion={region}
        zoomEnabled={true} showsCompass showsUserLocation showsMyLocationButton
        >
            <Marker
                coordinate= {{latitude: place.coordinates.lat, longitude: place.coordinates.lng}}
                title= {place.name}
                description="Popular tourist spot"
            />
        </MapView>
        
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

export default PlaceMapView;