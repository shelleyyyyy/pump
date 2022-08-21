import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState, createContext} from 'react'
import Login from './authStack/Login';
import Navigation from './appStack/Navigation';


export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  if(!isLoggedIn){
    return(
		<View style={styles.container}>
			<Login setIsLoggedIn={setIsLoggedIn}/>
			<StatusBar style="auto" />
		</View>
    );
  }
  return (
	<Navigation></Navigation>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		padding: 20,
	}
});
