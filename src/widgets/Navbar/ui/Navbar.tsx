import React from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import { AppLink } from "shared/ui/AppLink";
import { useTranslation } from "react-i18next";
import { AppLinkTheme } from "shared/ui/AppLink/ui/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('navbar');

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to={'/'}
                    theme={AppLinkTheme.PRIMARY_INVERTED}
                >
                    {t('Main')}
                </AppLink>
                <AppLink
                    to={'/about'}
                    theme={AppLinkTheme.RED}
                >
                    {t('About')}
                </AppLink>
            </div>
        </div>
    );
};