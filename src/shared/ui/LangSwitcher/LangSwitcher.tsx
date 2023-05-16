import { FC } from "react";
import cls from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

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
      <button onClick={toggle}>{t("Translate")}</button>
    </div>
  );
};
