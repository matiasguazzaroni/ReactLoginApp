import { loginWithEmailAndPassword, logoutFirebase, registerUserWithEmailAndPassword, signInWithGoogle } from "../../firebase/authProviders"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = () => {
    return async (dispatch: any) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch: any) => {
        dispatch(checkingCredentials())
        await signInWithGoogle()
    }
}

export const startCreatingUserWithEmailPassword = (email: string, password: string, displayName:string) => {
    return async (dispatch: any) => {
        dispatch(checkingCredentials());
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailAndPassword(email, password, displayName);
        
        if(!ok) return dispatch(logout({errorMessage}))

        dispatch(login({uid, displayName, email, photoURL}))
    }
}

export const startLoginWithEmailPassword = (email: string, password: string) => {
    return async (dispatch: any) => {
        dispatch(checkingCredentials());
        const { ok, uid, displayName, photoURL, errorMessage } = await loginWithEmailAndPassword(email, password);

        if(!ok) return dispatch(logout({errorMessage}))
        dispatch(login({uid, displayName, email, photoURL}))
    }
}

export const startLogout = () => {
    return async (dispatch: any) => {
        await logoutFirebase();
        dispatch(logout({errorMessage: null}))
    }
}