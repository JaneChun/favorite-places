import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import OutlinedButton from '../components/ui/OutlinedButton';
import { Colors } from '../constants/colors';
import { useEffect, useState } from 'react';
import { fetchPlaceDetail } from '@/util/database';

const PlaceDetail = ({ navigation, route }) => {
	const [detail, setDetail] = useState();

	const { params: { id } = {} } = route;
	useEffect(() => {
		const loadPlaceDetail = async () => {
			if (id) {
				const placeDetail = await fetchPlaceDetail({ id });
				setDetail(placeDetail);
				navigation.setOptions({
					title: placeDetail.title,
				});
			}
		};

		loadPlaceDetail();
	}, [id]);
	const showOnMapHandler = () => {};

	if (!detail) {
		return (
			<View style={styles.fallbackContainer}>
				<Text style={styles.fallbackText}>Loading Place Detail...</Text>
			</View>
		);
	}

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Image style={styles.image} source={{ uri: detail.imageUri }} />
			<View style={styles.locationContainer}>
				<View style={styles.addressContainer}>
					<Text style={styles.adderess}>{detail.address}</Text>
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
	fallbackContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	fallbackText: {
		fontSize: 16,
		color: Colors.primary200,
		textAlign: 'center',
	},
});

export default PlaceDetail;
