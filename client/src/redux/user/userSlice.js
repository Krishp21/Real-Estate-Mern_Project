import {createSlice, current} from '@reduxjs/toolkit';

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

}
});

export const {signInStart, signInSuccess, signInFailure, updateUserSuccess, updateUserFailure, updateUserStart} = userSlice.actions;

export default userSlice.reducer;