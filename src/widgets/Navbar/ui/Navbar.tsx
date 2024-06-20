import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink} from "shared/ui/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation('navbar');

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={'/about'}>
                    {t('About')}
                </AppLink>
                <AppLink to={'/'}>
                    {t('Main')}
                </AppLink>
            </div>
        </div>
    );
};