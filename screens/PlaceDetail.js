import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import OutlinedButton from '../components/ui/OutlinedButton';
import { Colors } from '../constants/colors';
import { useEffect } from 'react';

const PlaceDetail = ({ route }) => {
	const { params: { id } = {} } = route;
	useEffect(() => {
		if (id) {
			console.log(id);
		}
	}, [id]);
	const showOnMapHandler = () => {};

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Image style={styles.image} />
			<View style={styles.locationContainer}>
				<View style={styles.addressContainer}>
					<Text style={styles.adderess}>ADDRESS</Text>
				</View>
				<OutlinedButton icon='map' onPress={showOnMapHandler}>
					View on Map
				</OutlinedButton>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	image: {
		width: '100%',
		height: '35%',
		minHeight: 300,
	},
	locationContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	addressContainer: {
		padding: 20,
	},
	adderess: {
		color: Colors.primary500,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 16,
	},
});

export default PlaceDetail;
