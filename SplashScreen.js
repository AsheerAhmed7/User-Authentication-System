import React, {useEffect, useState} from 'react';
import {
  Image,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      auth().onAuthStateChanged(user => {
        const routeName = user ? 'Home' : 'Login';
        navigation.dispatch(StackActions.replace(routeName));
      });
    }, 3000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <Image
        style={{height: 300, width: 300}}
        source={require('./myassets/logo.jpeg')}></Image>
    </View>
  );
};
export default SplashScreen;
