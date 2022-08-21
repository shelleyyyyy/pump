import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const workouts = [
    {
        name: "Upper Lower",
        author: "John Doe",
        description: "This is a workout for the upper and lower body",
        plan: [
            {
                "week": "one",
                "days": [
                    {
                        "title": "Lower One",
                        "day": "mon",
                        "arr": [
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                        ]
                    },
                    {
                        "title": "Upper One",
                        "day": "mon",
                        "arr": [
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                        ]
                    },
                    {
                        "title": "Lower Two",
                        "day": "mon",
                        "arr": [
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                        ]
                    },
                    {
                        "title": "Upper Two",
                        "day": "mon",
                        "arr": [
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                        ]
                    },
                    {
                        "title": "Lower Three",
                        "day": "mon",
                        "arr": [
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                        ]
                    },
                    
                ]
            },
            {
                "week": "two",
                "days": [
                    {
                        "title": "Lower One",
                        "day": "mon",
                        "arr": [
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                        ]
                    },
                    {
                        "title": "Upper One",
                        "day": "mon",
                        "arr": [
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                        ]
                    },
                    {
                        "title": "Lower Two",
                        "day": "mon",
                        "arr": [
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                        ]
                    },
                    {
                        "title": "Upper Two",
                        "day": "mon",
                        "arr": [
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                        ]
                    },
                    {
                        "title": "Lower Three",
                        "day": "mon",
                        "arr": [
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                            {
                                "title": "squat",
                                "weight": 200,
                                "reps": 10,
                                "description": "ass to grass"
                            },
                        ]
                    },
                    
                ]
            },
        ]
    },
]

export default function StatsScreen({setApp}) {
    
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => setApp("home")} style={{paddingTop: 40, paddingLeft: 10, flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons name={"chevron-back-outline"} size={30} color={"white"} />
                    <Text style={{color: 'white'}}>home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setWorkout("none")} style={{paddingTop: 40, paddingLeft: 10, flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons name={"chevron-back-outline"} size={30} color={"white"} />
                    <Text style={{color: 'white'}}>workouts</Text>
                </TouchableOpacity>
                </View>
                <Text style={{color: 'white', fontSize: 40, fontWeight: 'bold', paddingVertical: 10, textAlign: 'center'}}>{workout.name}</Text>
                <ScrollView>
                    {workout.plan.map((d, k) => {
                        return <Week setEditWeek={setEditWeek} key={k} data={d}></Week>
                    })}
                    <NewWeek></NewWeek>
                    
                </ScrollView>
                <EditWeek></EditWeek>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 225,
        height: '90%',

    },
});
