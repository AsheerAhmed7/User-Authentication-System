import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import PushNotification from 'react-native-push-notification';
import auth from '@react-native-firebase/auth';
import styles from './styles';

const Notify = () => {
  useEffect(() => {
    createChannels();
  }, []);

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'test-channel',
      channelName: 'Test Channel',
    });
  };
  
  const handleNotification = () => {
    PushNotification.localNotification({
      channelId: 'test-channel',
      title: 'Notification is Pressed',
      message: 'Hello, this is a test notification!',
    });
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Text>Email: {auth().currentUser.email}</Text>
      <Text>UseruId: {auth().currentUser.uid}</Text>
      <TouchableOpacity style={styles.btn} onPress={handleNotification}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }}>
          Push Notify
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => auth().signOut()}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }}>
          Sign out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Notify;
