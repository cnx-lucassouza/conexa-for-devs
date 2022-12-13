import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import resources from './resources'

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    debug: process.env.NODE_ENV === 'development',
    resources,
    interpolation: {
      escapeValue: false,
    },
    react: {
      bindI18n: 'LanguageChanged loaded',
      bindI18nStore: 'added removed',
      nsMode: 'default',
    },
    detection: {
      order: ['navigator'],
    },
  })

export default i18next
