import { classNames } from "shared/lib/classNames/classNames";
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from "react";

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background-inverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme ,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square
    };

    const additional: string[] = [
        className,
        cls[theme],
        cls[size],
    ];

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, additional)}
            {...otherProps}
        >
            {children}
        </button>
    );
};