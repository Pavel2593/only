import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import { IRoutesItem } from "./types/RoutesItem";

export const RoutesItem: IRoutesItem[] = [
    {
        path: '/profile',
        Component: Profile,
    },
    {
        path: '/login',
        Component: Auth,
    }
]