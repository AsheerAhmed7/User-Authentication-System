import React, {useEffect, useState} from 'react';
import {
  Image,
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import auth, {firebase} from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const navigation = useNavigation();
  const createCollection = user => {
    firebase.firestore().collection('testing').doc(user.uid).set({
      email: user.email,
      uid: user.uid,
      phoneNumber: '03212300044',
      skills: 'React-Native',
    });
  };
  const HandleSignUp = async () => {
    if (password != confirmPassword) {
      setMessage('Password and Confirm PassWord does not match');
      setConfirmPassword(''), setPassword('');
      return;
    }
    try {
      if (
        email.length > 0 &&
        password.length > 0 &&
        confirmPassword.length > 0
      ) {
        const userCreated = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setMessage(null);
        await firebase
          .firestore()
          .collection('testing')
          .doc(userCreated.user.uid)
          .set({
            email: userCreated.user.email,
            userId: userCreated.user.uid,
            age: 18,
          });
        await auth().signOut();
        Alert.alert('Sign-up successful!', 'You can now log in.');
        navigation.goBack();
      } else {
        Alert.alert('Fill all the details :)');
      }
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    }
  };
  return (
    <View style={[styles.containor, {backgroundColor: 'black'}]}>
      <View
        style={{flex: 0.15, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{height: 100, width: 100}}
          source={require('./myassets/logo.jpeg')}></Image>
      </View>
      <View
        style={{
          flex: 0.85,
          borderWidth: 2,
          borderTopLeftRadius: 70,
          backgroundColor: 'white',
        }}>
        <View style={styles.heading}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>Signup Screen</Text>
        </View>
        <View style={{flex: 0.5, marginLeft: 15, padding: 15}}>
          <Text style={{fontSize: 18}}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={value => setEmail(value)}></TextInput>
          <Text style={{fontSize: 18}}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={value => setPassword(value)}></TextInput>
          <Text style={{fontSize: 18}}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={confirmPassword}
            onChangeText={value => setConfirmPassword(value)}></TextInput>
          <View style={{height: 45, width: '100%'}}>
            {message ? (
              <View
                style={{
                  margin: 3,
                  flexDirection: 'row',
                  borderWidth: 2,
                  borderColor: 'red',
                }}>
                <Text style={{color: 'red', fontSize: 14}}>{message}</Text>
              </View>
            ) : null}
          </View>
          <TouchableOpacity style={styles.btn} onPress={HandleSignUp}>
            <Text style={{fontSize: 22, fontWeight: 'bold', color: 'white'}}>
              SignUp
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{height: 100, width: '100%', justifyContent: 'center'}}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.navigate}>
              Already have an account?
              <Text
                style={[
                  styles.navigate,
                  {fontStyle: 'italic', fontWeight: 'bold'},
                ]}>
                Login
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
