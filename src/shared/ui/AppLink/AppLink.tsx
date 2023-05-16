import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";

interface AppLinkProps extends LinkProps {
  className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { to, className, children, ...other } = props;

  return (
    <Link
      to={to}
      {...other}
      className={classNames(cls.AppLink, {}, [className])}
    >
      {children}
    </Link>
  );
};
