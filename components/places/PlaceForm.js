import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Colors } from '@/constants/colors';
import ImagePicker from '../../components/places/ImagePicker';

const PlaceForm = () => {
	const [title, setTitle] = useState('');
	const titleChangeHandler = (enteredText) => {
		setTitle(enteredText);
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
			<ImagePicker />
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
