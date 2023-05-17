import { Theme, useTheme } from "app/providers/ThemeProvider";
import { type FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";

import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            <div
                className={classNames(cls.iconWrapper, {
                    [cls.active]: theme === Theme.DARK,
                })}
            >
                <DarkIcon />
            </div>

            <div
                className={classNames(cls.iconWrapper, {
                    [cls.active]: theme === Theme.LIGHT,
                })}
            >
                <LightIcon />
            </div>
        </Button>
    );
};
