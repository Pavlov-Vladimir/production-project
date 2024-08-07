import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input";

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {t('Main Page')}
        </div>
    );
};

export default MainPage;