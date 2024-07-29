import App from "./App";
import LoginPage from "./page/LoginPage";
import PageFound from "./page/PageFound";
import { RouteObject, useRoutes } from 'react-router-dom';
//import { useAuthStore } from "./state/AuthState";


const RouterManager = () => {
//const isAuth = useAuthStore(state => state.isAuth);
const routerPath: RouteObject[] = [{
    path: '/',
    element: <App />,
    children: [
        {
            index: true,
            element: <LoginPage />,
        },
        /*{
            path: '/Dashboard',
            element: <ProtectedRoute isAllowed={isAuth} children={<Dashboard />} />,
            children: [
                {
                    index: true,
                    element: <RoomsChat />
                },
                {
                    path: 'chat',
                    element: <ChatComponent />
                }
            ]
        },*/
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