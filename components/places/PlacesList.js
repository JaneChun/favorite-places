import { View, Text, StyleSheet, FlatList } from 'react-native';
import PlaceItem from './PlaceItem';
import { Colors } from '../../constants/colors';

const PlacesList = ({ places }) => {
	if (!places || !places.length) {
		return (
			<View style={styles.fallbackContainer}>
				<Text style={styles.fallbackText}>No places added yet.</Text>
			</View>
		);
	}
	return (
		<FlatList
			style={styles.list}
			data={places}
			keyExtractor={({ id }) => id}
			renderItem={({ item }) => <PlaceItem place={item} onPress={() => {}} />}
		/>
	);
};

const styles = StyleSheet.create({
	fallbackContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	fallbackText: {
		fontSize: 16,
		color: Colors.primary200,
	},
	list: {
		margin: 24,
	},
});

export default PlacesList;
