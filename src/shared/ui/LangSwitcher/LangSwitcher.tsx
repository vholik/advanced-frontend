import { type FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";

import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "pl" ? "en" : "pl");
    };

    return (
        <div className={classNames(cls.LangSwitcher, {}, [className])}>
            <Button type="button" onClick={toggle}>{t("Translate")}</Button>
        </div>
    );
};
