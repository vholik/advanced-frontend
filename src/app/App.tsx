import "./styles/index.scss";
import { Suspense } from "react";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Sidebar />
        <div className="content-page">
          <Navbar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
