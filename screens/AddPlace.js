import { View, Text, StyleSheet } from 'react-native';
import PlaceForm from '../components/places/PlaceForm';
import { insertPlace } from '@/util/database';

const AddPlace = ({ navigation }) => {
	const createPlaceHandler = async (place) => {
		try {
			await insertPlace({ place });
			navigation.navigate('AllPlaces');
		} catch (err) {
			console.log(err);
		}
	};

	return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

const styles = StyleSheet.create({
	container: {},
});

export default AddPlace;
