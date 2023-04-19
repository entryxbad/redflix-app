import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState
} from 'react'
import { View } from 'react-native'

import { IContext } from './auth-provider.interface'
import { TypeUserState } from './auth-provider.interface'

export const AuthContext = createContext({} as IContext)

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<TypeUserState>(null)

  useEffect(() => {
    let mounted = true

    const checkAccessToken = async () => {
      try {
      } catch {
      } finally {
      }
    }

    return () => {
      mounted = false
    }
  }, [])

  return <View>{children}</View>
}

export default AuthProvider
