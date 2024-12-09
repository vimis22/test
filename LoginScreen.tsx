import React, {useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId: '502961112347-ams9g0di1c2ioisbh5q97iarteha4qh5.apps.googleusercontent.com', // Din Web Client ID
});
const LoginScreen = ({ navigation }: any) => {
  const handleGoogleLogin = async () => {
    try {
      // Kontroller, om enheden understøtter Google Play Services
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

      // Log brugeren ind og få brugerinfo
      const userInfo: any = await GoogleSignin.signIn();

      // Tjek, om idToken findes
      const idToken = userInfo.idToken;
      if (!idToken) {
        throw new Error('No ID token found in Google Sign-In response');
      }

      // Opret Google-kredentialer
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Log brugeren ind via Firebase
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      throw error;
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      if (result.isCancelled) {
        console.log('User cancelled Facebook login');
        return;
      }
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        console.log('Something went wrong obtaining Facebook access token');
        return;
      }
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
      await auth().signInWithCredential(facebookCredential);
      navigation.replace('RoomlistScreen'); // Naviger til RoomlistScreen efter login
    } catch (error) {
      console.error('Facebook Login Error:', error);
    }
  };

  useEffect(() => {
    // Tjek om brugeren allerede er logget ind
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        navigation.replace('RoomlistScreen');
      }
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.pageContainer}>
      <Text style={styles.sectionTitle}>LOGIN</Text>

      <Text style={styles.textInputLabel}>USERID:</Text>

      <TextInput style={styles.inputFieldText} placeholder={'Please enter your UserID'}/>
      <Text style={styles.textInputLabel}>PASSWORD:</Text>

      <TextInput style={styles.inputFieldText} placeholder={'Please enter your Password'} secureTextEntry={true}/>
      <Text style={styles.textInputLabel}>ADDITIONAL LOGIN:</Text>

      <View style={styles.additionalLoginContainer}>
        <Text style={styles.additionalLoginButtons} onPress={handleGoogleLogin}>GOOGLE</Text>
        <Text style={styles.additionalLoginButtons} onPress={handleFacebookLogin}>FACEBOOK</Text>
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('RoomlistScreen')}>
        <Text style={styles.buttonText}>ENTER</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.buttonText}>Don't have an Account? Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#330099',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  textInputLabel: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
  },
  inputFieldText: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
  },
  buttonContainer: {
    backgroundColor: '#009930',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '600',
    color: 'white',
  },
  signupLink: {
    textAlign: 'center',
    color: 'white',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
  additionalLoginContainer: {
    flexDirection: 'row',
    gap: 80,
    marginLeft: 55,
    marginBottom: 10,
    marginTop: 8,
  },
  additionalLoginButtons: {
    backgroundColor: '#0078ff',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    color: 'white',
    fontWeight: '600',
  },
});

export default LoginScreen;
