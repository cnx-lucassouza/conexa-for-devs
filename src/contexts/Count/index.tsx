import { Count } from '@/entities/Counter'
import {
  createContext,
  useState,
  FunctionComponent,
  useContext,
  useCallback,
} from 'react'

export interface ICountContext {
  counter: Count
  increment(): void
  decrement(): void
  reset(): void
}

export const CountContext = createContext<ICountContext>(null)

export const CountProvider: FunctionComponent = ({ children }) => {
  const [counter, setCounter] = useState<Count>(Count.createCounter(0))

  const increment = useCallback(() => {
    setCounter(prevState => {
      return Count.createCounter(prevState.count + 1)
    })
  }, [])

  const decrement = useCallback(() => {
    setCounter(prevState => {
      return Count.createCounter(prevState.count - 1)
    })
  }, [])

  const reset = useCallback(() => {
    setCounter(Count.createCounter(0))
  }, [])

  return (
    <CountContext.Provider value={{ counter, increment, decrement, reset }}>
      {children}
    </CountContext.Provider>
  )
}

export const useCountContext = (): ICountContext => {
  const context = useContext(CountContext)
  if (!context) {
    throw new Error('useCountContext must be used within a CountProvider')
  }
  return context
}
