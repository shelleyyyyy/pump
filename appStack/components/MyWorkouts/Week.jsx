import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Week({setEdit, data}) {

    const Day = ({day}) => {
        const Exercise = ({exercise}) => {
            const [show, setShow] = useState(false)
            const toggleShow = () => setShow(previousState => !previousState);
            const Info = () => {
                if(show){
                    return(
                        <View style={{justifyContent: 'center', alignItems: 'center', paddingBottom: 20}}>
                            <Text style={{color: 'white', fontSize: 15, paddingTop: 10, textAlign: 'center' }}>{exercise.description}</Text>
                        </View>
                    )
                }
            }
            return(
                <TouchableOpacity onPress={toggleShow}>
                    <View style={{flexDirection: 'row',justifyContent: 'right', width: '100%', alignSelf: 'right', borderColor: 'white', borderTopWidth: 1}}>
                        <Text style={styles.exercise}>{exercise.title}</Text>
                        <Text style={styles.exercise}>{exercise.weight}</Text>
                        <Text style={styles.exercise}>{exercise.reps}</Text>
                    </View>
                    <Info></Info>
                </TouchableOpacity>
            )
        }

        const Headers = () => {
            return(
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.exercise}>Workout</Text>
                    <Text style={styles.exercise}>lbs.</Text>
                    <Text style={styles.exercise}>reps</Text>
                </View>
            )
        }

        const Days = () => {
            if(isEnabled){
                return(
                    <View style={{paddingTop: 20, justifyContent: 'right', alignItems: 'center', alignSelf: 'center'}}>
                        <Headers></Headers>
                        {day.arr.map((exercise, key) => {
                            return <Exercise key={key} exercise={exercise}></Exercise>
                        })}
                    </View>
                )
            } else{
                return(
                    <View></View>
                )
            }
        }
        const [isEnabled, setIsEnabled] = useState(true);
        const toggleSwitch = () => setIsEnabled(previousState => !previousState);
        let color = 'white'
        if (isEnabled) {
            color = 'white'
        } else {
            color = 'green'
        }
        return (
            <View style={{borderBottomColor: 'black', borderTopWidth: 0, paddingVertical: 10, justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => setEdit('week')} style={{paddingLeft: 20, flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 10, alignItems: 'center'}}>
                        <Ionicons name={"pencil-outline"} size={15} color={"white"} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between'}} onPress={toggleSwitch}>
                        <Text style={{color: color, fontSize: 20, fontWeight: 'bold', }}>{day.day}: {day.title}</Text>
                    </TouchableOpacity>
                    
                </View>
                <Days></Days>
            </View>
        );
    }


    const [isWeekEnabled, setIsWeekEnabled] = useState(true);

    const toggleWeek = () => setIsWeekEnabled(previousState => !previousState);
    let color = 'white'
    if (isWeekEnabled) {
        color = 'white'
    } else {
        color = 'green'
    }
    const Carrot = () => {
        if(isWeekEnabled){
            return(
                <Ionicons name="ios-arrow-down" size={25} color={color} />
            )
        } else{
            return(
                <Ionicons name="ios-arrow-up" size={25} color={color} />
            )
        }
    }

    

    const WeekComp = () => {

        const NewDay = () => {
            return (
                <TouchableOpacity onPress={() => setEdit("day")} style={{backgroundColor: '#4a4b4d', width: '100%', padding: 20, borderRadius: 10, marginBottom: 10,}}>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>+ Day</Text>
                </TouchableOpacity>
            )
        }
        if(isWeekEnabled){
            return(
            <View>
                {data.days.map((day, k) => {
                    return <Day key={k} day={day} />
                })}
                <NewDay></NewDay>
            </View>
            )
        } else{
            return(
                <View></View>
            )
        }
    }


    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={[{color: color}, styles.text]}>Week: {data.week}</Text>
                </View>
                <TouchableOpacity onPress={toggleWeek}>
                    <Carrot></Carrot>
                </TouchableOpacity>
            </View>
            <WeekComp></WeekComp>
        </View>
    );    
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282829',
		width: '100%',
		padding: 20,
		borderRadius: 10,
        marginBottom: 10,

    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    exercise: {
        color: 'white',
        padding: 10,
        textAlign: 'center',
        width: 80,
    }
});
