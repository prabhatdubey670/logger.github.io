import React from "react";
// import { View , Text } from "react-native";
import Todocomp from "./src/components/Todocomp";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import {NavigationContainer} from '@react-navigation/native';
const Drawer = createDrawerNavigator();



export default function App() {
  
 return (
  <NavigationContainer>
 <Drawer.Navigator initialRouteName="Home">
  <Drawer.Screen name="Home" component={Todocomp}/>
 </Drawer.Navigator>
 </NavigationContainer>  
  );
}


