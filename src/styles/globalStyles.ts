import { makeStyles, css } from '@conexasaude/hero'
import { scrollbar } from './customScrollbar'

const useStyles = makeStyles({
  root: ({ typography, colors }) => {
    let fontStyles = ''
    for (let i = 0; i < 6; ++i) {
      const head = 'h' + i
      fontStyles += `
      ${head}{
        font-size: ${typography[head].fontSize};
        font-weight: ${typography[head].fontWeight};
        line-height: ${typography[head].lineHeight};
        letter-spacing: ${typography[head].letterSpacing};
      }
      `
    }

    return css`
      div,
      span {
        font-family: ${typography.body1.fontFamily}, sans-serif;
      }

      body,
      html {
        font-family: ${typography.body1.fontFamily};
        font-size: ${typography.body1.fontSize};
        font-weight: ${typography.body1.fontWeight};
        line-height: ${typography.body1.lineHeight};
        letter-spacing: ${typography.body1.letterSpacing};
        background: ${colors.extra.background};
      }

      body:fullscreen {
        overflow: auto;
      }
      body:-ms-fullscreen {
        overflow: auto;
      }
      body:-webkit-full-screen {
        overflow: auto;
      }
      body:-moz-full-screen {
        overflow: auto;
      }

      input[type='number']::-webkit-inner-spin-button,
      input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      ${fontStyles}

      ${scrollbar()}
    `
  },
})

export default useStyles
