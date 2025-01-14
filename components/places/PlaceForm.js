import { useCallback, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Colors } from '@/constants/colors';
import ImagePicker from '../../components/places/ImagePicker';
import LocationPicker from '../../components/places/LocationPicker';
import Button from '../ui/Button';
import { Place } from '../../models/place';

const PlaceForm = ({ onCreatePlace }) => {
	const [title, setTitle] = useState('');
	const [image, setImage] = useState();
	const [location, setLocation] = useState();

	const titleChangeHandler = (enteredText) => {
		setTitle(enteredText);
	};

	const takeImageHandler = (imageUri) => {
		setImage(imageUri);
	};

	const pickLocationHandler = useCallback((location) => {
		setLocation(location);
	}, []);

	const savePlaceHandler = () => {
		const place = new Place({
			title,
			imageUri: image,
			location,
		});

		onCreatePlace(place);
	};

	return (
		<ScrollView style={styles.container}>
			<View>
				<Text style={styles.label}>Title</Text>
				<TextInput
					style={styles.input}
					value={title}
					onChangeText={titleChangeHandler}
				/>
			</View>
			<ImagePicker onTakeImage={takeImageHandler} />
			<LocationPicker onPickLocation={pickLocationHandler} />
			<Button onPress={savePlaceHandler}>Add Place</Button>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
	},
	label: {
		fontWeight: 'bold',
		marginBottom: 4,
		color: Colors.primary500,
	},
	input: {
		marginVertical: 8,
		paddingHorizontal: 4,
		paddingVertical: 8,
		fontSize: 16,
		color: Colors.primary700,
		borderBottomWidth: 2,
		backgroundColor: Colors.primary100,
	},
});

export default PlaceForm;
