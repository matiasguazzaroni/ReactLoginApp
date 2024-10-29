import { signInWithGoogle } from "../../firebase/authProviders"
import { checkingCredentials } from "./authSlice"

export const checkingAuthentication = () => {
    return async (dispatch: any) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch: any) => {
        dispatch(checkingCredentials())
        signInWithGoogle()
    }
}