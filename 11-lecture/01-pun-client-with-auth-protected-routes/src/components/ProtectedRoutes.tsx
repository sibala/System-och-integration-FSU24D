import React, { PropsWithChildren } from 'react'
import { Navigate } from 'react-router';

const ProtectedRoutes = ({children}: PropsWithChildren) => {
  const user = false;

  if (!user) {
    return <Navigate to="/login" />
  }
  
  return children;
}

export default ProtectedRoutes