
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddNavigate from './addNavigate';
//Screens
import Overview from './screens/Overview';
import Monitor from './screens/Monitor';
import Alert from './screens/Alert';
import Me from './screens/Me';
import createAplant from './screens/createAplant';

//ScreenNames
const OverviewName = 'Overview';
const MonitorName = 'Monitor';
const AlertName = 'Alert';
const MeName = 'Me';
const AddNavigateName = "AddNavigate";

const Tab = createBottomTabNavigator();



const MainContainer =()=> {



      return(


      <Tab.Navigator
      initialRouteName={OverviewName}
      screenOptions={({route}) => ({

              headerShown: false,
              tabBarIcon:({focused,color,size})=>{
                  let iconName;
                  let rn=route.name;

                  if(rn===OverviewName)
                  {
                    iconName = focused ? 'home' : 'home-outline';
                  } else if(rn === AlertName){
                    iconName = focused ? 'desktop' : 'desktop-outline';
                  }
                  else if(rn === MonitorName){
                    iconName = focused ? 'settings' : 'settings-outline';
                  }
                  else if(rn === MeName){
                    iconName = focused ? 'home' : 'home-outline';
                  }
               return <Ionicons name={iconName} size={size} color={color}/>
              },
      })}
      tabBarOptions={{
      activeTintColor:'tomato',
      inactiveTintColor:'gray',
      labelStyle:{paddingBottom:5,fontSize:16},
      tabstyle:{padding:5,height:20},
      style:{backgroudColor:'blue'}


      }}
      >
<Tab.Screen name={OverviewName} component={Overview}/>
<Tab.Screen name={MonitorName} component={Monitor}/>
<Tab.Screen name={AlertName} component={Alert}/>
<Tab.Screen name={MeName} component={Me}/>
      </Tab.Navigator>

      )


}
export default MainContainer;