import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Dialog, { DialogTitle, DialogContent, DialogFooter, DialogButton } from 'react-native-popup-dialog';

const Agreement = () => {
  const navigation = useNavigation();
  const [showDialog, setShowDialog] = useState(false);

  const handleDisagree = () => {
    setShowDialog(true);
  };

  const handleAgree = () => {
    setShowDialog(false);
    navigation.navigate('Login');

  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <View>
      <ScrollView>
        <Text style={styles.baseText}>Service Agreement and Privacy Policy</Text>
        <Text style={styles.innerText}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo quam, volutpat vel lorem tincidunt, iaculis sagittis lorem. Nullam efficitur congue pharetra. Fusce non varius purus, vitae congue leo. Curabitur fermentum rhoncus efficitur. Nullam convallis facilisis velit. Nullam urna mauris, hendrerit vel turpis eget, faucibus placerat tellus. In sed est diam. Curabitur odio arcu, euismod sit amet ultrices bibendum, blandit eu ipsum.

         Ut ut nisl ac risus dictum pellentesque vel non nibh.  Vivamus nisi dolor, consequat ut nunc porta, viverra vestibulum neque. Duis vestibulum, sapien mollis consequat pellentesque, turpis turpis varius urna, vel mollis velit nibh aliquam ex. Donec rutrum, justo non fringilla interdum, nisi metus mollis arcu, pulvinar luctus eros massa non quam. Praesent auctor, magna sit amet tincidunt volutpat, urna lectus mattis diam, vel finibus odio mi sit amet ante. Proin bibendum diam eget dignissim consequat. Curabitur in feugiat erat,


         {'\n'}
         {'\n'}
         Etiam lacinia, lectus quis iaculis volutpat, lacus augue sagittis ligula, . Ut auctor risus sed velit consequat, in lacinia elit vehicula. Phasellus lobortis nisi nec mauris malesuada porta. Vestibulum non diam at justo molestie faucibus sit amet at est. In tempor ante at enim pretium commodo. Vestibulum scelerisque tellus et mi venenatis, eu tristique nunc venenatis. Fusce eleifend dictum orci, et pulvinar lacus congue in. Suspendisse scelerisque neque in dolor imperdiet vehicula. Praesent sagittis pulvinar consectetur. In hendrerit dignissim lorem, eu efficitur nisl accumsan et. Ut posuere enim vitae sapien efficitur, at blandit mauris tincidunt.

         Donec sodales rhoncus risus, id vestibulum elit accumsan ut. Ut mi felis, pellentesque id blandit eu, efficitur ac lectus. Suspendisse ut enim ut nunc suscipit commodo non id arcu. Mauris ac leo id nisl dapibus mattis. Donec quis iaculis tellus. Maecenas et ante molestie, scelerisque felis eget, molestie ex. Cras varius dui eget nisi condimentum, id eleifend est porttitor. Donec a rutrum quam.

        </Text>
        <TouchableOpacity style={styles.button} onPress={handleAgree}>
          <Text style={styles.touchabletext}>Agree and Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handleDisagree}>
          <Text style={styles.touchabletext2}>I do not agree</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Popup Dialog */}
      <Dialog
        visible={showDialog}
        onTouchOutside={handleCloseDialog}

        footer={
          <DialogFooter>
           <TouchableOpacity style={styles.button3} onPress={handleCloseDialog}>
                    <Text style={styles.touchabletext3}>Still Disagree</Text>
                  </TouchableOpacity>
                   <TouchableOpacity style={styles.button3} onPress={handleAgree} >
                            <Text style={styles.touchabletext4}>Agree and Continue</Text>
                          </TouchableOpacity>

          </DialogFooter>
        }>
          <DialogContent style={{}}>
          <Text style={{margin:10,fontSize:17,marginTop:20,fontWeight:'700',color:'black',}}>You need to agree to the T&Cs and {'\n'}privacy policy to continue using {'\n'}SOLARAPP</Text>
          <Text style={{color:'black',margin:10 , marginBottom:5,}}>If you do not agree withService{'\n'}Agreement and Privacy Policy, unfortunately{'\n'}we will not be able to serve you</Text>
          </DialogContent>
      </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({
   baseText: {
       fontWeight: '800',
       fontSize: 26,
       color:'black',
       margin:35,
       marginTop:50,
       marginLeft:20,

     },
     innerText: {
       color: 'gray',
       margin:15,
       marginTop:0,
       marginBottom:0,
     },

     button:
     {
     marginTop:70,
     backgroundColor:'red',
     margin:25,
     height:45,
     wdith:120,
     borderRadius: 10,
     },

     touchabletext:
     {
       fontSize: 16,
       margin:12,
       marginLeft:95,
       fontWeight:'bold',
       color:'white',
     },

     touchabletext2:
     {
       fontSize: 16,
       marginBottom:10,
       marginLeft:140,

       color:'gray',
     },
    touchabletext3: {
         fontSize: 16,
          margin:10,
          marginLeft:18,
          marginBottom:15,
          fontWeight:'600',
    // Adjusted to center the text
         color: 'gray',
    },
      touchabletext4: {
        fontSize: 16,
        margin:10,
        fontWeight:'600',
        marginLeft:50,
        // Adjusted to center the text
        color: 'red',
      },
});

