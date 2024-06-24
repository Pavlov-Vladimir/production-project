import { classNames } from "shared/lib/classNames/classNames";
import './Spinner.scss';

interface SpinnerProps {
    className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => {
    return (
        <div className={classNames('lds-dual-ring', {}, [className])} />
    );
};