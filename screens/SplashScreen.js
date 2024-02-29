import { StyleSheet, Text,Image, View } from 'react-native';
import React, { useEffect } from 'react';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('HomeScreen'); 
    }, 2500);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>

       <Image
        source={require('./../images/splash1.jpg')} 
        style={styles.image}
      />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  image: {
    width: 400, 
    height:'60%',
    top:-30,
  },
});
