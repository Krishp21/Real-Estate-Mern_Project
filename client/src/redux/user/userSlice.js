import {createSlice, current} from '@reduxjs/toolkit';
import { deleteUser } from 'firebase/auth';

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
       signInStart: (state) => {
           state.loading = true;
       },
        signInSuccess: (state, action) => {
              state.loading = false;
              state.currentUser = action.payload;//action.payload is the data that we get from the api
              state.error = null;
         },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
         },
        updateUserStart: (state) => {
            state.loading = true;
        },
        updateUserSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            state.error = null;
        },
        updateUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteUserStart: (state) => {
            state.loading = true;
        },
        deleteUserSuccess: (state) => {
            state.loading = false;
            state.currentUser = null;
            state.error = null;
        },
        deleteUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        signOutUserStart: (state) => {
            state.loading = true;
        },
        signOutUserSuccess: (state) => {
            state.loading = false;
            state.currentUser = null;
            state.error = null;
        },
        signOutUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

}
});

export const {signInStart, signInSuccess, signInFailure, 
    updateUserSuccess, updateUserFailure, updateUserStart,
    deleteUserFailure, deleteUserStart, deleteUserSuccess,
    signOutUserFailure, signOutUserStart, signOutUserSuccess} = userSlice.actions;

export default userSlice.reducer;