import * as yup from 'yup';

const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const forgotPasswordSchema = yup.object().shape({
    email: yup
        .string()
        .email('*Invalid email format')
        .required('*Email is required'),
});

export const resetPasswordSchema = yup.object().shape({
    password: yup
        .string()
        .required('*Please Enter your password')
        .matches(
            PASSWORD_PATTERN,
            '*Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
        ),
    confirmPassword: yup
        .string()
        .required('*Confirm password is required')
        .oneOf([yup.ref('password')], '*Passwords does not match'),
});

export const signUpSchema = yup.object().shape({
    email: yup
        .string()
        .email('*Invalid email format')
        .required('*Email is required'),
    password: yup
        .string()
        .required('*Please Enter your password')
        .matches(
            PASSWORD_PATTERN,
            '*Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
        ),
    confirmPassword: yup
        .string()
        .required('*Confirm password is required')
        .oneOf([yup.ref('password')], '*Passwords does not match'),
});

export const signInSchema = yup.object().shape({
    email: yup
        .string()
        .email('*Invalid email format')
        .required('*Email is required'),
    password: yup.string().required('*Password is required'),
});