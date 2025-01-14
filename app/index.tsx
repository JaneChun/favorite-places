import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlaces from '../screens/AllPlaces';
import AddPlace from '../screens/AddPlace';
import Map from '../screens/Map';
import PlaceDetail from '../screens/PlaceDetail';
import IconButton from '../components/ui/IconButton';
import { Colors } from '../constants/colors';
import { useEffect, useState } from 'react';
import { init } from '../util/database';
import AppLoading from 'expo-app-loading';

const Stack = createNativeStackNavigator();

export default function Index() {
	const [dbInitialized, setDbInitialized] = useState(false);

	useEffect(() => {
		init()
			.then(() => {
				console.log('Database initialized successfully.');
				setDbInitialized(true);
			})
			.catch((err) => {
				console.error('Database initialization failed:', err);
			});
	}, []);

	if (!dbInitialized) {
		return <AppLoading />;
	}

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
				<Stack.Screen name='Map' component={Map} />
				<Stack.Screen name='PlaceDetail' component={PlaceDetail} />
			</Stack.Navigator>
		</>
	);
}
