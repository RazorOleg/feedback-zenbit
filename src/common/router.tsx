import React from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { ForgotPassword } from "../pages/ForgotPassword";
import Main from "../pages/Main";
import {ResetPassword} from "../pages/ResetPassword";

const PATH = {
    SIGN_IN: "/sign-in",
    SIGN_UP: "/sign-up",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",
    HOME: "/"
}

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
             <Route path={PATH.HOME} element={<Main />} />
             <Route path={PATH.SIGN_UP} element={<SignUp />} />
             <Route path={PATH.SIGN_IN} element={<SignIn />} />
             <Route path={PATH.FORGOT_PASSWORD} element={<ForgotPassword />} />
             <Route path={PATH.RESET_PASSWORD} element={<ResetPassword />} />
        </Route>
    )
);
