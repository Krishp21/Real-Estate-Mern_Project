import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import { version } from "react";
import storage from 'redux-persist/lib/storage';

const rootreducer = combineReducers({user: userReducer});
const persistConfig={
    key: 'root',
    storage,
    version: 1,
}


const persistedReducer = persistReducer(persistConfig, rootreducer);// persisting/ storing the data in the local storage
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false, // to avoid error
    }),
});

export const persistor = persistStore(store);//persistor is used to persist the data in the local storage