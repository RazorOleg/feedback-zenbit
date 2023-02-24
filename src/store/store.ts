import { configureStore } from '@reduxjs/toolkit';
import city from './city/city.slice';
import signIn from "./auth/sign-in/sign-in.slice";
import signUp from "./auth/sign-up/sign-up.slice";


export const store = configureStore({
    reducer: {
        city,
        signIn,
        signUp
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;

export default store;