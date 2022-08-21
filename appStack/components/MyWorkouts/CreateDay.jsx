import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CreateDay({ setApp }) {
	return (
		<TouchableOpacity style={styles.container} onPress={() => setApp("workouts")}>
			<Text style={styles.text}>My Workouts</Text>
			<View style={styles.iconContainer}>
				<Ionicons name={"body"} size={70} color={"white"} />
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282829',
        flexWrap: 'wrap',
		width: 165,
		height: 150,
		padding: 20,
		borderRadius: 10,
		margin: 10,
		justifyContent: 'center',
		alignItems: 'center',
    },
	text: {
		color: 'white',
		textAlign: 'center',
		paddingBottom: 10,
		fontSize: 15,
	},
	iconContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		width: '100%',
	},
});
