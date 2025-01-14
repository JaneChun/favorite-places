import { View, Text, StyleSheet } from 'react-native';
import PlaceList from '../components/places/PlacesList';
import { useEffect, useState } from 'react';

const AllPlaces = ({ route }) => {
	const [loadedPlaces, setLoadedPlaces] = useState([]);
	const { params: { place } = {} } = route;

	useEffect(() => {
		if (place) {
			setLoadedPlaces((curPlaces) => [...curPlaces, place]);
		}
	}, [route]);

	return <PlaceList places={loadedPlaces} />;
};

const styles = StyleSheet.create({
	container: {},
});

export default AllPlaces;
