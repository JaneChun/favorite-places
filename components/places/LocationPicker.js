import { View, Text, StyleSheet, Image } from 'react-native';
import OutlinedButton from '../ui/OutlinedButton';
import { Colors } from '@/constants/colors';
import {
	getCurrentPositionAsync,
	useForegroundPermissions,
	PermissionStatus,
} from 'expo-location';
import { useState } from 'react';
import { getMapPreview } from '../../util/location';

const LocationPicker = () => {
	const [pickedLocation, setPickedLocation] = useState();

	const [locationPermissionInformation, requestPermission] =
		useForegroundPermissions();

	const verifyPermissions = async () => {
		if (
			locationPermissionInformation.status === PermissionStatus.UNDETERMINED
		) {
			const permissionResponse = await requestPermission();
			return permissionResponse.granted;
		}

		if (locationPermissionInformation.status === PermissionStatus.DENIED) {
			Alert.alert(
				'Insufficient Permissions',
				'You need to grant location permissions to use this app.',
			);

			return false;
		}

		return true;
	};

	const getLocationHanlder = async () => {
		const hasPermission = await verifyPermissions();

		if (!hasPermission) {
			return;
		}

		const location = await getCurrentPositionAsync();
		const {
			coords: { latitude, longitude },
		} = location;
		setPickedLocation({
			lat: latitude,
			lng: longitude,
		});
	};

	const pickOnMapHanlder = () => {};

	let locationPreview = <Text>No location picked yet.</Text>;

	if (pickedLocation) {
		locationPreview = (
			<Image
				style={styles.image}
				source={{
					uri: getMapPreview({
						lat: pickedLocation.lat,
						lng: pickedLocation.lng,
					}),
				}}
			/>
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.mapPreview}>{locationPreview}</View>

			<View style={styles.actions}>
				<OutlinedButton
					style={styles.buttonStyle}
					icon='location'
					onPress={getLocationHanlder}
				>
					Locate User
				</OutlinedButton>
				<OutlinedButton
					style={styles.buttonStyle}
					icon='map'
					onPress={pickOnMapHanlder}
				>
					Pick on Map
				</OutlinedButton>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	mapPreview: {
		width: '100%',
		height: 200,
		marginVertical: 8,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.primary100,
		borderRadius: 8,
	},
	actions: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	buttonStyle: {
		flex: 1,
	},
	image: {
		width: '100%',
		height: '100%',
		borderRadius: 8,
	},
});

export default LocationPicker;
