// import React, { useCallback, useRef } from "react"
// import { View, Text, StyleSheet } from "react-native"
// import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet"
// import { useNavigation } from "@react-navigation/native"
// const CreateAplant = () => {
//   const navigation = useNavigation();
//   const bottomSheetRef = useRef(null)

//   // callbacks
//   const handleSheetChanges = useCallback(index => {
//     console.log("handleSheetChanges", index)
//   }, [])

//   // renders
//   return (
//     <View style={styles.container}>
//       <BottomSheet ref={bottomSheetRef} onChange={handleSheetChanges}>
//         <BottomSheetView style={styles.contentContainer}>
//           <Text>Awesome 🎉</Text>
//         </BottomSheetView>
//       </BottomSheet>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     backgroundColor: "grey"
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: "center"
//   }
// })

// export default CreateAplant;

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState, useRef, useMemo} from 'react';
import {createTables, addPlant, getPlants} from '../db/createdb.js';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import BottomSheetView from '@gorhom/bottom-sheet';

const CreateAplant = () => {
  const snapPoints = useMemo(() => ['25%', '50%', '100%'], []);
  const navigation = useNavigation();
  const handleClosePress = () => BottomSheetRef.current.close();
  const handleOpenPress = () => BottomSheetRef.current.close();
  const handlePress = () => {
    addPlant(plant, setPlants);
    navigation.navigate('MainContainer');
  };

  const [plant, setPlant] = useState('');
  const [plants, setPlants] = useState([]);

  const bottomSheetRef = useRef(null);

  useEffect(() => {
    createTables();
    getPlants(setPlants);
  }, []);

  const renderPlant = ({item}) => {
    return (
      <View style={{flexDirection: 'row', padding: 10}}>
        <Text style={{color: 'black'}}>{item.id}</Text>
        <Text style={{color: 'black'}}>{item.name}</Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <StatusBar backgroundColor={'#999'} />
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerbtn} onPress={handlePress}>
          <Text style={{color: 'black', fontSize: 18}}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.headertext}>Create a Plant</Text>
      </View>
      <ScrollView>
        <View style={styles.section1}>
          <Text
            style={{
              color: 'gray',
              marginLeft: 15,
              marginTop: 30,
              fontSize: 15,
            }}>
            Plant Name
          </Text>
          <TextInput
            value={plant}
            onChangeText={setPlant}
            style={[styles.input]}
            placeholderTextColor="#999"
            placeholder="Please enter the Plant Name"
          />
          <Text
            style={{
              color: 'gray',
              marginLeft: 15,
              marginTop: 30,
              fontSize: 15,
            }}>
            Location
          </Text>
          <TextInput
            style={[styles.input]}
            placeholderTextColor="#999"
            placeholder="Enter Your Location"
          />
          <Text
            style={{
              color: 'gray',
              marginLeft: 15,
              marginTop: 30,
              fontSize: 15,
            }}>
            Region
          </Text>
          <TextInput
            style={[styles.input]}
            placeholderTextColor="#999"
            placeholder="Enter Your Region"
          />
          <Text
            style={{
              color: 'gray',
              marginLeft: 15,
              marginTop: 30,
              fontSize: 15,
            }}>
            Address
          </Text>
          <TextInput
            style={[styles.input]}
            placeholderTextColor="#999"
            placeholder="Enter Your detailed Address"
          />
          <Text
            style={{
              color: 'gray',
              marginLeft: 15,
              marginTop: 30,
              fontSize: 15,
            }}>
            Capacity(kWp)
          </Text>
          <TextInput
            style={[styles.input]}
            placeholderTextColor="#999"
            placeholder="Enter the installed capacity"
          />
          {/* Other input fields */}
          <TouchableOpacity onPress={handlePress} style={styles.submit}>
            <Text
              style={{
                color: 'white',
                marginLeft: 128,
                marginTop: 10,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* <FlatList data={plants} renderItem={renderPlant} keyExtractor={item => item.id.toString()} /> */}
    </ScrollView>
  );
};

