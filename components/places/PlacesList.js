import { View, Text, StyleSheet, FlatList } from 'react-native';
import PlaceItem from './PlaceItem';
import { Colors } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';

const PlacesList = ({ places }) => {
	const navigation = useNavigation();

	const selectHandler = ({ id }) => {
		navigation.navigate('PlaceDetail', { id });
	};

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
			renderItem={({ item }) => (
				<PlaceItem place={item} onPress={selectHandler} />
			)}
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
