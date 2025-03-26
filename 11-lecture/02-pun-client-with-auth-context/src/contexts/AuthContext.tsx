import { createContext, PropsWithChildren, useState } from "react"
import { User } from "../types/User"

type AuthContextType = {
  user: User | null,
  isLoading: boolean,
  login: () => void,
  logout: () => void,
  refreshToken: () => void
}

const AuthContext = createContext< AuthContextType | undefined>(undefined)


export const AuthProvider = ({children}: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>({username: "Admin"});
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const login = () => {}
  const logout = () => {}
  const refreshToken = () => {}

  return (
    <AuthContext.Provider value={{login,logout, refreshToken, user, isLoading}}>
      {children}
    </AuthContext.Provider>
  )
} 


export default AuthContext
