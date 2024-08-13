import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import NotAuthPage from '../page/NotAuth';

interface Props {
    isAllowed: boolean;
    children: React.ReactNode;
};

const ProtectedRoute = ({ isAllowed, children }: Props) => {
    if (!isAllowed) return <NotAuthPage />
    return children ? <>{children}</> : <Outlet />
}

export default ProtectedRoute