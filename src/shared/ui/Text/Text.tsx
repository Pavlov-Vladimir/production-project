import { classNames } from "shared/lib/classNames/classNames";
import cls from './Text.module.scss';

export enum TextTheme {
    NORMAL = 'normal',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text = (props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.NORMAL,
    } = props;

    const additional: string[] = [
        className,
        cls[theme],
    ];

    return (
        <div className={classNames(cls.Text, {}, additional)}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};