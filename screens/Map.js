import IconButton from '@/components/ui/IconButton';
import { useCallback, useLayoutEffect, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map = ({ navigation }) => {
	const [selectedLocation, setSelectedLocation] = useState();

	const region = {
		latitude: 37.29,
		longitude: 127.14,
		latitudeDelta: 0.01,
		longitudeDelta: 0.01,
	};

	const selectLocationHandler = (event) => {
		const {
			nativeEvent: {
				coordinate: { latitude, longitude },
			},
		} = event;
		setSelectedLocation({ lat: latitude, lng: longitude });
	};

	const savePickedLocationHandler = useCallback(() => {
		if (!selectedLocation) {
			Alert.alert('No location picked!', 'You have to pick a location first!');
			return;
		}

		navigation.navigate('AddPlace', { selectedLocation });
	}, [navigation, selectedLocation]);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: ({ tintColor }) => (
				<IconButton
					icon='save'
					color={tintColor}
					size={24}
					onPress={savePickedLocationHandler}
				/>
			),
		});
	}, [navigation, savePickedLocationHandler]);

	return (
		<MapView
			style={styles.map}
			initialRegion={region}
			onPress={selectLocationHandler}
		>
			{selectedLocation && (
				<Marker
					title='Picked Location'
					coordinate={{
						latitude: selectedLocation.lat,
						longitude: selectedLocation.lng,
					}}
				/>
			)}
		</MapView>
	);
};

const styles = StyleSheet.create({
	map: {
		flex: 1,
	},
});

export default Map;
