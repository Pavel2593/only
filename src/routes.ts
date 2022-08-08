import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import { IRoutesItem } from "./types/RoutesItem";

export const RoutesItem: IRoutesItem[] = [
    {
        path: '/only/profile',
        Component: Profile,
    },
    {
        path: '/only/login',
        Component: Auth,
    }
]