import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import UserCredential = FirebaseAuthTypes.UserCredential;

// Konfiguration af Google Sign-In
GoogleSignin.configure({
  webClientId: '502961112347-ams9g0di1c2ioisbh5q97iarteha4qh5.apps.googleusercontent.com', // Din Web Client ID
});

async function onGoogleButtonPress(): Promise<UserCredential> {
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
}

export default onGoogleButtonPress;
