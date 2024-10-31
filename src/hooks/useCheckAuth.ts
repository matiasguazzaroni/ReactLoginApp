
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../store/store"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { FiresbaseAuth } from "../firebase/config"
import { login, logout } from "../store/auth/authSlice"

export const useCheckAuth = () => {
    const {status} = useSelector((state: any) => state.auth);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
    onAuthStateChanged(FiresbaseAuth, async(user) => {
        if (!user) return dispatch(logout(null))
        dispatch(login({uid: user.uid, email: user.email, displayName: user.displayName, photoURL: user.photoURL}))
    })
    }, []);

    return {status}
}