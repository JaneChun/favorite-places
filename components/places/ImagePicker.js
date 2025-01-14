import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import {
	launchCameraAsync,
	useCameraPermissions,
	PermissionStatus,
} from 'expo-image-picker';
import { useState } from 'react';
import { Colors } from '@/constants/colors';
import OutlinedButton from '../ui/OutlinedButton';

const ImagePicker = ({ onTakeImage }) => {
	const [image, setImage] = useState();
	const [cameraPermissionInformation, requestPermission] =
		useCameraPermissions();

	const verifyPermissions = async () => {
		if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
			const permissionResponse = await requestPermission();
			return permissionResponse.granted;
		}

		if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
			Alert.alert(
				'Insufficient Permissions',
				'You need to grant camera permissions to use this app.',
			);

			return false;
		}

		return true;
	};

	const takeImageHandler = async () => {
		const hasPermission = await verifyPermissions();

		if (!hasPermission) {
			return;
		}

		const image = await launchCameraAsync({
			allowsEditing: true,
			aspect: [16, 9],
			quality: 0.5,
		});

		const {
			assets: [{ uri }],
		} = image;
		setImage(uri);
		onTakeImage(uri);
	};

	let imagePreview = <Text>No image taken yet.</Text>;

	if (image) {
		imagePreview = <Image style={styles.image} source={{ uri: image }} />;
	}
	return (
		<View style={styles.container}>
			<View style={styles.imagePreview}>{imagePreview}</View>
			<OutlinedButton icon='camera' onPress={takeImageHandler}>
				Take Image
			</OutlinedButton>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	imagePreview: {
		width: '100%',
		height: 200,
		marginVertical: 8,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.primary100,
		borderRadius: 8,
	},
	image: {
		width: '100%',
		height: '100%',
		borderRadius: 8,
	},
});

export default ImagePicker;
