import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Notify from "./Notify";
import ImageUploader from "./ImageUpload";
import SnapShot from "./SnapShot";
const Tab = createMaterialTopTabNavigator();
const Home = ()=>{
  return(
    <Tab.Navigator>
        <Tab.Screen name="Notify" component={Notify}></Tab.Screen>
        <Tab.Screen name="Image" component={ImageUploader}></Tab.Screen>
         <Tab.Screen name="SnapShot" component={SnapShot}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default Home;