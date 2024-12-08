import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

// Her har jeg fuldt en Youtube video.
// https://www.youtube.com/watch?v=J9qDaFTP9ao
GoogleSignin.configure({
  webClientId: '502961112347-ams9g0di1c2ioisbh5q97iarteha4qh5.apps.googleusercontent.com', // Din Web Client ID
});

// @ts-ignore
//Koden er taget fra denne kilde: https://rnfirebase.io/auth/social-auth
async function onGoogleButtonPress(): Promise<auth.UserCredential> {
  try {
    // Først starter jeg med at se om den har altså hasPlayServices ved GoogleSignin.
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    // Nu logger brugeren ind og vi får brugerens info.
    const userInfo: any = await GoogleSignin.signIn();

    // Tjek, om idToken findes
    const idToken = userInfo.idToken;
    if (!idToken) {
      throw new Error('No ID token found in Google Sign-In response');
    }

    // Her danne Google-Kontoens kredientialer.
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Brugeren logger ind gennem Firebase
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.error('Google Sign-In Error:', error);
    throw error;
  }
}

export default onGoogleButtonPress;
