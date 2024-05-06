import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet ,ImageBackground } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const navigation = useNavigation();
  const [country, setCountry] = useState({ cca2: 'IN', callingCode: '91' }); // default country
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const navigateToRegister =()=> 
  {
  navigation.navigate('Register');
  } 

  const handleCountrySelect = (country) => {
    setCountry(country);
  };

  // const handlePhoneNumberChange = (number) => {
  //   setPhoneNumber(number);
  // };

  // const handleSave = () => {
  //   // Handle saving the phone number with country code
  //   const fullPhoneNumber = `+${country.callingCode}${phoneNumber}`;
  // };
   
  const [selectedOption, setSelectedOption] = useState('email');
  const[secureTextEntry, setsecureTextEntry]=useState('true');

  const renderForm = () => {
    switch (selectedOption) {
      case 'email':
        return (
          <View>
            <Text style={{color:'black' ,marginBottom:10 , marginLeft:-25,fontSize:12}}>E-mail</Text>
            
            <TextInput style={styles.input} placeholder="Email" placeholderTextColor='#999'/>
            <Text style={{color:'black' , marginBottom:10 , marginLeft:-25, fontSize:12}}>Password</Text>
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} placeholderTextColor='#999' />
          </View>
        );
      case 'phoneNumber':
        return (
          //Country picker with country code for phone text input
          <View >
          <View style={{marginBottom:-15,marginLeft:-30}}>
          <CountryPicker
          countryCode={country.cca2}
          withFilter
          withFlag
          onSelect={handleCountrySelect}
          />
          </View>
           <Text style={{ marginLeft: 2 , color:'black',fontSize:12,marginTop:-9,}}>{`+${country.callingCode}`}</Text>
           <TextInput style={styles.input} placeholder="Phone Number"  placeholderTextColor='#999'
              onChangeText={(text) => {
              const numericValue = text.replace(/[^0-9]/g, '');
              setPhoneNumber(numericValue);
              }}
              keyboardType="numeric"
           />
            <Text style={{color:'black' , marginBottom:10 , marginLeft:-25,fontSize:12}}>Password</Text>
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true}  placeholderTextColor='#999'/>
          </View>
        );
      case 'username':
        return (
          <View>
            <Text style={{color:'black' , marginBottom:10 , marginLeft:-25,fontSize:12}}>Username</Text>
            <TextInput style={styles.input} placeholder="Username" placeholderTextColor='#999' />
            <Text style={{color:'black' , marginBottom:10 , marginLeft:-25,fontSize:12}}>Password</Text>
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true}  placeholderTextColor='#999'/>
          </View>
        );
      default:
        return null;
    }
  };

  return (

   
    <View style={styles.mainview}>
       <ImageBackground
            source={require('./imgs/solarLogin.jpg')}
            style={styles.background}
        >
            {/* Your content goes here */}
       
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => setSelectedOption('email')}>
          <Text style={[styles.optionText, selectedOption === 'email' && styles.selectedOption]}>E-mail</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedOption('phoneNumber')}>
          <Text style={[styles.optionText, selectedOption === 'phoneNumber' && styles.selectedOption]}>Phone Number</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedOption('username')}>
          <Text style={[styles.optionText, selectedOption === 'username' && styles.selectedOption]}>Username</Text>
        </TouchableOpacity>

         </View>
      {renderForm()}
     
    </View>
    <View style={styles.loginbtn}>
    <TouchableOpacity style={[styles.login]}>
          <Text style={{color:'white', margin:12 , marginLeft:150}}>Log In</Text>
        </TouchableOpacity>


    </View> 
    <TouchableOpacity onPress={navigateToRegister} >
           <Text style={{postion:'fixed',color:'black' }}>Register a new Account</Text> 
        </TouchableOpacity>
        </ImageBackground>
    </View>
   

  );
};

const styles = StyleSheet.create({
  mainview:{
    position:'fixed',
   flex:1,
   
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    justifyContent: 'center',
},
 
  container: {
    position:'fixed',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // top:'40%',
    margin:18,
    marginTop:138,
    marginBottom:68,
    elevation:2,
    borderRadius:10,
    backgroundColor:'white',
    Zindex:1,
  },
  header: {
    position:'fixed',
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft:-40,
    marginTop:-20,
  },
  optionText: {
    marginRight:20,
    fontSize: 14,
    color: 'gray',
    borderBottomWidth:2,
    borderColor: 'transparent',

  },

  selectedOption: {
    
    fontWeight: '400',
    color: 'black',
    fontSize:16,
    marginBottom:10,
    borderBottomWidth:2,
    borderColor:'black',
    paddingBottom:8,
  },

  input: {
    width: 300,
    height: 40,
    marginLeft:-30,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color:'black',
  
  },
  loginbtn:
  {
    position:'fixed',
  // justifyContent:'center',
  flex:1,
  flexDirection:'column',
  },
  login:{
    position:'fixed',
    backgroundColor:'blue',
    marginBottom:270,
    margin:20,
    marginTop:-6,
    height:50,
    borderRadius:10,
  }
});

export default Login;

