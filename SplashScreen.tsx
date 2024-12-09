import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useEffect} from 'react';
const SplashScreen = ({ navigation }: any) => {
  const displaySplashSeconds = 3000;

  useEffect(() => {
    const checkUserLogin = async () => {
      setTimeout(()=>{
        const currentUser = auth().currentUser;
        if (currentUser) {
          navigation.navigate('RoomlistScreen');
        } else {
          navigation.navigate('LoginScreen');
        }
      }, displaySplashSeconds);
    };
    checkUserLogin();
  }, [navigation]);

  return (
    <TouchableOpacity style={styles.pageContainer} onPress={() => navigation.navigate('LoginScreen')}>
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
