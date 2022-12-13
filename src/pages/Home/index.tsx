import { FunctionComponent } from 'react'
import useStyles from './styles'
import { useCountContext } from '@/contexts/Count'
import CountResult from './components/CountResult'
import { Button, PageContainer } from '@conexasaude/hero'
import { useTranslation } from 'react-i18next'
import { useAuthContext } from '@/contexts/Auth'

const Home: FunctionComponent = () => {
  const { token } = useAuthContext()
  const { counter, decrement, increment, reset } = useCountContext()
  const { container, resetButton } = useStyles()
  const { t } = useTranslation('home')

  return (
    <PageContainer>
      <h1>{token ? t('loggedOut') : t('loggedOut')}</h1>
      <div css={container}>
        <Button
          onClick={decrement}
          variant="outlined"
          disabled={!counter.canDecrement()}
        >
          {t('decrement')}
        </Button>
        <CountResult />
        <Button
          onClick={increment}
          variant="outlined"
          data-testid="increment-btn"
        >
          {t('increment')}
        </Button>
        <Button onClick={reset} css={resetButton}>
          {t('reset')}
        </Button>
      </div>
    </PageContainer>
  )
}

export default Home
