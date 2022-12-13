import { FunctionComponent } from 'react'
import { useCountContext } from '@/contexts/Count'
import useStyles from './styles'

const CountResult: FunctionComponent = () => {
  const { counter } = useCountContext()
  const { countText } = useStyles()

  return (
    <span data-testid="count" css={countText}>
      {counter.count}
    </span>
  )
}

export default CountResult
