import { StyleSheet } from 'react-native';

const color = {
    // primary: '#292929',
    primary: '#161618',
    secondary: 'black',
    black: '#4B9CD3',
    gray: 'gray',
    white: 'white',
    green: '#4b9c1c',
    yellow: '#ffc800',
    red: '#ff1414',
}

// const color = {
//     primary: '#4B9CD3',
//     secondary: 'black',
//     black: 'black',
//     gray: '#161618',
//     white: 'white',
//     green: '#4b9c1c',
//     yellow: '#ffc800',
//     red: '#ff1414',
// }

const size = {
    padding: 20,
    margin: 10,
}

const text = {
    paragraph: 13.5,
    title: 20,
    titleWeight: 'bold',
}

const tab = {
    color: color.primary,
    active: "white",
    inactive: 'gray',
}

const theme = StyleSheet.create({
    title: {
        // padding: size.padding / 4,
        fontSize: text.title,
        fontWeight: text.titleWeight,
    },
    text: {
        color: color.white,
        fontSize: text.paragraph,
    }
})

export { theme, color, size, text, tab };