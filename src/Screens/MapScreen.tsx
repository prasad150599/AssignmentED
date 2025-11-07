import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';


const MapScreen = () => {
const region = {
    latitude: 19.076090,
    longitude: 72.877426,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };
  return (
    <View style={styles.container}>
      <MapView
        provider="google" // Use Google Maps (not Apple)
        style={StyleSheet.absoluteFill}
        initialRegion={region}
        zoomEnabled={true}
        showsMyLocationButton
        showsUserLocation
      >
        <Marker
          coordinate={{ latitude: 19.076090, longitude: 72.877426 }}
          title="Pier 39"
          description="Popular tourist spot"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  map:{
    height: '80%',
    width: '100%'
  }
});

export default MapScreen;
