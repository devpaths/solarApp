import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Agreement from './Components/Agreement';
import SplashScreen from './Components/SplashScreen';
import Login from './Components/Login';
import Register from './Components/Register';

const App = () => {
  const Stack = createNativeStackNavigator();
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({})