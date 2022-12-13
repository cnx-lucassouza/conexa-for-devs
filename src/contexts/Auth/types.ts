import { Dispatch, SetStateAction } from 'react'
import { IUser } from '@/types'

export type TokenType = string

export interface SignInCredentials {
  email: string
  password: string
}

export interface IAuthContext {
  token: TokenType | null
  user: IUser | null
  loadingCredentials: boolean
  setToken: Dispatch<SetStateAction<IAuthContext['token']>>
  setUser: Dispatch<SetStateAction<IAuthContext['user']>>
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
}
