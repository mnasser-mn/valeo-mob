import React from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';
import { Link } from 'react-router-native'

const Home = () => {



    return (<View style={{ padding: 10, display: 'flex' }}>

        <Text style={styles.header}>
            Home

        </Text>
        <Link to="/qr-scr" style={styles.btn}>
            <Text style={styles.btn_text}>
                go to second
            </Text>
        </Link>
    </View>)
}
export default Home;

export const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        width: '50%',
        textAlign: 'center',
        alignSelf: 'center',
        margin: 10
    },
    btn: {
        borderWidth: 1,
        backgroundColor: 'black',
        padding: 5,
        color: 'white',
        margin: 5
    },
    btn_text: { color: 'white', textAlign: 'center' }
})