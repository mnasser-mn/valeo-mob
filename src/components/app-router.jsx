import React from 'react';
import Home from './home';
import QRScanner from './qr-scanner';
import QRScreen from './qr-screen';
import { useDispatch } from 'react-redux';
import { addToCounter } from '../actions';
import { useEffect } from 'react';
import { getData, storeData,handleURL } from '../helpers';
import { useSelector } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter as Router, Route, Switch } from 'react-router-native'
import { StyleSheet, Text, View, Linking, AppState } from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  }
})

const AppRouter = () => {
    let [intialURL,setIntialURl] = useState('')
    let counter = useSelector(state => {
      if (state.counter != 0) {
        storeData(state.counter)
      }
      return state.counter
    })
    const dispatch = useDispatch()
  
    useEffect(() => {
      Linking.getInitialURL()
        .then((url) => {
            setIntialURl(url)
          Linking.addListener('url', ({ url }) => {
            const result = handleURL(url)
            if (result != null) { 
              dispatch(addToCounter(Number(result)))
            }
          })
        })
        .catch((err) => {
        })
      const getFromStorage = async () => {
        let data = await getData('counter')
        if (data) {
          dispatch(addToCounter(Number(data)))
        }
      }
      AppState.addEventListener('change', (state) => {
        if (state === "background" || state === "inactive") {
        }
      })
  
      getFromStorage()
  
    }, [])
  
  
    return <Router >
      <View style={styles.container}>
        <StatusBar hidden />
        <Route exact path="/" component={Home} />
        <Route path="/qr-scr" component={QRScreen} />
        <Route path="/qr-scanner" component={()=><QRScanner intialURL={intialURL}/>} />
      </View>
    </Router>
  }

  export default AppRouter;