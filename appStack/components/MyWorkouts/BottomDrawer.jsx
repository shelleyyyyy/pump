import { StyleSheet, Text, View, Dimensions, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreateDay from './CreateDay';
import CreateWorkout from './CreateWorkout';

export default function BottomDrawer({title, setEdit}) {
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => setEdit(false)} style={{marginLeft: 15}}>
            <Ionicons style={{}} name={"chevron-down-outline"} size={30} color={"white"} />
        </TouchableOpacity>
        <ScrollView style={{width: '100%'}}>
            <View style={{alignItems: 'center', width: '100%'}}>
                <CreateWorkout></CreateWorkout>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: windowHeight,
    left: 0, 
    top: 0, 
    width: windowWidth,
    backgroundColor: 'white',
    backgroundColor: '#282928',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // alignContent: 'center',
    // justifyContent: 'center',
    alignItems: 'left',
    padding: 5,
  },
});
