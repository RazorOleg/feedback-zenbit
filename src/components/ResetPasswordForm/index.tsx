import React, {useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate} from "react-router-dom";
import {AuthForm, AuthFullNameTitle, AuthInput,
    AuthSendButton, ContainerForm, Input, Error, AuthResetPasswordTitle } from './styles';
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {resetPasswordSchema} from "../../common/schemas";
import {resetPasswordQuery} from "../../store/auth/reset-password/reset-password.slice";

function ResetPasswordForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        setValue
    } = useForm<any>({
        mode: 'onChange',
        defaultValues: {
            password: '',
            confirmPassword: ''
        },
        resolver: yupResolver(resetPasswordSchema),
    });
    useEffect(() => {
        register('password');
        register('confirmPassword');
    }, []);


    const onSubmit = (data: any) => {
        dispatch(resetPasswordQuery(data as any)).then((res: any) => {
            if ( res.payload.message){
                navigate('/');
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
                    <AuthResetPasswordTitle>{t("Auth.resetPassword")}</AuthResetPasswordTitle>
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
                    <AuthSendButton value={t("Auth.resetPassword").toString()} type="submit" />
                </form>
            </AuthForm>
        </ContainerForm>
    );
}

export default ResetPasswordForm;