import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router'

export const Login = () => {
  const {user, login, isLoading} = useAuth()

  if (!isLoading && user) {
    return <Navigate to="/" replace />
  }
  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  )
}
