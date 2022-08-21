import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function WorkoutWidget({ setWorkout, data }) {
	return (
		<TouchableOpacity style={styles.container} onPress={() => setWorkout(data)}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', }}>{data.name}</Text>
                <Text style={{color: 'white', fontSize: 15 }}>{data.author}</Text>
            </View>
            <Text style={{color: 'white', fontSize: 15, paddingTop: 10 }}>{data.description}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282829',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        
    },
});
