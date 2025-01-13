import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlaces from '../screens/AllPlaces';
import AddPlace from '../screens/AddPlace';
import IconButton from '../components/ui/IconButton';
import { Colors } from '../constants/colors';

const Stack = createNativeStackNavigator();

export default function Index() {
	return (
		<>
			<StatusBar style='dark' />
			<Stack.Navigator
				screenOptions={{
					headerTintColor: Colors.gray700,
					headerStyle: {
						backgroundColor: Colors.primary500,
					},
					contentStyle: {
						backgroundColor: Colors.gray700,
					},
				}}
			>
				<Stack.Screen
					name='AllPlaces'
					component={AllPlaces}
					options={({ navigation }) => ({
						title: 'Your Favorite Places',
						headerRight: ({ tintColor }) => (
							<IconButton
								icon='add'
								color={tintColor}
								size={24}
								onPress={() => {
									navigation.navigate('AddPlace');
								}}
							/>
						),
					})}
				/>
				<Stack.Screen
					name='AddPlace'
					component={AddPlace}
					options={{
						title: 'Add a New Place',
					}}
				/>
			</Stack.Navigator>
		</>
	);
}
