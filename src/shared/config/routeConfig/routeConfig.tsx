import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { type RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutePath: { [key: AppRoutes]: string } = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
};

export const routeConfig: { [key: AppRoutes]: RouteProps } = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },

    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
};
