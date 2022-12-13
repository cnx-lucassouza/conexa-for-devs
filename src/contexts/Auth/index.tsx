import {
  createContext,
  useState,
  FunctionComponent,
  useContext,
  useCallback,
  useEffect,
} from 'react'
import { TOKEN_STORAGE_KEY, USER_STORAGE_KEY } from '@/constants'
import { encode, decode } from 'js-base64'
import { IAuthContext } from './types'
import AuthService from '@/services/AuthService'
import { StorageClient } from '@/services/storage'

const AuthContext = createContext<IAuthContext>(null)

export const AuthProvider: FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<IAuthContext['user']>(() => {
    const user = localStorage.getItem(USER_STORAGE_KEY)

    return user ? JSON.parse(decode(user)) : null
  })
  const [token, setToken] = useState<IAuthContext['token']>(null)
  const [loadingCredentials, setLoadingCredentials] = useState(true)

  useEffect(() => {
    StorageClient.onConnect()
      .then(() => {
        return StorageClient.get(TOKEN_STORAGE_KEY)
      })
      .then(token => setToken(token))
      .catch(error => {
        console.log('Error when get token from Conexa Storage>>', error)
      })
      .finally(() => {
        setLoadingCredentials(false)
      })
  }, [])

  const signIn = useCallback(async ({ email, password }) => {
    const { token, user } = await AuthService.login({ email, password })

    // TO USE CROSS STORAGE
    // await StorageClient.onConnect().then(() => {
    //   return StorageClient.set(TOKEN_STORAGE_KEY, token)
    // })

    localStorage.setItem(USER_STORAGE_KEY, encode(JSON.stringify(user)))

    setToken(token)
    setUser(user)
  }, [])

  const signOut = useCallback(async () => {
    await StorageClient.onConnect().then(() => {
      return StorageClient.del(TOKEN_STORAGE_KEY)
    })
    localStorage.removeItem(USER_STORAGE_KEY)

    setUser(null)
    setToken(null)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loadingCredentials,
        setToken,
        setUser,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = (): IAuthContext => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuthContext must be used within a AuthProvider')
  }
  return context
}
