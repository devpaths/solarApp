import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react';


const SplashScreen = ({navigation}) => {
 useEffect (()=> {
 setTimeout(()=>{
 navigation.navigate('Agreement');
 },2000)
 },[])


  return (
    <View style={{backgroundColor:"black",flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text style={{fontSize:36}}>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})