import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen.tsx';
import RoomlistScreen from './RoomlistScreen.tsx';
import ChatScreen from './ChatScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="RoomlistScreen" component={RoomlistScreen} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
