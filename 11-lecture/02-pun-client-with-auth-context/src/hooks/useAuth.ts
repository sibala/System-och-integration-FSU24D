import { useContext } from 'react'
import AuthContext from '../contexts/AuthContext'

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('AuthContext mus be used within the AuthProvider')
  }

  return context
}
