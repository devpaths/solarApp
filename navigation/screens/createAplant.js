import { StyleSheet, Text, View ,TouchableOpacity, TextInput ,StatusBar} from 'react-native';
import { CurrentRenderContext, useNavigation } from '@react-navigation/native';
import React from 'react'

const CreateAplant = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    // Navigate to 'createAplant' screen when the button is pressed
    navigation.navigate('MainContainer');
  };
  return (

    <View styles={{backgroundColor:'black'}}>
     <StatusBar style={{backgroundColor:"white"}}/>
    <View style={styles.header}>
     <TouchableOpacity style={styles.headerbtn} onPress={handlePress}><Text style={{fontSize:18}}>Cancel</Text></TouchableOpacity>
      <Text style={styles.headertext}>Create a Plant</Text>
    </View>
    <View style={styles.section1}>
    <Text style={{color:'gray' , marginLeft:15,marginTop:30,fontSize:15}}>Plant Name</Text>
        <TextInput style={[styles.input]} placeholderTextColor='#999' placeholder="Please enter the Plant Name" />
        <Text style={{color:'gray' , marginLeft:15,marginTop:30,fontSize:15}}>Location</Text>

        <TextInput style={[styles.input]} placeholderTextColor='#999' placeholder="Please enter the location" />
        <Text style={{color:'gray' , marginLeft:15,marginTop:30,fontSize:15}}>Region</Text>
        <TextInput style={[styles.input]} placeholderTextColor='#999' placeholder="Please enter the Region" />
        <Text style={{color:'gray' , marginLeft:15,marginTop:30,fontSize:15}}>Address</Text>
        <TextInput style={[styles.input]} placeholderTextColor='#999' placeholder="Please enter the Address" />
        <Text style={{color:'gray' , marginLeft:15,marginTop:30,fontSize:15}}>Capacity</Text>
        <TextInput style={[styles.input]} placeholderTextColor='#999' placeholder="Please enter the Capacity" />
        <Text style={{color:'gray' , marginLeft:15,marginTop:30,fontSize:15}}>System Type</Text>
        <TextInput style={[styles.input]} placeholderTextColor='#999' placeholder="Please enter System Type" />
        <Text style={{color:'gray' , marginLeft:15,marginTop:30,fontSize:15}}>Plant Type</Text>
        <TextInput style={[styles.input]} placeholderTextColor='#999' placeholder="Please enter Plant Type" />
        
    </View>
    </View>
  )
}

export default CreateAplant

const styles = StyleSheet.create({
  
  header:{
   flexDirection:'row',
  
  },
  headerbtn:{
   padding:14,
  },
  headertext:{
    
    fontSize:20,
    fontWeight:'900',
    marginTop:13,
    marginLeft:55,

  },
  section1:{

    marginLeft:5,
    marginRight:10,
    borderColor:'gray',
    borderWidth:0.6,
    borderRadius:8,
    borderElevation:6,
  },
  input:{
    marginLeft:200,
    marginTop:-35,
    borderBottomColor:'gray',
    borderBottomWidth:0.4,
   marginRight:10,

  },


})