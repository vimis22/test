import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { StackParamList } from './types';

type SplashScreenProps = {
  // @ts-ignore
  navigation: NativeStackNavigationProp<StackParamList, 'SplashScreen'>;
};

export default function SplashScreen({ navigation }: SplashScreenProps) {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.welcomeTitle}>Chentia</Text>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.buttonContent}>CLICK TO CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#0000FF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcomeTitle: {
    fontSize: 50,
    color: 'white',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  loginButton: {
    width: '80%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#0000FF',
  },
  buttonContent: {
    fontSize: 18,
    color: '#0000FF',
    fontWeight: 'bold',
  },
});
