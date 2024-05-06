import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, LayoutAnimation, UIManager } from 'react-native';
import { CurrentRenderContext, useNavigation } from '@react-navigation/native';
import CountryPicker from 'react-native-country-picker-modal';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import SqLite from 'react-native-sqlite-storage';
// Enable layout animation on Android
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}



const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');





  const navigation = useNavigation();
  const [isEmailSelected, setEmailSelected] = useState(true);
  // to set coutrycode in textinput
  // const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState({ cca2: 'IN', callingCode: '91' });
  useEffect(() => {
    LayoutAnimation.easeInEaseOut();
  }, [isEmailSelected]);

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.log('yeh error aaya hai :', err.message);
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
      <Text style={{ backgroundColor: 'blue', color: 'white', paddingHorizontal: 155, paddingTop: 10, paddingBottom: 15, fontWeight: '600', fontSize: 19, }}>Register</Text>
      <View style={styles.header}>

        <TouchableOpacity onPress={() => setEmailSelected(true)} style={[styles.headerButton]} >
          <Text style={[styles.headerText, isEmailSelected && styles.selectedOption]}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton} onPress={() => setEmailSelected(false)}>
          <Text style={[styles.headerText, !isEmailSelected && styles.selectedOption]}>Phone Number</Text>
        </TouchableOpacity>
      </View>
      <View>
        {isEmailSelected && (
          <>
            <Text style={{ color: 'black', marginLeft: 15, marginTop: 20, marginBottom: -8, fontSize: 12 }}>Registration Region</Text>
            <View style={{ marginTop: 18, marginLeft: -25, }}>
              <CountryPicker
                countryCode={country.cca2}
                withFilter
                withCloseButton
                withCountryNameButton
                onSelect={handleCountrySelect}
              />
            </View>
            <Text style={{ color: 'black', marginLeft: 15, marginTop: 20, marginBottom: -8, fontSize: 12 }}>E-mail</Text>
            <TextInput style={[styles.input]} value={email} onChangeText={value => setEmail(value)} placeholderTextColor='#999' placeholder="Please enter email address" />
          </>
        )}

        {!isEmailSelected && (
          <><Text style={{ color: 'black', marginLeft: 15, marginTop: 20, marginBottom: -8, fontSize: 12 }}>Registration Region</Text>
            <View style={{ marginTop: 20, marginLeft: -25, }}>
              <CountryPicker
                countryCode={country.cca2}
                withFilter
                withCloseButton
                withCountryNameButton
                onSelect={handleCountrySelect}

              />
            </View>
            <Text style={{ marginLeft: 2, color: 'black', fontSize: 12, marginLeft: 38, marginTop: 15, marginBottom: -60 }}>{`+${country.callingCode}`}</Text>
            <View style={{ marginLeft: 10, marginTop: 35, }}>

              <CountryPicker
                countryCode={country.cca2}
                withFilter
                withFlag
                onSelect={handleCountrySelect}

              />
            </View>
            <TextInput style={{
              color: 'black',
              margin: 10, marginTop: 0,
            }} placeholder="Phone Number" placeholderTextColor='#999' />
          </>

        )}
        <Text style={{ color: 'black', marginLeft: 15, marginTop: 20, marginBottom: -8, fontSize: 12 }}>Verification Code</Text>
        <TextInput style={[styles.input]} placeholderTextColor='#999' placeholder="Verification Code" />
        <Text style={{ color: 'black', marginLeft: 15, marginTop: 20, marginBottom: -8, fontSize: 12 }}>Password</Text>
        <TextInput style={[styles.input]} value={password} onChangeText={value => setPassword(value)} placeholder="Please enter password" placeholderTextColor='#999' secureTextEntry />
        <TouchableOpacity style={[styles.donebtn]} onPress={handleSubmit}>
          <Text>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    backgroundColor: 'blue',
  },
  headerButton: {
    paddingVertical: 10,
  },
  input: {
    color: 'black',
    margin: 10,
  },
  donebtn: {
    backgroundColor: 'blue',
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText:
  {
    padding: 8,


  },
  selectedOption: {
    fontWeight: 'bold',
    color: 'white',
    borderBottomWidth: 1.4,
    padding: 8,
    paddingBottom: 12,
    fontSize: 17,
    borderColor: 'white',
  }
});

export default Register;
