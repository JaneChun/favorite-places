import { View, Text, StyleSheet } from 'react-native';
import PlaceList from '../components/places/PlacesList';

const AllPlaces = ({ route }) => {
	console.log(route.params);
	return <PlaceList />;
};

const styles = StyleSheet.create({
	container: {},
});

export default AllPlaces;
