import React, {useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {FieldErrors, useForm} from "react-hook-form";
import {toast, ToastContainer} from 'react-toastify';
import {AuthForm, AuthFullNameTitle, AuthInput,
    AuthLinkToLogin, AuthSendButton, ContainerForm, Input, SignInLink, Error, AuthRegistration } from '@signUpForm/styles';
import {yupResolver} from "@hookform/resolvers/yup";
import {signUpSchema} from "@common/schemas";
import {signUpQuery} from "@store/auth/sign-up/sign-up.slice";
import {IResponse, ISignUp} from "@signUpForm/type";

function SignUpForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<ISignUp>({
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        resolver: yupResolver(signUpSchema),
    });
    useEffect(() => {
        register('password');
        register('confirmPassword');
    }, []);

    const onSubmit = (data: ISignUp) => {
        dispatch(signUpQuery(data as ISignUp)).then((res: IResponse) => {
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
                <AuthRegistration>{t("Auth.registration")}</AuthRegistration>
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
                <AuthInput>
                    <>
                    <AuthFullNameTitle>{t("Auth.confirmPassword")}</AuthFullNameTitle>
                    <Input name="confirmPassword"
                           type="password"
                           onChange={async e => setValue("confirmPassword", e.target.value)}/>
                        {checkErrors(errors, "confirmPassword")}
                    </>
                </AuthInput>
                <AuthSendButton value={t("Auth.signUp").toString()} type="submit" />
                <AuthLinkToLogin>
                    {t("Auth.alreadyExistText")}
                    <SignInLink to={"/sign-in"}>{t("Auth.signIn")}</SignInLink>
                </AuthLinkToLogin>
                </form>
            </AuthForm>
            <ToastContainer />
        </ContainerForm>
    );
}

export default SignUpForm;