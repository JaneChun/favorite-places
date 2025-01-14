import { View, Text, StyleSheet } from 'react-native';
import PlaceForm from '../components/places/PlaceForm';

const AddPlace = ({ navigation }) => {
	const createPlaceHandler = (place) => {
		navigation.navigate('AllPlaces', { place });
	};

	return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

const styles = StyleSheet.create({
	container: {},
});

export default AddPlace;
