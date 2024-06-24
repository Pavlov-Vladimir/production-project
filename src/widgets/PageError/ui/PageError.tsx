import { classNames } from "shared/lib/classNames/classNames";
import cls from './PageError.module.scss';
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h2>{t('An unexpected error occurred')}</h2>
            <Button
                onClick={reloadPage}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Reload Page')}
            </Button>
        </div>
    );
};