import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import { theme, color, size, text, tab } from './theme';

function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: color.secondary}}>
        <HomeScreen></HomeScreen>
    </View>
  );
}

function SettingsScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: color.secondary}}>
                <Text>Settings</Text>
		</View>
	);
}

function FeedScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: color.secondary}}>
                <Text>Feed</Text>
		</View>
	);
}

const Tab = createBottomTabNavigator();

export default function App() {

	return (
		<NavigationContainer>
			{/* <MainChain></MainChain> */}
			<Tab.Navigator
				screenOptions={({ route }) => ({
				tabBarIcon: ({ color, size }) => {
				let iconName;

				if (route.name === 'Home') {
					iconName = 'home-outline'
				} else if (route.name === 'Settings') {
					iconName ='settings-outline';
				} else if (route.name === 'Feed'){
					iconName = 'layers-outline'
				}
					return <Ionicons name={iconName} size={size} color={color} />;
				},
				
				headerShown: false,
				tabBarActiveTintColor: tab.active,
				tabBarInactiveTintColor: tab.inactive,
				tabBarColor: tab.color,
				backgroundColor: tab.color,
				
				tabBarStyle: {
					height: 90,
					paddingTop: 0,
					backgroundColor: tab.color,
					position: 'absolute',
					borderTopWidth: 0,
				},
				})}>

				<Tab.Screen name="Feed" component={FeedScreen} />
				<Tab.Screen name="Home" component={Home} />
				<Tab.Screen name="Settings" component={SettingsScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}