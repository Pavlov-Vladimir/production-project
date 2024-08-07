import { classNames } from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss';
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Input } from "shared/ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";


interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(function LoginForm({ className }: LoginFormProps) {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password, isLoading, error } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string)=> {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string)=> {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(()=> {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Login Form')} />
            {error && <Text text={t('Invalid username or password')} theme={TextTheme.ERROR} />}
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('Input username')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Input password')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls.loginBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Login')}
            </Button>
        </div>
    );
});