import { Text, StyleSheet, Pressable } from 'react-native';
import { Colors } from '../../constants/colors';

const Button = ({ onPress, children }) => {
	return (
		<Pressable
			style={({ pressed }) => [styles.container, pressed && styles.pressed]}
			onPress={onPress}
		>
			<Text style={styles.text}>{children}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 12,
		paddingVertical: 8,
		margin: 4,
		backgroundColor: Colors.primary800,
		elevation: 2,
		shadowColor: 'black',
		shadowOpacity: 0.15,
		shadowOffset: { width: 1, height: 1 },
		shadowRadius: 2,
		borderRadius: 4,
	},
	pressed: {
		opacity: 0.7,
	},
	text: {
		textAlign: 'center',
		fontSize: 16,
		color: Colors.primary50,
	},
});

export default Button;
