import { Colors } from '../../constants/colors';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const PlaceItem = ({ place, onPress }) => {
	return (
		<Pressable
			style={({ pressed }) => [styles.container, pressed && styles.pressed]}
			onPress={() => onPress({ id: place.id })}
		>
			<Image style={styles.image} source={{ uri: place.imageUri }} />

			<View style={styles.info}>
				<Text style={styles.title}>{place.title}</Text>
				<Text style={styles.address}>{place.address}</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderRadius: 6,
		marginVertical: 12,
		backgroundColor: Colors.primary500,
		elevation: 2,
		shadowColor: 'black',
		shadowOpacity: 0.15,
		shadowOffset: { width: 1, height: 1 },
		shadowRadius: 2,
	},
	pressed: {
		opacity: 0.9,
	},
	image: {
		flex: 1,
		borderTopLeftRadius: 4,
		borderBottomLeftRadius: 4,
		height: 100,
	},
	info: {
		flex: 2,
		padding: 12,
		// borderTopRightRadius: 4,
		// borderBottomRightRadius: 4
	},
	title: {
		fontWeight: 'bold',
		fontSize: 18,
		color: Colors.gray700,
	},
	address: {
		fontSize: 12,
		color: Colors.gray700,
	},
});

export default PlaceItem;
