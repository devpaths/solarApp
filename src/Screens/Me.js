// import { StyleSheet, Text, View, ScrollView } from 'react-native';
// import React from 'react';
// import MeButton from '../Components/MeButton';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// const Me = () => {
//   return (
//     <ScrollView style={styles.scrollView}>
//       <View style={styles.header}>
//         <Text style={styles.text}>Bikramjeet Singh   </Text>
//       </View>

//       <View style={styles.touchableContainer}>
//       <MeButton onPress={() => {/* handle onPress */}} text="HbeonLabs Technology Pvt Ltd"  style={{ height: 70 , marginTop:-40 }}/>
//         <View style={{ height: 150, marginTop: 10, marginBottom: 10, backgroundColor: 'white', width: 380 }} />
//         <MeButton onPress={() => {/* handle onPress */}} text="Account and Security" />
//         <MeButton onPress={() => {/* handle onPress */}} text="Language" />
//         <MeButton onPress={() => {/* handle onPress */}} text="Preference" />
//         <MeButton onPress={() => {/* handle onPress */}} text="Privacy Policy" />
//         <MeButton onPress={() => {/* handle onPress */}} text="About SOLARAPP" style={{ marginTop: 20, marginBottom: 10 }} />
//         <MeButton onPress={() => {/* handle onPress */}} text="Log Out" textColor="tomato" style={{ marginTop: 10, marginBottom: 10 ,fontWeight:'600' }} />
//         {/* Add more MeButton components as needed */}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: 'lightgray',
//   },
//   header: {
//     height: 170,
//     backgroundColor: 'red',
//   },
//   text: {
//     fontSize: 20,
//     textAlign: 'center',
//     marginTop: 30,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   touchableContainer: {
//     alignItems: 'center',
//     flexDirection: 'column',
//   },
// });

// export default Me;



import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
const Me = () => {
  
  
  const navigation = useNavigation();
  const handleLogout =  async() => {
    await signOut(auth);
  }

  return (

    <ScrollView style={styles.scrollView}>
      <View style={styles.header}>
        <Text style={styles.text}>HbeonLabs  </Text>
        <Ionicons name={'chevron-forward'} size={18} color="white" marginLeft={280} marginTop={-23} />
      </View>


      <View style={styles.touchableContainer}>
        <TouchableOpacity style={styles.touchableOpacity2} onPress={() => {/* handle onPress */ }}>

          <Text style={{
            color: 'gray',
            fontSize: 15,
            marginLeft: 20,
            marginTop: 20,
          }}>HbeonLabs Technology Pvt Ltd</Text>
        </TouchableOpacity>
        <View style={{ height: 150, marginTop: 10, marginBottom: 10, backgroundColor: 'white', width: 380 }}>
          <Text style={{ color: 'gray', marginLeft: 12, marginTop: 10 }}>Applications</Text>
        </View>
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => {/* handle onPress */ }}>
          <Ionicons name={'shield-checkmark-outline'} size={18} color="tomato" marginTop={18} marginHorizontal={10} />
          <Text style={styles.btntxt}>Account and Security</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => {/* handle onPress */ }}>
          <Ionicons name={'document-text-outline'} size={18} color="tomato" marginTop={18} marginHorizontal={10} />
          <Text style={styles.btntxt}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => {/* handle onPress */ }}>
          <Ionicons name={'options-outline'} size={18} color="tomato" marginTop={18} marginHorizontal={10} />
          <Text style={styles.btntxt}>Preference</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => {/* handle onPress */ }}>
          <Ionicons name={'lock-closed-outline'} size={18} color="tomato" marginTop={18} marginHorizontal={10} />
          <Text style={styles.btntxt}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity3} onPress={() => {/* handle onPress */ }}>
          <Ionicons name={'reader-outline'} size={18} color="tomato" marginTop={18} marginHorizontal={10} />
          <Text style={styles.btntxt}>About SOLARAPP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity4} onPress={ handleLogout }>
          <Text style={{ textAlign: 'center', marginTop: 15, fontWeight: 'bold', fontSize: 20, color: 'tomato' }}>Log Out</Text>
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
  header: {
    height: 170,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    fontWeight: 'bold',
    color: 'white', // Adjust this margin as needed
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
    marginBottom: 2,
    width: 380,
    height: 60,
  },
  touchableOpacity2: {
    backgroundColor: 'white', // Example color, change it as needed
    // padding: 10,
    marginTop: -30,
    width: 380,
    height: 70,
  },
  touchableOpacity3: {
    backgroundColor: 'white', // Example color, change it as needed
    // padding: 10,
    marginTop: 20, marginBottom: 10,
    width: 380,
    height: 60,
  }, touchableOpacity4: {
    backgroundColor: 'white', // Example color, change it as needed
    // padding: 10,
    marginTop: 10, marginBottom: 10,
    width: 380,
    height: 60,
  },
  btntxt: {
    color: 'gray',
    fontSize: 15,
    marginLeft: 38,
    marginTop: -20,
  },

});
