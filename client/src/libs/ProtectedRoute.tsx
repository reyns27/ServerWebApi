import React from 'react';
import NotAuthPage from '../page/NotAuth';
import { Outlet } from 'react-router-dom';

interface Props {
    isAllowed: boolean;
    children: React.ReactNode;
};

const ProtectedRoute = ({ isAllowed, children }: Props) => {
    if (!isAllowed) return <NotAuthPage />
    return children ? <>{children}</> : <Outlet />
}

export default ProtectedRoute