export default CreateAplant;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  headerbtn: {
    padding: 14,
  },
  headertext: {
    color: 'black',
    fontSize: 20,
    fontWeight: '900',
    marginTop: 13,
    marginLeft: 55,
  },
  section1: {
    marginLeft: 10,
    marginRight: 10,
    borderColor: 'gray',
    borderWidth: 0.6,
    borderRadius: 8,
    borderElevation: 6,
  },
  input: {
    marginLeft: 200,
    marginTop: -35,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.4,
    marginRight: 10,
    color: 'black',
  },
  submit: {
    marginTop: 30,
    marginBottom: 10,
    height: 50,
    marginLeft: 25,
    width: 320,
    backgroundColor: '#e3aab3',
  },
});

// import { StyleSheet, Text, View ,ScrollView,TouchableOpacity, TextInput ,StatusBar, FlatList} from 'react-native';
// import { CurrentRenderContext, useNavigation } from '@react-navigation/native';
// import React, { useEffect, useState } from 'react'
// import {openDatabase} from "react-native-sqlite-storage";

//  const db = openDatabase({
//   name:"rn_sqlite",
//  });
// const CreateAplant = () => {
//   const navigation = useNavigation();
//   const handlePress = () => {
//     // Navigate to 'createAplant' screen when the button is pressed
//     navigation.navigate('MainContainer');
//   };
//   const [plant,setPlant]= useState("");
//   const [Plants,setPlants] = useState([]);
//    //creating DB!
//    const createTables = () => {
//      db.transaction(txn=>{
//        txn.executeSql(
//        'CREATE TABLE IF NOT EXISTS Plants (id INTEGER PRIMARY KEY AUTOINCREMENT , name                                                                                                                                                                                                                                                                 VARCHAR(20))',
//        [],
//         (sqlTxn:SQLTransaction,res:SQLResultSet) =>{
//           console.log("table created!");
//         },

//         error =>{
//          console.log("error in table creation");
//         },

//        );
//      });
//     };
//    const addPlant = () => {
//     if(!plant)
//     {
//      alert('Plant Details toh dalde')
//      return false;
//     }
//     db.transaction(txn => {
//       txn.executeSql(
//         'INSERT INTO Plants (name) VALUES (?)',

//       [plant],
//       (sqlTxn:SQLTransaction,res:SQLResultSet)=>{
//         console.log('Plant added Successfully');
//         getPlant();
//       },

//       error=>{
//         console.log("Table me nhi daal paya ;-;"+error.message);
//       }
//      )

//     })
//     };
//    const getPlant = () => {
//     db.transaction(txn => {
//       txn.executeSql(
//         'SELECT * FROM Plants ORDER BY id ASC',
//         [],
//         (sqlTxn:SQLTransaction,res:SQLResultSet)=>{
//          console.log('Plants retrieved successfully');
//          let len=res.rows.length;

//          if(len>0)
//          {
//           let results = [];
//           for (let i=0;i<len;i++)
//           {
//             let item = res.rows.item(i);
//             results.push({id:item.id , name : item.name});
//           }
//           setPlants(results) ;
//          }

//         },

//         error => {
//           console.log("error aaya hai idhar"+error.message);
//         }
//       );
//     })
//     };

//    const renderPlant = ({item}) => {
//     return(
//       <View style={{flexDirection:'row',padding:10}}>
//        <Text style={{color:'black'}}>{item.id}</Text>
//        <Text style={{color:'black'}}>{item.name}</Text>
//       </View>
//     )
//    };
//    useEffect(async () => {
//     await createTables();
//     await  getPlant();
//    },[]);
//   return (

