import { StyleSheet, Text, View, ScrollView , TouchableOpacity } from 'react-native';
import React from 'react';
import { CurrentRenderContext, useNavigation } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';
import MeButton from '../Components/MeButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Overview = () => {
  const navigation = useNavigation();
  updateSearch = (search) => {
    this.setState({ search });
  };
  const handleAddButtonPress = () => {
    // Navigate to 'createAplant' screen when the button is pressed
    navigation.navigate('CreateAplant');
  };
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.header}>
        <Text style={styles.text}>Overview </Text>
        <TouchableOpacity style={styles.headerButton} onPress={handleAddButtonPress}>
           <Text style={{color:'black',marginTop:-40,marginLeft:355,fontSize:35,fontWeight:'400'}}>+</Text>
           </TouchableOpacity>
           <SearchBar
  placeholder="Search"
  onChangeText={updateSearch}
  inputContainerStyle={styles.searchInputContainer}
  containerStyle={styles.searchContainer}
  inputStyle={styles.searchInput}
  placeholderTextColor="gray"
  placeholderTextSize
/>
      </View>
      <View style={styles.watchlist}>
      <TouchableOpacity style={{}}>
        <Text style={{color:'black',marginLeft:50, justifyContent:'center',marginTop:25 , fontSize:16}}>
         My Watchlist
        </Text>
      </TouchableOpacity>
      </View>
      <View style={styles.totalplants}>
        <Text style={{color:'gray',marginLeft:12, justifyContent:'center',marginTop:10 ,fontWeight:'bold', fontSize:15}}>
         Total Plants
        </Text>
        <View style={styles.tpcontainer}>
    <TouchableOpacity style={[styles.totalplant1]}><Text style={{color:'gray', fontSize:12,marginTop:10,marginLeft:10}}>Incomplete Plants</Text></TouchableOpacity>
    <TouchableOpacity style={styles.totalplant2}><Text style={{color:'gray', fontSize:12,marginTop:10,marginLeft:10}}>All Devices Offline</Text></TouchableOpacity>
    </View>
    <View style={styles.tpcontainer}>
    <TouchableOpacity style={[styles.totalplant3]}><Text style={{color:'gray', fontSize:12,marginTop:10,marginLeft:10}}>Some devices offline</Text></TouchableOpacity>
    <TouchableOpacity style={styles.totalplant4}><Text style={{color:'gray', fontSize:12,marginTop:10,marginLeft:10}}>Alerts</Text></TouchableOpacity>
    </View>
      </View>


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'lightgray',
  },
  header: {
    height: 105,
    backgroundColor: 'white',
  },
  watchlist:{
    marginTop:8,
    marginHorizontal:6,
    borderRadius:4,
    height: 78,
    backgroundColor: 'white',
  },
  totalplants:{
    marginTop:8,
    marginHorizontal:6,
    borderRadius:4,
    height: 205,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
    fontWeight: '800',
    color: 'black',
  },
  touchableContainer: {
    alignItems: 'center',
    flexDirection: 'column',
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
  tpcontainer:{
   flexDirection:'row',
   alignContent:'center',
   justifyContent:'center',
   marginTop:25,
  },
  totalplant1:{
   width:170,
   height:57,
   backgroundColor:'#dcf5fc',
   marginTop:-10,
   marginHorizontal:8,
   borderRadius:5,
  },
  totalplant2:{
    width:170,
    height:57,
    backgroundColor:'#fce4dc',
    marginTop:-10,
    marginHorizontal:8,
    borderRadius:5,
   },
   totalplant3:{
    width:170,
    height:57,
    backgroundColor:'#fcf3dc',
    marginTop:-10,
    marginHorizontal:8,
    borderRadius:5,
   },
   totalplant4:{
    width:170,
    height:57,
    backgroundColor:'#f0d1d1',
    marginTop:-10,
    marginHorizontal:8,
    borderRadius:5,
   },
});

export default Overview;
