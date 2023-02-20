import React, {useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {toast, ToastContainer} from 'react-toastify';
import {AuthForm, AuthFullNameTitle, AuthInput,
    AuthLinkToLogin, AuthLogin, AuthSendButton, ContainerForm, Input, SignInLink, Error } from './styles';
import {yupResolver} from "@hookform/resolvers/yup";
import {signUpSchema} from "../../common/schemas";
import {signUpQuery} from "../../store/auth/sing-up/sign-up.slice";

function SignUpForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<any>({
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

    const onSubmit = (data: any) => {
        dispatch(signUpQuery(data as any)).then((res: any) => {
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
                <AuthLogin>{t("Auth.registration")}</AuthLogin>
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