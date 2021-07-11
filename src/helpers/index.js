import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('counter', JSON.stringify(value))
    } catch (e) {
      
    }
  }

  
export const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('counter')
      if(value !== null) {
        return JSON.parse(value)
      }
    } catch(e) {
    }
    return null
  }
  export const handleURL = (url) => {
    if (url) {

      if (url.split('?')[1]) {
        const query = url.split('?')[1].split("=")
        if (query[0] == "counter") {
          return query[1]
        }
      }
    }
    return null
  }