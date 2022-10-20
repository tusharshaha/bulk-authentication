import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from 'src/redux/store';

const ProtectedRoute: React.FC = () => {
    const { userName } = useSelector((state: RootState) => state.users.value)
    return userName ? <Outlet /> : <Navigate to="/login" />
};

export default ProtectedRoute;