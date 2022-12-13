import pt from '@/pages/Home/locales/pt.json'
import en from '@/pages/Home/locales/en.json'
import es from '@/pages/Home/locales/es.json'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mockUseTranslation = (lang: string): any => {
  const selectLang = {
    pt,
    en,
    es,
  }

  return {
    t: str => selectLang[lang][str],
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }
}
