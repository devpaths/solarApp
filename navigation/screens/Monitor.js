import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, LayoutAnimation, UIManager } from 'react-native';
import { CurrentRenderContext, useNavigation } from '@react-navigation/native';
import CountryPicker from 'react-native-country-picker-modal';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../config/firebase.js';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import SqLite from 'react-native-sqlite-storage';
// Enable layout animation on Android
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const Monitor = () => {
  const [email , setEmail]=useState('');
  const [password , setPassword] = useState('');
  const [add,setAdd]=useState(null);
  const navigation = useNavigation();
  const [isEmailSelected, setEmailSelected] = useState(true);

  const handleAddButtonPress = () => {
    // Navigate to 'createAplant' screen when the button is pressed
    navigation.navigate('CreateAplant');
  };
  // to set coutrycode in textinput
  // const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState({ cca2: 'IN', callingCode: '91' });
  useEffect(() => {
    LayoutAnimation.easeInEaseOut();
  }, [isEmailSelected]);

  const handleSubmit = async ()=>{
     if(email && password){
      try{
      await createUserWithEmailAndPassword(auth , email , password);
      }catch(err){
         console.log('yeh error aaya hai :',err.message);
      }
     }
  }
  // const backtoLogin = () => {
  //   navigation.navigate('Login');
  // };
  const handleCountrySelect = (country) => {
    setCountry(country);
  };

  // const createTable=()=>{
  //   db.transaction((tx)=> {
  //           "CREATE TABLE IF NOT EXISTS"
  //           +"USERS"
  //           +"(ID INTEGER PRIMARY KEY AUTOINCREMENT , USERNAME TEXT , PASSWORD TEXT)"
  //   })
  // };

  // const setData=async()=> {
  //  await db.transaction(async(tx)=>{
  //    await tx.executeSql(
  //       "INSERT INTO USERS (USERNAME , PASSWORD) VALUES (?,?)"
  //       [USERNAME , PASSWORD]
  //     )
  //   })
  //   navigation.navigate('Overview');
  // }
  return (
    <View>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => setEmailSelected(true)} style={[styles.headerButton]} >
          <Text style={[ styles.headerText,isEmailSelected && styles.selectedOption ]}>Plants</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton} onPress={() => setEmailSelected(false)}>
          <Text style={[ styles.headerText,!isEmailSelected && styles.selectedOption ]}>Devices</Text>
        </TouchableOpacity>

      </View>
      <View>

        {isEmailSelected && (

          <>
          <TouchableOpacity style={styles.headerButton} onPress={handleAddButtonPress}>
           <Text style={{color:'black',marginTop:-100,marginLeft:320,fontSize:40,fontWeight:'400'}}>+</Text>
           </TouchableOpacity>
           
         </>


        )}

        {!isEmailSelected && (
          <>
          <TouchableOpacity style={styles.headerButton} >
                     <Text style={{color:'black',marginTop:-100,marginLeft:320,fontSize:40}}>=</Text>
                     </TouchableOpacity>

          </>

        )}

      </View>
    </View>
  )

  return {add};
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
   justifyContent:'center',
       alignItems:'center',
    marginBottom: 10,
    backgroundColor:'white',
    height:125,
  },
  headerButton: {
//    paddingVertical: 10,
    justifyContent:'center',
        alignItems:'center',
    paddingHorizontal:10,
    marginTop:-55,
  },
  input: {
    color: 'black',
    margin: 10,
    justifyContent:'center',
    alignItems:'center',
  },
  headerText:
  {
  padding:6,
  fontSize:18,
  color:'lightgray',


  },
  selectedOption:{
    fontWeight:'bold',
    color:'black',
    borderBottomWidth:2,
    padding:2,
    paddingBottom:4,
    fontSize:20,
    borderColor:'red',
    justifyContent:'center',
        alignItems:'center',
  }
});


export default Monitor

