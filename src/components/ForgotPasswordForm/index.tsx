import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate} from "react-router-dom";
import {AuthForgotPasswordTitle, AuthForm, AuthFullNameTitle, AuthInput,
    ContainerForm, Input, Error, AuthSendButton } from './styles';
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {forgotPasswordSchema} from "../../common/schemas";
import {forgotPasswordQuery} from "../../store/auth/forgot-password/forgot-password.slice";

function ForgotPasswordForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const {
        handleSubmit,
        formState: { errors, isValid },
        setValue
    } = useForm<any>({
        mode: 'onChange',
        defaultValues: {
            email: ''
        },
        resolver: yupResolver(forgotPasswordSchema),
    });
    console.log("errors", errors);
    console.log("isValid", isValid)
    const onSubmit = (data: any) => {
        dispatch(forgotPasswordQuery(data as any)).then((res: any) => {
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
                    <AuthForgotPasswordTitle>{t("Auth.forgotPasswordTitle")}</AuthForgotPasswordTitle>
                    <AuthInput>
                        <>
                            <AuthFullNameTitle>{t("Auth.enterEmail")}</AuthFullNameTitle>
                            <Input name="email"
                                   onChange={async e => setValue("email", e.target.value)}/>
                            {checkErrors(errors, "email")}
                        </>
                    </AuthInput>
                    <AuthSendButton value={t("Auth.continue").toString()} type="submit" />
                   {/* <AuthSendInput>
                    <ResetPasswordLink to={"reset-password"}>{t("Auth.continue")}</ResetPasswordLink>
                    </AuthSendInput>*/}
                </form>
            </AuthForm>
        </ContainerForm>
    );
}

export default ForgotPasswordForm;