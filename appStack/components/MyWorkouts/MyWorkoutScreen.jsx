import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import WorkoutWidget from './WorkoutWidget';
import Week from './Week';
import BottomDrawer from './BottomDrawer';

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

export default function MyWorkoutScreen({setApp}) {
    const [workout, setWorkout] = useState("none")
    const [edit, setEdit] = useState("none")


    const NewWeek = () => {
        return (
            <TouchableOpacity style={{backgroundColor: '#4a4b4d', width: '100%', padding: 20, borderRadius: 10, marginBottom: 10,}}>
                <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>+ Week</Text>
            </TouchableOpacity>
        )
    }

    const DrawerSwitch = () => {
        switch(edit) {
            case "day":
                return <BottomDrawer title={"day"} setEdit={setEdit}></BottomDrawer>
            case "week":
                return <BottomDrawer title={"week"} setEdit={setEdit}></BottomDrawer>
            case "workout":
                return <BottomDrawer title={"workout"} setEdit={setEdit}></BottomDrawer>
            case "week":
                return <BottomDrawer title={"week"} setEdit={setEdit}></BottomDrawer>
            default:
                return <></>
          } 
    }

    const NewWorkout = () => {
        return (
            <TouchableOpacity onPress={() => setEdit('workout')} style={{backgroundColor: '#4a4b4d', width: '100%', padding: 20, borderRadius: 10, marginBottom: 10,}}>
                <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>+ Workout</Text>
            </TouchableOpacity>
        )
    }


	if (workout === "none") {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => setApp("home")} style={{paddingTop: 40, paddingLeft: 10, flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons name={"chevron-back-outline"} size={30} color={"white"} />
                    <Text style={{color: 'white'}}>home</Text>
                </TouchableOpacity>
                <Text style={{color: 'white', fontSize: 40, fontWeight: 'bold', paddingVertical: 10, textAlign: 'center'}}>My Workouts</Text>
                <ScrollView style={{height: '100%'}}>
                    {workouts.map((w, k) => {
                        return <WorkoutWidget setWorkout={setWorkout} data={w} key={k}></WorkoutWidget>
                    })}
                    <NewWorkout></NewWorkout>
                </ScrollView>
                <DrawerSwitch></DrawerSwitch>
            </View>
        );
    } else {
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
                        return <Week setEdit={setEdit} key={k} data={d}></Week>
                    })}
                    <NewWeek></NewWeek>
                    
                </ScrollView>
                <DrawerSwitch></DrawerSwitch>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 225,
        height: '90%',

    },
});
