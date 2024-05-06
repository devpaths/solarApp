import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Agreement from './src/Screens/Agreement';
import SplashScreen from './src/Screens/SplashScreen';
import Login from './src/Screens//Login';
import Register from './src/Screens/Register';
import Overview from './src/Screens/Overview';
import useAuth from './hooks/useAuth';
import MainContainer from './src/navigation/MainContainer';
import AddNavigate from './src/navigation/addNavigate';
import createAplant from './src/Screens/createAplant';
import Me from './src/Screens/Me';
const App = () => {
  const Stack = createNativeStackNavigator();

  const {user}=useAuth();
if(!user)
{
  return (
<AddNavigate/>
);
}
else{
  return (
    <NavigationContainer>
    <Stack.Navigator 
    name="Agreement"
            component={Agreement}
            options={{
            headerShown: false,
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation:'slide_from_right'}}
    screenOptions={{headerShown:false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Agreement" component={Agreement} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Me" component={Me} />
      <Stack.Screen name="Overview" component={Overview} />
      <Stack.Screen name="createAplant" component={createAplant} />
    </Stack.Navigator>
  </NavigationContainer>
);
}
}

export default App

const styles = StyleSheet.create({})