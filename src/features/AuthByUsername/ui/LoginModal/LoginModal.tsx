import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal";
import { Suspense } from "react";
import { Spinner } from "shared/ui/Spinner";
import { LoginFormAsync } from "features/AuthByUsername/ui/LoginForm/LoginForm.async";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const {
        className,
        isOpen,
        onClose,
    } = props;

    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Spinner />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};