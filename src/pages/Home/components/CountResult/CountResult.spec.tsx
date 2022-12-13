import { Count } from '@/entities/Counter'
import { render } from '@testing-library/react'
import CountResult from '.'

jest.mock('@/contexts/Count', () => {
  return {
    useCountContext: () => ({
      counter: Count.createCounter(2),
    }),
  }
})

describe('Count Result component', () => {
  it('should render the count result', () => {
    const { getByTestId } = render(<CountResult />)

    const counter = getByTestId('count')

    expect(counter).toHaveTextContent('2')
  })
})
