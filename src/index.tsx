import { FunctionComponent, StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import './i18n'

import { AuthProvider } from './contexts/Auth'
import { CountProvider } from './contexts/Count'
import { ResetStyles } from '@conexasaude/hero'

// import { ThemeProvider } from '@conexasaude/hero'
// import theme from '@/theme'

const Index: FunctionComponent = () => (
  <StrictMode>
    <ResetStyles />
    <BrowserRouter>
      {/* <ThemeProvider theme={theme}>  */
      /* read src/theme.ts file for more */}
      <AuthProvider>
        <CountProvider>
          <App />
        </CountProvider>
      </AuthProvider>
      {/* </ThemeProvider> */}
    </BrowserRouter>
  </StrictMode>
)

ReactDOM.render(<Index />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
