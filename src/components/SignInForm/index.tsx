import React from 'react';
import { useTranslation } from 'react-i18next';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {FieldErrors, useForm} from "react-hook-form";
import {AuthForgotPasswordLink, AuthForm, AuthFullNameTitle, AuthInput,
    AuthLinkToLogin, AuthLogin, AuthSendButton, ContainerForm, Input, SignUpLink } from '@signInForm/styles';
import {yupResolver} from "@hookform/resolvers/yup";
import {signInSchema} from "@common/schemas";
import {signInQuery} from "@store/auth/sign-in/sign-in.slice";
import {Error} from "@signUpForm/styles";
import {toast, ToastContainer} from "react-toastify";
import {IResponse, ISignIn} from "@signInForm/type";

function SignInForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const {
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<ISignIn>({
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(signInSchema),
    });

    const onSubmit = (data: ISignIn) => {
        dispatch(signInQuery(data as ISignIn)).then((res: IResponse) => {
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

    const checkErrors = (errors : FieldErrors, input : string) => {
        return errors && errors[input]?.message && <Error>{(errors[input]?.message || "").toString()}</Error>
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
            <AuthForgotPasswordLink> {t("Auth.forgotPassword")} </AuthForgotPasswordLink>
            <AuthSendButton value={t("Auth.signIn").toString()} type="submit" />
            <AuthLinkToLogin>
                {t("Auth.haventAnAccount")}
                <SignUpLink to={"/sign-up"}>{t("Auth.signUp")}</SignUpLink>
            </AuthLinkToLogin>
            </form>
        </AuthForm>
            <ToastContainer />
        </ContainerForm>
    );
}

export default SignInForm;