import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const PlaceItem = ({ place, onPress }) => {
	return (
		<Pressable style={styles.container} onPress={onPress}>
			<Image souce={{ uri: place.imageUri }} />

			<View>
				<Text>{place.title}</Text>
				<Text>{place.address}</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {},
});

export default PlaceItem;
