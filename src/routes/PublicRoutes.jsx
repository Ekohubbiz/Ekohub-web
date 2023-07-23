import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Auth from '../middleware/storage';
import { paths } from '../constants';

export default function PublicRoutes() {
  if (!Auth.isAuthenticated()) {
    return <Outlet />;
  }
  return <Navigate to={paths.PROFILE} />;
}
