import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlaces from '../screens/AllPlaces';
import AddPlace from '../screens/AddPlace';
import IconButton from '../components/IconButton';

const Stack = createNativeStackNavigator();

export default function Index() {
	return (
		<>
			<StatusBar style='dark' />
			<Stack.Navigator>
				<Stack.Screen
					name='AllPlaces'
					component={AllPlaces}
					options={({ navigation }) => ({
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
				<Stack.Screen name='AddPlace' component={AddPlace} />
			</Stack.Navigator>
		</>
	);
}
