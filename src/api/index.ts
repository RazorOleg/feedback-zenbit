export const SERVER_API_PROD = process.env.REACT_APP_SERVER_API_PROD;
export const SERVER_API_DEV = process.env.REACT_APP_SERVER_API_DEV;

const localhost = !process.env.REACT_APP_NODE_ENV
    || process.env.REACT_APP_NODE_ENV === 'development';

/*const api: string | undefined = localhost ? SERVER_API_DEV : SERVER_API_PROD;*/
const api: string = "http://ec2-35-170-53-41.compute-1.amazonaws.com:8080/";

export const API_URLS = {
    signIn: `${api}auth/sign-in/`,
    signUp: `${api}auth/sign-up/`,
    city: `${api}city/`,
    forgotPassword: `${api}/auth/forgot-password`,
    resetPassword: `${api}/auth/reset-password`,
    base: api
};