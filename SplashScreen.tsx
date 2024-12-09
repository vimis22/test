import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    const checkUserLogin = async () => {
      return auth().onAuthStateChanged(user => {
        if (user) {
          navigation.replace('RoomlistScreen'); // Naviger til RoomlistScreen hvis logget ind
        } else {
          navigation.replace('LoginScreen'); // Naviger til LoginScreen hvis ikke logget ind
        }
      });
    };

    checkUserLogin();
  }, [navigation]);

  return (
    <TouchableOpacity
      style={styles.pageContainer}
      onPress={() => navigation.navigate('LoginScreen')}>
      <Text style={styles.welcomeTitle}>Chentia</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#330099',
  },
  welcomeTitle: {
    fontSize: 32,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SplashScreen;
