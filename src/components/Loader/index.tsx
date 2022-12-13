import { FunctionComponent } from 'react'
import { Theme, Spinner } from '@conexasaude/hero'
import useStyles from './styles'
import { Interpolation } from '@emotion/react'

interface LoaderProps {
  css?: Interpolation<Theme>
}

const Loader: FunctionComponent<LoaderProps> = props => {
  const styles = useStyles()

  return (
    <div css={styles.root} {...props}>
      <Spinner size={40} />
    </div>
  )
}

export default Loader