export default Agreement;




// import { StyleSheet, Text, View ,ScrollView , TouchableOpacity } from 'react-native'
// import React from 'react';
// import { useNavigation } from '@react-navigation/native';

// const Agreement = () => {
//   const navigation = useNavigation();
//   return (
//     <View>
//     <ScrollView>
//     <Text style={styles.baseText}>Service Agreement and Privacy Policy</Text>
//       <Text style={styles.innerText}>

//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo quam, volutpat vel lorem tincidunt, iaculis sagittis lorem. Nullam efficitur congue pharetra. Fusce non varius purus, vitae congue leo. Curabitur fermentum rhoncus efficitur. Nullam convallis facilisis velit. Nullam urna mauris, hendrerit vel turpis eget, faucibus placerat tellus. In sed est diam. Curabitur odio arcu, euismod sit amet ultrices bibendum, blandit eu ipsum.
//
// Ut ut nisl ac risus dictum pellentesque vel non nibh.  Vivamus nisi dolor, consequat ut nunc porta, viverra vestibulum neque. Duis vestibulum, sapien mollis consequat pellentesque, turpis turpis varius urna, vel mollis velit nibh aliquam ex. Donec rutrum, justo non fringilla interdum, nisi metus mollis arcu, pulvinar luctus eros massa non quam. Praesent auctor, magna sit amet tincidunt volutpat, urna lectus mattis diam, vel finibus odio mi sit amet ante. Proin bibendum diam eget dignissim consequat. Curabitur in feugiat erat,
//
//
// {'\n'}
// {'\n'}
// Etiam lacinia, lectus quis iaculis volutpat, lacus augue sagittis ligula, . Ut auctor risus sed velit consequat, in lacinia elit vehicula. Phasellus lobortis nisi nec mauris malesuada porta. Vestibulum non diam at justo molestie faucibus sit amet at est. In tempor ante at enim pretium commodo. Vestibulum scelerisque tellus et mi venenatis, eu tristique nunc venenatis. Fusce eleifend dictum orci, et pulvinar lacus congue in. Suspendisse scelerisque neque in dolor imperdiet vehicula. Praesent sagittis pulvinar consectetur. In hendrerit dignissim lorem, eu efficitur nisl accumsan et. Ut posuere enim vitae sapien efficitur, at blandit mauris tincidunt.
//
// Donec sodales rhoncus risus, id vestibulum elit accumsan ut. Ut mi felis, pellentesque id blandit eu, efficitur ac lectus. Suspendisse ut enim ut nunc suscipit commodo non id arcu. Mauris ac leo id nisl dapibus mattis. Donec quis iaculis tellus. Maecenas et ante molestie, scelerisque felis eget, molestie ex. Cras varius dui eget nisi condimentum, id eleifend est porttitor. Donec a rutrum quam.

// </Text>
// <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Login')}><Text style={styles.touchabletext}>Agree and Continue</Text></TouchableOpacity>
// <TouchableOpacity style={styles.button2}><Text style={styles.touchabletext2}>I do not agree</Text></TouchableOpacity>
// </ScrollView>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   baseText: {
//     fontWeight: '800',
//     fontSize: 26,
//     color:'black',
//     margin:35,
//     marginTop:50,
//     marginLeft:20,
//
//   },
//   innerText: {
//     color: 'gray',
//     margin:15,
//     marginTop:0,
//     marginBottom:0,
//   },
//
//   button:
//   {
//   marginTop:70,
//   backgroundColor:'red',
//   margin:25,
//   height:45,
//   wdith:120,
//   borderRadius: 10,
//   },
//
//   touchabletext:
//   {
//     fontSize: 16,
//     margin:12,
//     marginLeft:95,
//     fontWeight:'bold',
//     color:'white',
//   },
//
//   touchabletext2:
//   {
//     fontSize: 16,
//
//     marginBottom:24,
//     marginLeft:140,
//
//     color:'gray',
//   },
//// })
// export default Agreement

