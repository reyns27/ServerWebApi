import App from "./App";
import LoginPage from "./page/LoginPage";
import PageFound from "./page/PageFound";
import { RouteObject, useRoutes } from 'react-router-dom';
import RegisterPage from "./page/registerPage";
import DashboardView from "./page/views/Dashboard";
import HomePage from "./page/Home";
import ProtectedRoute from "./libs/ProtectedRoute";
import { useAuthStore } from "./state/AuthState";
import ProfileView from "./page/views/Profile";


const RouterManager = () => {
const isAuth = useAuthStore(state => state.isAuth);
const routerPath: RouteObject[] = [{
    path: '/',
    element: <App />,
    children: [
        {
            index: true,
            element: <LoginPage />,
        },
        {
            path: 'register',
            element: <RegisterPage />
        },
        {
            path: 'home',
            element: <ProtectedRoute isAllowed={isAuth} children={<HomePage />} />,
            children: [
                {
                    index: true,
                    element: <DashboardView />
                },
                {
                    path: 'profile',
                    element: <ProfileView />
                }
            ]
        },
        {
            path: '*',
            element: <PageFound />
        }
    ]
}]
const setRouterManager = useRoutes(routerPath);
return setRouterManager;
};
export default RouterManager;