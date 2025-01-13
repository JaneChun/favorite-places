import { View, Text, StyleSheet } from 'react-native';
import OutlinedButton from '../ui/OutlinedButton';
import { Colors } from '@/constants/colors';

const LocationPicker = () => {
	const getLocationHanlder = () => {};
	const pickOnMapHanlder = () => {};
	return (
		<View style={styles.container}>
			<View style={styles.mapPreview}></View>
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
});

export default LocationPicker;
