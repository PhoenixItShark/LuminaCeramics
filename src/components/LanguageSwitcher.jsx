import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageSwitcher({ className = '' }) {
  const { language, setLanguage, t, supportedLanguages } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t.nav.langLabel}
      className={`inline-flex items-center gap-1 rounded-full border border-secondary bg-white/60 backdrop-blur-sm p-1 ${className}`}
    >
      {supportedLanguages.map(({ code }) => {
        const isActive = language === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLanguage(code)}
            aria-pressed={isActive}
            aria-label={t.lang[code]}
            className={`min-w-[2.25rem] px-2.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
              isActive
                ? 'bg-accent text-white shadow-sm'
                : 'text-text/70 hover:text-accent'
            }`}
          >
            {t.lang[code]}
          </button>
        )
      })}
    </div>
  )
}
