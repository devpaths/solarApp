import React, {useState,useMemo} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const Me = () => {
  const [pressedIndex, setPressedIndex] = useState(null);
  const snapPoints = useMemo(()=> ['25%','50%','70%'],[]);
 const search='';
  const handlePress = (index) => {
    setPressedIndex(index);
    // Handle any other logic you want to perform when a TouchableOpacity is pressed
  };
  updateSearch = (search) => {
    this.setState({ search });
  };
  return (
   <>
        

  <View style={styles.header}>
  <Text style={styles.text}>Alert</Text>
<SearchBar
  placeholder="Please enter alert name"
  onChangeText={updateSearch}
  value={search}
  inputContainerStyle={styles.searchInputContainer}
  containerStyle={styles.searchContainer}
  inputStyle={styles.searchInput}
  placeholderTextColor="gray"
  placeholderTextSize
/>
      </View>
      <View style={styles.touchableContainer}>
        <TouchableOpacity
          style={[
            styles.touchableOpacity,
            pressedIndex === 0 && styles.pressed,
          ]}
          onPress={() => handlePress(0)}
        >
        <Text style={[styles.text1,pressedIndex == 0 && styles.textpress]}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.touchableOpacity,
            pressedIndex === 1 && styles.pressed,
          ]}
          onPress={() => handlePress(1)}
        >
         <Text style={[styles.text1,pressedIndex == 1 && styles.textpress]}>Open</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.touchableOpacity,
            pressedIndex === 2 && styles.pressed,
          ]}
          onPress={() => handlePress(2)}
        >
         <Text style={[styles.text1,pressedIndex == 2 && styles.textpress]}>Closed</Text>
        </TouchableOpacity>

        {/* Add more TouchableOpacity components as needed */}
      </View>
     <ScrollView>
     
      <Text style={{ textAlign: 'center', flex: 1, justifyContent: 'center', marginTop: 300 ,color:'gray'}}>
           No Alert
         </Text>
      </ScrollView>
      
      </>
  );
};

export default Me;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'lightgray',
  },
  header: {
    height: 180,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom:15,
  },
  touchableContainer: {
    alignItems: 'center',
  justifyContent:'center',
//    marginLeft: 10,
//    marginRight: 6,

    flexDirection: 'row',
    marginTop:20,
  },
  touchableOpacity: {
    backgroundColor: 'white',
    marginTop: -100,
    width: 133,
    height: 40,
    borderWidth: 0.6,
    borderBottomWidth:1,
    borderTopWidth:1,
    borderColor: 'lightgray',

  },
  pressed: {
    backgroundColor: 'rgba(225, 23, 46, 0.16)',
    borderWidth:1,
    borderLeftWidth:1,

    borderColor:'red',// Change to the desired pressed color
  },
  text1:
  {
  color:'gray',
  marginTop:8,
  textAlign:'center',
  },
  textpress:{
  color:'red',
  },  
  searchInputContainer: {
    backgroundColor: '#ebebeb',
    borderColor: 'lightgray',
    borderRadius:10,
    // fontSize:3,
    height:40,
  },
  searchContainer: {
    backgroundColor: 'white',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    marginLeft: 5,
    marginRight: 5,
    height:40,
    fontSize:7,
    width:385,
  },
  searchInput: {
    color: 'black',
    fontSize:14,
  },


});



//import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
//import React from 'react';
//
//const Me = () => {
//  return (
//
//      <ScrollView style={styles.scrollView}>
//       <View style={styles.header}>
//       <Text style={styles.text}>Alert</Text>
//       </View>
//
//
//      <View style={styles.touchableContainer}>
//        <TouchableOpacity style={styles.touchableOpacity} onPress={() => {}}>
//
//        </TouchableOpacity>
//
//        <TouchableOpacity style={styles.touchableOpacity} onPress={() => {}}>
//
//        </TouchableOpacity>
//        <TouchableOpacity style={styles.touchableOpacity} onPress={() => {}}>
//
//        </TouchableOpacity>
//
//        {/* Add more TouchableOpacity components as needed */}
//      </View>
//
//      <Text style={{textAlign:'center',flex:1,justifyContent:'center',marginTop:300}}>No ALert</Text>
//      </ScrollView>
//  );
//}
//
//export default Me;
//
//const styles = StyleSheet.create({
//  // container: {
//
//  //   backgroundColor: 'white',
//  //   justifyContent: 'center',
//  //   alignItems: 'center',
//  // },
//
//  scrollView: {
//
//
//    backgroundColor: 'lightgray', // Color at the top 20% section
//
//  },
//  header:{
//    height:150,
//    backgroundColor:'white',
//  },
//  text: {
//    fontSize: 20,
//    textAlign: 'center',
//    marginTop: 20,
//    fontWeight:'bold',
//    color:'black', // Adjust this margin as needed
//  },
//  touchableContainer: {
//    // flex: 0.2, // 20% of the container's height
//    // justifyContent: 'space-around',
//    alignItems: 'center',
//    marginLeft:8,
//    marginRight:9,
//    flexDirection: 'row',
//
//  },
//  touchableOpacity: {
//    backgroundColor: 'white', // Example color, change it as needed
//    // padding: 10,
//   marginTop:-50,
//
//    width:131,
//    height:40,
//    borderWidth:0.6,
//    borderColor:'lightgray',
//  },
//});
