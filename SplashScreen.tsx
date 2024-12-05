import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.welcomeTitle}>Chentia</Text>
    </View>
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
