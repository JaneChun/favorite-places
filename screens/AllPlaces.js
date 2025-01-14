import { StyleSheet } from 'react-native';
import PlaceList from '../components/places/PlacesList';
import { useEffect, useState } from 'react';
import { fetchPlaces } from '@/util/database';

const AllPlaces = () => {
	const [loadedPlaces, setLoadedPlaces] = useState([]);

	useEffect(() => {
		const loadPlaces = async () => {
			console.log('loadPlaces');
			try {
				const fetchedPlaces = await fetchPlaces();
				setLoadedPlaces(fetchedPlaces);
			} catch (err) {
				console.log(err);
			}
		};

		loadPlaces();
	}, []);

	return <PlaceList places={loadedPlaces} />;
};

const styles = StyleSheet.create({
	container: {},
});

export default AllPlaces;
