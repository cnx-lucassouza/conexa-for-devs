import { Fragment, FunctionComponent } from 'react'
import useHeight from '@/utils/useHeight'
import Router from '@/router'
import { MainContainer } from '@conexasaude/hero'
import useStyles from './styles/globalStyles'
import { Global } from '@emotion/react'

const App: FunctionComponent = () => {
  // used to work around 100vh problems
  const height = useHeight()
  const { root } = useStyles()

  return (
    <Fragment>
      <Global styles={root} />
      <MainContainer minHeight={height}>
        <Router />
      </MainContainer>
    </Fragment>
  )
}

export default App
