import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const Map = () => {
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    
    const handleSearch = (data, details) => {
        const newRegion = {
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        };
        setRegion(newRegion);
    };

    return (
        <View style={styles.container}>

            <GooglePlacesAutocomplete
                placeholder="Search for a location"
                fetchDetails={true}
                onPress={(data, details = null) => {

                    handleSearch(data, details);
                }}
                query={{
                    key: 'YOUR_GOOGLE_API_KEY',
                    language: 'en',
                }}
                styles={{
                    textInput: styles.searchBox,
                    container: styles.searchContainer,
                    listView: styles.listView,
                }}
            />

           
            <MapView
                style={styles.map}
                region={region}
                onRegionChangeComplete={setRegion}
            >
                <Marker
                    coordinate={region}
                    title="Selected Location"
                    description="This is the location you selected"
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    searchBox: {
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 10,
        height: 40,
        fontSize: 16,
    },
    searchContainer: {
        position: 'absolute',
        top: 10,
        width: '90%',
        zIndex: 1,
        alignSelf: 'center',
    },
    listView: {
        backgroundColor: '#fff',
    },
});

export default Map;
