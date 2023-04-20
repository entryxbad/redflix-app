import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState
} from 'react'

import { IUser } from '@/shared/types/user.interface'

import { IContext } from './auth-provider.interface'
import { TypeUserState } from './auth-provider.interface'

export const AuthContext = createContext({} as IContext)

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<TypeUserState>({} as IUser)

  useEffect(() => {
    let mounted = true

    const checkAccessToken = async () => {
      try {
      } catch {
      } finally {
        // setTimeout(() => {
        //   SplashScreen.hide()
        // }, 3000)
      }
    }

    return () => {
      mounted = false
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
