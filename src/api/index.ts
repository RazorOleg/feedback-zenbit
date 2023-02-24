
const api = process.env.REACT_APP_SERVER_API_DEV;

export const API_URLS = {
    signIn: `${api}auth/sign-in/`,
    signUp: `${api}auth/sign-up/`,
    city: `${api}city/`,
    base: api
};