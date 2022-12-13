// Is just an example
import { FunctionComponent, ButtonHTMLAttributes } from 'react'
import useStyles from './styles'
import { SerializedStyles } from '@emotion/react'

export interface ButtonProps extends ButtonHTMLAttributes<null> {
  css?: SerializedStyles
}

const Button: FunctionComponent<ButtonProps> = ({ children, css, ...rest }) => {
  const { root } = useStyles()

  return (
    <button css={[root, css]} {...rest}>
      {children}
    </button>
  )
}

export default Button
