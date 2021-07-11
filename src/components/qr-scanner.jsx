import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Linking } from 'react-native';


import { BarCodeScanner } from 'expo-barcode-scanner';
import { Link, useHistory } from 'react-router-native';

export default function QRScanner({intialURL}) {
  console.log(intialURL)
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const history = useHistory()
  const handleBackToSecondScreen = () => {
    history.goBack()
  }
  const handleBarCodeScanned = ({ type, data }) => {
    if (type === BarCodeScanner.Constants.BarCodeType.qr) {
      if (validURL(data)) {
        Linking.openURL(`${data}?url=${intialURL}`)
        

      }
      else {
        alert('please scan a valid URL')
      }

    }
    else {
      alert('only QR is supported')
    }
    setScanned(true);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  return (
    <View style={styles.container}>
      <Button
        title={'Tap to return to second screen'}
        onPress={() => handleBackToSecondScreen()}
        color="black"
      />
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.scanner}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} color="black" />}

    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    justifyContent: 'space-around',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'black',
    height: '100%',
    display: 'flex'
  },
  scanner: {
    flexGrow: 1,
  }
});

function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(str);
}

