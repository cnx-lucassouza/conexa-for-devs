import { useAuthContext } from '@/contexts/Auth'
import { useCountContext } from '@/contexts/Count'
import { Count } from '@/entities/Counter'
import { mockUseTranslation } from '@/i18n/mocks/i18test.mock'
import { render, waitFor } from '@testing-library/react'
import Home from '.'

const mockedIncrement = jest.fn()
const mockedDecrement = jest.fn()
const mockedReset = jest.fn()
const mockedUseCount = useCountContext as jest.Mock
const mockedUseAuth = useAuthContext as jest.Mock

jest.mock('@/contexts/Auth')
jest.mock('@/contexts/Count')

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return mockUseTranslation('pt')
  },
}))

describe('Home page', () => {
  beforeEach(() => {
    mockedUseCount.mockReturnValue({
      counter: Count.createCounter(0),
      increment: mockedIncrement,
      decrement: mockedDecrement,
      reset: mockedReset,
    })

    mockedUseAuth.mockReturnValue({
      token: '@ConexaToken',
    })
  })

  it('should render Home page with actions', async () => {
    const { getByText } = render(<Home />)

    const buttonDecrement = await waitFor(() => getByText('Decrementar'))
    const buttonIncrement = await waitFor(() => getByText('Incrementar'))
    const buttonReset = await waitFor(() => getByText('Limpar'))

    expect(buttonDecrement).toBeTruthy()
    expect(buttonIncrement).toBeTruthy()
    expect(buttonReset).toBeTruthy()
  })
})
