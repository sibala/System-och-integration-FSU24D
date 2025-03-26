import { PropsWithChildren} from 'react'
import { Navigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoutes = ({children}: PropsWithChildren) => {
  const {user} = useAuth()

  if (!user) {
    return <Navigate to="/login" replace/>
  }
  
  return children;
}

export default ProtectedRoutes