import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CreateWorkout({ setApp }) {
    const [text, onChangeText] = useState();

	return (
		<View style={styles.container} onPress={() => setApp("workouts")}>
			<Text style={styles.text}>New Workout</Text>
            <View style={{paddingTop: 20}}>
                <View style={styles.inputContainer}>
                    <Text style={styles.prompt}>Title: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder = "Title"
                        placeholderTextColor = "lightgray"
                        fontSize = '20'
                        color = 'white'
                        value={text}
                    />
                </View>
                <View style={{paddingTop: 30}}>
                    <Button
                        // onPress={onPressLearnMore}
                        style={{padding: 10, margin: 10}}
                        title="Create"
                    />
                </View>
            </View>
		</View>
	);
}

const styles = StyleSheet.create({
    container: {

    },
	text: {
		fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        padding: 20,
        textAlign: 'center',
	},
    inputContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    prompt: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingRight: 30,
    },
    input: {
        color: 'white',
        // textAlign: 'center',
        fontSize: 10,
        height: 30,
        borderColor: 'white',
        borderBottomWidth: 1,
        paddingLeft: 10,
        // paddingRight: 10,
        width: '70%',
        opacity: 0.5,
    },

});
