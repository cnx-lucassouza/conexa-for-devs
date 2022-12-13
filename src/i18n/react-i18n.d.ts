// import the original type declarations
import 'react-i18next'
// import all namespaces (for the default language, only)
import resources from './resources'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: typeof resources.pt
  }
}
