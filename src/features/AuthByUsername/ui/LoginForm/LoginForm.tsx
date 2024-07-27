import { classNames } from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss';
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Input } from "shared/ui/Input";


interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('Input username')}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Input password')}
            />
            <Button
                className={cls.loginBtn}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Login')}
            </Button>
        </div>
    );
};