import React, { useCallback, useState } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entity/User";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('navbar');
    const [showAuthModal, setShowAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onOpenModal = useCallback(() => {
        setShowAuthModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setShowAuthModal(false);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Logout')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onOpenModal}
            >
                {t('Login')}
            </Button>
            <LoginModal isOpen={showAuthModal} onClose={onCloseModal}/>
        </div>
    );
};