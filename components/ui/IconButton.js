import { StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ icon, size, color, onPress }) => {
	return (
		<Pressable
			style={({ pressed }) => [styles.container, pressed && styles.pressed]}
			onPress={onPress}
		>
			<Ionicons styles={styles.button} name={icon} size={size} color={color} />
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 4,
		padding: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},
	pressed: {
		opacity: 0.7,
	},
});

export default IconButton;
