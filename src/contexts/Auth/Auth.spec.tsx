import { USER_STORAGE_KEY } from '@/constants'
import { renderHook, act } from '@testing-library/react-hooks'
import { encode } from 'js-base64'
import { AuthProvider, useAuthContext } from '.'
import api from '@/services/api'
import AxiosMock from 'axios-mock-adapter'
import { initalUserMock, localStorageMock, userResponseDataMock } from './mock'

const apiMock = new AxiosMock(api)

describe('Auth Context test', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should initial user state is null', async () => {
    const { result } = renderHook(useAuthContext, {
      wrapper: AuthProvider,
    })

    expect(result.current.user).toBe(null)
  })

  it('should initial user state with localStorage data', async () => {
    Object.defineProperty(window, 'localStorage', { value: localStorageMock })

    localStorage.setItem(
      USER_STORAGE_KEY,
      encode(JSON.stringify(initalUserMock)),
    )

    const { result } = renderHook(useAuthContext, {
      wrapper: AuthProvider,
    })

    expect(result.current.user).toMatchObject(initalUserMock)
  })

  it('should be able to login with email and password', async () => {
    apiMock.onPost('/login').reply(200, {
      token: '@C0n3x4T0k3n',
      user: userResponseDataMock,
    })

    const { result, waitForNextUpdate } = renderHook(useAuthContext, {
      wrapper: AuthProvider,
    })

    act(() => {
      result.current.signIn({
        email: 'conexa.user@mail.com',
        password: '123456',
      })
    })

    expect(result.current.user).toBe(null)

    await waitForNextUpdate()

    expect(result.current.user).toMatchObject(userResponseDataMock)
  })
})