//     <View styles={{backgroundColor:'black'}}>
//       <StatusBar backgroundColor={"#999"}/>
//     <View style={styles.header}>
//      <TouchableOpacity style={styles.headerbtn} onPress={handlePress}><Text style={{color:'black',fontSize:18}}>Cancel</Text></TouchableOpacity>
//       <Text style={styles.headertext}>Create a Plant</Text>
//     </View>
//     <ScrollView>
//       <View style={styles.section1}>
//     <Text style={{color:'gray' , marginLeft:15,marginTop:30,fontSize:15}}>Plant Name</Text>
//         <TextInput
//         value={plant}
//         onChangeText={setPlant}
//         style={[styles.input]} placeholderTextColor='#999' placeholder="Please enter the Plant Name" />
//         <Text style={{color:'gray' , marginLeft:15,marginTop:30,fontSize:15}}>Location</Text>
//         <TextInput style={[styles.input]} placeholderTextColor='#999' placeholder="Please enter the location" />
//         <Text style={{color:'gray' , marginLeft:15,marginTop:30,fontSize:15}}>Region</Text>
//         <TextInput style={[styles.input]} placeholderTextColor='#999' placeholder="Please enter the Region" />
//         <Text style={{color:'gray' , marginLeft:15,marginTop:30,fontSize:15}}>Address</Text>
//         <TextInput style={[styles.input]} placeholderTextColor='#999' placeholder="Please enter the Address" />
//         <Text style={{color:'gray' , marginLeft:15,marginTop:30,fontSize:15}}>Capacity</Text>
//         <TextInput style={[styles.input]} placeholderTextColor='#999' placeholder="Please enter the Capacity" />
//         <Text style={{color:'gray' , marginLeft:15,marginTop:30,fontSize:15}}>System Type</Text>
//         <TextInput style={[styles.input]} placeholderTextColor='#999' placeholder="Please enter System Type" />
//         <Text style={{color:'gray' , marginLeft:15,marginTop:30,fontSize:15}}>Plant Type</Text>
//         <TextInput style={[styles.input]} placeholderTextColor='#999' placeholder="Please enter Plant Type" />
//         <TouchableOpacity onPress={addPlant} style={{backgroundColor:'black'}}><Text style={{color:'white'}}>Submit</Text></TouchableOpacity>

//         </View>

//         <View style={styles.section1}>
//     <Text style={{color:'gray' , marginLeft:15,marginTop:30,fontSize:15}}>Plant Name</Text>
//         <TextInput
//         value={plant}
//         onChangeText={setPlant}
//         style={[styles.input]} placeholderTextColor='#999' placeholder="Please enter the Plant Name" />
//         <Text style={{color:'gray' , marginLeft:15,marginTop:30,fontSize:15}}>Location</Text>
//         <TextInput style={[styles.input]} placeholderTextColor='#999' placeholder="Please enter the location" />
//         <Text style={{color:'gray' , marginLeft:15,marginTop:30,fontSize:15}}>Region</Text>
//         <TextInput style={[styles.input]} placeholderTextColor='#999' placeholder="Please enter the Region" />
//         <Text style={{color:'gray' , marginLeft:15,marginTop:30,fontSize:15}}>Address</Text>
//         <TextInput style={[styles.input]} placeholderTextColor='#999' placeholder="Please enter the Address" />
//         <Text style={{color:'gray' , marginLeft:15,marginTop:30,fontSize:15}}>Capacity</Text>
//         <TextInput style={[styles.input]} placeholderTextColor='#999' placeholder="Please enter the Capacity" />
//         <Text style={{color:'gray' , marginLeft:15,marginTop:30,fontSize:15}}>System Type</Text>
//         <TextInput style={[styles.input]} placeholderTextColor='#999' placeholder="Please enter System Type" />
//         <Text style={{color:'gray' , marginLeft:15,marginTop:30,fontSize:15}}>Plant Type</Text>
//         <TextInput style={[styles.input]} placeholderTextColor='#999' placeholder="Please enter Plant Type" />
//         <FlatList data={Plants} renderItem={renderPlant} key={cat => cat.id}/>
//         </View>
//     </ScrollView>

//     </View>
//   )
// }

// export default CreateAplant

// const styles = StyleSheet.create({

//   header:{
//    flexDirection:'row',

//   },
//   headerbtn:{
//    padding:14,
//   },
//   headertext:{
//     color:'black',
//     fontSize:20,
//     fontWeight:'900',
//     marginTop:13,
//     marginLeft:55,

//   },
//   section1:{
//     marginLeft:10,
//     marginRight:10,

//     borderColor:'gray',
//     borderWidth:0.6,
//     borderRadius:8,
//     borderElevation:6,
//   },
//   input:{
//     marginLeft:200,
//     marginTop:-35,
//     borderBottomColor:'gray',
//     borderBottomWidth:0.4,
//    marginRight:10,
//    color:'black',

//   },

// })
