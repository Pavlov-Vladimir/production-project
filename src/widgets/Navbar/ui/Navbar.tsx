import React, { useCallback, useState } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Modal } from "shared/ui/Modal";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('navbar');
    const [showAuthModal, setShowAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setShowAuthModal(prev => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Enter')}
            </Button>
            <Modal
                isOpen={showAuthModal}
                onClose={onToggleModal}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, numquam.
            </Modal>
        </div>
    );
};