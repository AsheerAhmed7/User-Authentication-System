import React, { useEffect, useState } from "react";
import { Text,TextInput,Touchable,TouchableOpacity,View } from "react-native";
import firestore from '@react-native-firebase/firestore';
import auth, { firebase } from '@react-native-firebase/auth';
import styles from "./styles";
const SnapShot = ()=>{
   const[age,setAge]=useState(null);
   const[userData,setUserData]=useState([]);
  useEffect(()=>{
    getInfo();
  },[])
  async function getInfo(){
     firebase.firestore().collection('testing').doc(auth().currentUser.uid).onSnapshot((doc)=>{
       setUserData(doc.data());
    });;
  }
  const UpDateProfile = async()=>{
     await firebase.firestore().collection('testing').doc(userData.userId).update({
      age : age
     })
     setAge(null);
     console.warn("Updated");
  }
  return(
     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

     <Text style={{fontSize:18,fontWeight:'700'}}>Email: {userData?<Text>{userData.email}</Text>:null}</Text>
     <Text style={{fontSize:18,fontWeight:'700'}}>Age: {userData?<Text>{userData.age}</Text>:null}</Text>
     <Text style={{fontSize:18,fontWeight:'700'}}>UID: {userData?<Text>{userData.userId}</Text>:null}</Text>
     <Text style={{fontSize:18,fontWeight:'700'}}>Enter the age</Text>
     <TextInput style={styles.input} placeholder="Enter the age" value={age} onChangeText={(value)=>setAge(value)}></TextInput>
    <TouchableOpacity style={styles.btn}>
      <Text style={{fontSize:22,fontWeight:'bold',color:'white'}} onPress={UpDateProfile}>Update</Text>
    </TouchableOpacity>
    </View>
  )


}


export default SnapShot;