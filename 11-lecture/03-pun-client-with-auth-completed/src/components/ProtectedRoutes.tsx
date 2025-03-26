import { PropsWithChildren, useEffect} from 'react'
import { Navigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoutes = ({children}: PropsWithChildren) => {
  const {user, isLoading, refreshTokenHandler} = useAuth()

  useEffect(() => {
    refreshTokenHandler()
  }, [])

  if (!isLoading && !user) {
    return <Navigate to="/login" replace/>
  }
  
  return children;
}

export default ProtectedRoutes