import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { StackParamList } from './types';

type LoginScreenProps = {
  // @ts-ignore
  navigation: NativeStackNavigationProp<StackParamList, 'LoginScreen'>;
};

export default function LoginScreen({ navigation }: LoginScreenProps) {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.registrarInformation}>LOGIN</Text>
      <TextInput style={styles.inputTextField} placeholder="Enter your UserID" />
      <TextInput style={styles.inputTextField} placeholder="Enter your Password" secureTextEntry />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('RoomListScreen')}>
        <Text style={styles.buttonContent}>ENTER</Text>
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
  registrarInformation: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 30,
  },
  inputLabelText: {
    fontSize: 16,
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 5,
  },
  inputTextField: {
    width: '100%',
    height: 50,
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  additionalLoginText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  iconImagesRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },
  iconImagesSizes: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  loginButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFFFFF',
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
  linkTextDescriber: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  linkTextHighlighter: {
    color: '#FFFFFF',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});
