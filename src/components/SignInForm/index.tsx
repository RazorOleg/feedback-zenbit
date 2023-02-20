import React from 'react';
import { useTranslation } from 'react-i18next';
import {NavLink, useNavigate} from "react-router-dom";
import {AuthForgotPasswordLink, AuthForm, AuthFullNameTitle, AuthInput,
    AuthLinkToLogin, AuthLogin, AuthSendButton, ContainerForm, Input, SignUpLink } from './styles';
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {signInSchema} from "../../common/schemas";
import {signInQuery} from "../../store/auth/sign-in/sign-in.slice";
import {Error} from "../SignUpForm/styles";
import {toast, ToastContainer} from "react-toastify";

function SignInForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const {
        handleSubmit,
        formState: { errors, isValid },
        control, setValue
    } = useForm<any>({
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(signInSchema),
    });

    const onSubmit = (data: any) => {
        dispatch(signInQuery(data as any)).then((res: any) => {
            if (!res.error){
                navigate('/');
            }
            else {
                toast.error("Sorry, something was wrong!", {
                    position: toast.POSITION.TOP_CENTER,
                })
            }
        });
    };

    const checkErrors = (errors : any, input : any) => {
        return errors && errors[input]?.message && <Error>{errors[input]?.message.toString()}</Error>
    }

    return (
        <ContainerForm>
        <AuthForm>
            <form onSubmit={handleSubmit(onSubmit)}>
            <AuthLogin>{t("Auth.loginTitle")}</AuthLogin>
            <AuthInput>
                <>
                <AuthFullNameTitle>{t("Auth.email")}</AuthFullNameTitle>
                <Input name="email"
                       onChange={async e => setValue("email", e.target.value)}/>
                {checkErrors(errors, "email")}
                </>
            </AuthInput>
            <AuthInput>
                <>
                <AuthFullNameTitle>{t("Auth.password")}</AuthFullNameTitle>
                <Input name="password"
                       type="password"
                    onChange={async e => setValue("password", e.target.value)}/>
                    {checkErrors(errors, "password")}
                </>
            </AuthInput>
            <AuthForgotPasswordLink to={"forgot-password"}> {t("Auth.forgotPassword")} </AuthForgotPasswordLink>
            <AuthSendButton value={t("Auth.signIn").toString()} type="submit" />
            <AuthLinkToLogin>
                {t("Auth.haventAnAccount")}
                <SignUpLink to={"sign-up"}>{t("Auth.signUp")}</SignUpLink>
            </AuthLinkToLogin>
            </form>
        </AuthForm>
            <ToastContainer />
        </ContainerForm>
    );
}

export default SignInForm;