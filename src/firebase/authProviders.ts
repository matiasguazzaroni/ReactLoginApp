import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { FiresbaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {

 try { await signInWithPopup(FiresbaseAuth, googleProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);

    const token = credential?.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...

    return {ok: false, errorMessage: errorMessage};
  })}
  catch (error) {
    console.error(error);
  }
}

export const registerUserWithEmailAndPassword = async (email: string, password: string, displayName:string) => {
  try {
    const resp = await createUserWithEmailAndPassword(FiresbaseAuth, email, password);
    const {uid, photoURL} = resp.user!;
    // Update the user's display name
    await updateProfile(FiresbaseAuth.currentUser!, {displayName});

    return {ok: true, uid, photoURL, email, displayName};
  }
  catch (error:any) {
    console.error(error);
    return {ok: false, errorMessage: error.message};
  }
}

export const loginWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const resp = await signInWithEmailAndPassword(FiresbaseAuth, email, password);
    const {uid, photoURL, displayName} = resp.user!;
    return {ok: true, uid, photoURL, email, displayName};
  
  } catch (error:any) {
    console.error(error);
    return {ok: false, errorMessage: error.message};
  }
}

export const logoutFirebase = async () => {
  return await FiresbaseAuth.signOut();
}