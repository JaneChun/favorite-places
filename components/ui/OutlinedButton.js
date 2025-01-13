import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Colors } from '../../constants/colors';

const OutlinedButton = ({ children, icon, onPress }) => {
	return (
		<Pressable
			style={({ pressed }) => [styles.container, pressed && styles.pressed]}
			onPress={onPress}
		>
			<Ionicons
				style={styles.icon}
				name={icon}
				color={Colors.primary500}
				size={18}
			/>
			<Text style={styles.text}>{children}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 12,
		paddingVertical: 6,
		margin: 4,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: Colors.primary500,
	},
	pressed: {
		opacity: 0.7,
	},
	icon: {
		marginRight: 6,
	},
	text: {
		color: Colors.primary500,
	},
});

export default OutlinedButton;
