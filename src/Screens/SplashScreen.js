import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Agreement');
    }, 2000);
  }, []);

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ImageBackground
        source={require('../imgs/solarLogin.jpg')}
        style={styles.background}
      />
      <Text style={{fontSize: 36}}>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
