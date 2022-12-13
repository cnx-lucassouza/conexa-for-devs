import { SignInCredentials } from '@/contexts/Auth/types'
import api from '@/services/api'
import { UserLogged } from './types'

class AuthService {
  static async login(userData: SignInCredentials): Promise<UserLogged> {
    const { data } = await api.post('/login', userData)
    return data
  }
}

export default AuthService
