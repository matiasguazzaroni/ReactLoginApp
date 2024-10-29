import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMsg: null,
  },
  reducers: {
    login( state, action ) {
        state.status = 'logged'
        state.uid = action.payload.uid
        state.email = action.payload.email
        state.displayName = action.payload.displayName
        state.photoUrl = action.payload.photoUrl
    },
    logout( state ) {
        state.status = 'logout'
        state.uid = null
        state.email = null
        state.displayName = null
        state.photoUrl = null
    },
    checkingCredentials( state ) {
        state.status = 'checking'

    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions