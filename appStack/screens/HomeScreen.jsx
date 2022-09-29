import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Title from '../Title';
import React, { useState, useEffect } from 'react'
import MyWorkoutsWidget from '../components/MyWorkouts/MyWorkoutsWidget';
import MyWorkoutScreen from '../components/MyWorkouts/MyWorkoutScreen';
import StatsWidget from '../components/Stats/StatsWidget';
import EditWidget from '../components/EditWidgets/EditWidget';
import PopularWorkoutsWidget from '../components/PopularWorkouts/PopularWorkoutsWidget';
import StatsScreen from '../components/Stats/StatsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { firebase } from '../../firebase';
// import { database } from '../../firebase'
// import { ref, onValue } from "firebase/database";

export default function HomeScreen() {

    // const [posts, setPosts] = useState([])
    // const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     fetchPosts()
    // }, [])
    

    // const fetchPosts = () => {
    //     setLoading(true)
    //     const posts = ref(database, 'PostProps');
    //     onValue(posts, (snapshot) => {
    //     const data = snapshot.val();
    //         setPosts(data)
    //         setLoading(false)
    //     });
    // }

    const [data, setData] = useState([])
    const workouts = firebase.firestore().collection("workouts");

    useEffect(() => {
        async function fetchData() {
            workouts.onSnapShot(
                querySnapshot => {
                    const newData = []
                    querySnapshot.forEach((doc) => {
                        const { author, description, title } = doc.data()
                        console.log(doc.data())
                        newData.push({
                            id: doc.id,
                            author,
                            description,
                            title
                        })
                    })
                    setData(newData)
                }
            )
        }
        fetchData()
    } , [])

    console.log(data)

    const [app, setApp] = useState("home")
    if (app === "home") {
        return (
            <View style={styles.container}>
                <SafeAreaView style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    <Text style={styles.text}>Pump</Text>
                    <Ionicons name={"barbell-outline"} size={100} color={"white"} />
                </SafeAreaView>
                <ScrollView>
                    <View style={styles.widgetContainer}>
                        <MyWorkoutsWidget setApp={setApp}></MyWorkoutsWidget>
                        <StatsWidget setApp={setApp}></StatsWidget>
                        <PopularWorkoutsWidget setApp={setApp}></PopularWorkoutsWidget>
                        <EditWidget setApp={setApp}></EditWidget>
                    </View>
                </ScrollView>
            </View>
        );
    } else if (app === "workouts") {
        return (
            <MyWorkoutScreen setApp={setApp}></MyWorkoutScreen>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        height: 10,
        
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        // paddingTop: '15%',
        // paddingBottom: 20,
        // paddingLeft: 20,
        padding: 20,
        textAlign: 'center',
    },
    widgetContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
