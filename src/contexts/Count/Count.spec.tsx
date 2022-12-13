import { renderHook, act } from '@testing-library/react-hooks'
import { CountProvider, useCountContext } from '.'

describe('Count Context', () => {
  it('should initial state counter with 0', () => {
    const { result } = renderHook(useCountContext, {
      wrapper: CountProvider,
    })

    expect(result.current.counter.count).toBe(0)
  })

  it('should increment counter', () => {
    const { result } = renderHook(useCountContext, {
      wrapper: CountProvider,
    })

    act(() => {
      result.current.increment()
    })

    expect(result.current.counter.count).toBe(1)
  })

  it('should decrement counter', () => {
    const { result } = renderHook(useCountContext, {
      wrapper: CountProvider,
    })

    act(() => {
      result.current.decrement()
    })

    expect(result.current.counter.count).toBe(-1)
  })

  it('should reset counter', () => {
    const { result } = renderHook(useCountContext, {
      wrapper: CountProvider,
    })

    act(() => {
      result.current.increment()
    })

    act(() => {
      result.current.increment()
    })

    act(() => {
      result.current.increment()
    })

    act(() => {
      result.current.reset()
    })

    expect(result.current.counter.count).toBe(0)
  })
})
