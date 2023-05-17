import "./styles/index.scss";
import { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";

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
