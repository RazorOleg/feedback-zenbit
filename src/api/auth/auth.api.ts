import axios from 'axios';
import { API_URLS } from '../index';

export interface AuthSignInDto {
    email: string;
    password: string;
}

export interface AuthSignInResponseDto {
    admin: {
        id: number;
        login: string;
    };
    token: string;
}

export interface AuthUpdatePasswordResponseDto {
    message: string;
}

export interface AuthResetPasswordResponseDto {
    password: string;
    confirmPassword: string;
    token: string | undefined;
}

export const authAPI = {
    login(data: AuthSignInDto) {
        return axios
            .post<AuthSignInResponseDto>(API_URLS.signIn, data)
            .then((res) => res.data);
    },

    signUp(data: AuthSignInDto) {
        return axios
            .post<AuthSignInResponseDto>(API_URLS.signUp, {email: data.email, password: data.password})
            .then((res) => res.data);
    },

    forgotPassword(email: string) {
        return axios
            .post<AuthUpdatePasswordResponseDto>(API_URLS.forgotPassword, email)
            .then((res) => res.data);
    },

    resetPassword(resetPassword: AuthResetPasswordResponseDto) {
        return axios
            .post<AuthUpdatePasswordResponseDto>(
                API_URLS.resetPassword,
                resetPassword,
            )
            .then((res) => res.data);
    },
};