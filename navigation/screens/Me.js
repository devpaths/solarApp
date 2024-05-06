import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

const Me = () => {
  return (
    
      <ScrollView style={styles.scrollView}>
       <View style={styles.header}>
       <Text style={styles.text}>Bikramjeet Singh  > </Text>
       </View>
        
      
      <View style={styles.touchableContainer}>
        <TouchableOpacity style={styles.touchableOpacity2} onPress={() => {/* handle onPress */}}>
          <Text style={styles.btntxt}>HbeonLabs Technology Pvt Ltd</Text>
        </TouchableOpacity>
        <View style={{height:150,marginTop:10,marginBottom:10,backgroundColor:'white',width:380}}>
         
        </View>
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => {/* handle onPress */}}>
      <Text style={styles.btntxt}>Account and Security</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => {/* handle onPress */}}>
         <Text style={styles.btntxt}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => {/* handle onPress */}}>
        <Text style={styles.btntxt}>Preference</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => {/* handle onPress */}}>
          <Text style={styles.btntxt}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity3} onPress={() => {/* handle onPress */}}>
          <Text style={styles.btntxt}>About SOLARAPP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity4} onPress={() => {/* handle onPress */}}>
         <Text style={{textAlign:'center',marginTop:15,fontWeight:'bold',fontSize:20,color:'tomato'}}>Log Out</Text>
         </TouchableOpacity>
        {/* Add more TouchableOpacity components as needed */}
      </View>
      </ScrollView>
    
  );
}

export default Me;

const styles = StyleSheet.create({
  // container: {
    
  //   backgroundColor: 'white',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
 
  scrollView: {
   
    
    backgroundColor: 'lightgray', // Color at the top 20% section
   
  },
  header:{
    height:170,
    backgroundColor:'red',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    fontWeight:'bold',
    color:'white', // Adjust this margin as needed
  },
  touchableContainer: {
    // flex: 0.2, // 20% of the container's height
    // justifyContent: 'space-around',
    alignItems: 'center',
    
    flexDirection: 'column',
   
  },
  touchableOpacity: {
    backgroundColor: 'white', // Example color, change it as needed
    // padding: 10,
    marginBottom:2,
    width:380,
    height:60,
  },
  touchableOpacity2:{
    backgroundColor: 'white', // Example color, change it as needed
    // padding: 10,
   marginTop:-30,
    width:380,
    height:70,
  },
    touchableOpacity3: {
      backgroundColor: 'white', // Example color, change it as needed
      // padding: 10,
      marginTop:20,marginBottom:10,
      width:380,
      height:60,
    },  touchableOpacity4: {
          backgroundColor: 'white', // Example color, change it as needed
          // padding: 10,
          marginTop:10,marginBottom:10,
          width:380,
          height:60,
        },
btntxt:{
color:'gray',
fontSize:15,
marginLeft:20,
marginTop:15,
},

});
