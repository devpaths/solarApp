
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddNavigate from './addNavigate';
//Screens
import Overview from '../Screens/Overview';
import Monitor from '../Screens/Monitor';
import Alert from '../Screens/Alert';
import Me from '../Screens/Me';


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
              tabBarIcon:({focused,color,size,name})=>{
                  let iconName;
                  let rn=route.name;

                  if(rn===OverviewName)
                  {
                    iconName = focused ? 'home' : 'home-outline';
                  } else if(rn === AlertName){
                    iconName = focused ? 'alert-circle-sharp' : 'alert-circle-outline';
                  }
                  else if(rn === MonitorName){
                    iconName = focused ? 'desktop' : 'desktop-outline';
                  }
                  else if(rn === MeName){
                    iconName = focused ? 'person-sharp' : 'person-outline';
                  }
               return <Ionicons name={iconName} size={size} color={color}/>
              },
      })}
      tabBarOptions={{
      activeTintColor:'tomato',
      backgroudColor:'blue',
      inactiveTintColor:'gray',
      labelStyle:{fontSize:12},
      tabstyle:{height:60,paddingBottom:10},
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