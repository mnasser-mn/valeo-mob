import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-native'

import { styles } from '../components/home';
const QRScreen = () => {
    const counter = useSelector(state=>state.counter)
    return(
    <View style={{ padding: 10, display: 'flex' }}>

        <Text style={styles.header}>
            Second Screen
        </Text>
      <Text>Counter:{counter}</Text>

        <Link to="/" style={styles.btn}>
            <Text style={styles.btn_text}>
                go to home
            </Text>
        </Link>
        <Link style={styles.btn} to="/qr-scanner">
            <Text style={styles.btn_text}>
                open QR scanner
            </Text>
        </Link>
    </View>
)}

export default QRScreen;