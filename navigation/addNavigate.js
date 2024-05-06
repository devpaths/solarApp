import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Monitor from './screens/Monitor';
import CreateAplant from './screens/createAplant'; // Assuming this is the component for the 'createAplant' screen
import MainContainer from './MainContainer';
const Stack = createNativeStackNavigator();

const AddNavigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="MainContainer" component={MainContainer} />
        <Stack.Screen name="CreateAplant" component={CreateAplant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AddNavigate;
