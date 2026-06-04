import { Instagram, Send, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#collections', label: t.nav.collections },
    { href: '#process', label: t.nav.process },
    { href: '#reviews', label: t.nav.reviews },
  ]

  return (
    <footer className="border-t border-secondary/60 bg-bg pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="grid place-items-center w-9 h-9 rounded-full bg-accent/15 text-accent">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M12 2C8 2 6 5 6 8c0 2 1 3 2 4v8c0 1 1 2 2 2h4c1 0 2-1 2-2v-8c1-1 2-2 2-4 0-3-2-6-6-6z" />
                  <path d="M9 14c1 0 2 0 3-1M15 14c-1 0-2 0-3-1" />
                </svg>
              </span>
              <span className="font-heading text-lg font-semibold">
                Lumina Ceramics
              </span>
            </div>
            <p className="text-sm text-text/60 leading-relaxed max-w-xs">
              {t.footer.desc}
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2.5 text-sm text-text/70">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-accent transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4">
              {t.footer.contactsTitle}
            </h4>
            <ul className="space-y-2.5 text-sm text-text/70">
              <li className="flex items-start gap-2">
                <MapPin
                  size={16}
                  className="mt-0.5 text-accent shrink-0"
                  aria-hidden="true"
                />
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent shrink-0" aria-hidden="true" />
                <a
                  href="mailto:hello@luminaceramics.com"
                  className="hover:text-accent transition-colors"
                >
                  hello@luminaceramics.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Send size={16} className="text-accent shrink-0" aria-hidden="true" />
                <a
                  href="tel:+380000000000"
                  className="hover:text-accent transition-colors"
                >
                  +380 (00) 000-00-00
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4">
              {t.footer.socialTitle}
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 grid place-items-center rounded-full border border-secondary text-text/70 hover:bg-accent hover:text-white hover:border-accent transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-10 h-10 grid place-items-center rounded-full border border-secondary text-text/70 hover:bg-accent hover:text-white hover:border-accent transition-colors"
              >
                <Send size={18} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="w-10 h-10 grid place-items-center rounded-full border border-secondary text-text/70 hover:bg-accent hover:text-white hover:border-accent transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 0-2.9.2-.8 1.3-5.4 1.3-5.4s-.3-.7-.3-1.6c0-1.5.9-2.7 2-2.7.9 0 1.4.7 1.4 1.5 0 .9-.6 2.3-.9 3.6-.3 1.1.5 2 1.6 2 1.9 0 3.4-2 3.4-5 0-2.6-1.9-4.4-4.5-4.4-3.1 0-4.9 2.3-4.9 4.7 0 .9.4 1.9.8 2.5.1.1.1.2.1.3-.1.4-.3 1.1-.3 1.3 0 .2-.2.3-.4.2-1.4-.7-2.3-2.7-2.3-4.4 0-3.6 2.6-6.9 7.5-6.9 3.9 0 7 2.8 7 6.6 0 3.9-2.5 7-5.9 7-1.2 0-2.3-.6-2.6-1.3 0 0-.6 2.2-.7 2.7-.3 1-1 2.3-1.4 3.1.9.3 1.9.4 2.9.4 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-xs text-text/50">{t.footer.socialDesc}</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-secondary/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text/50">
          <p>© {year} Lumina Ceramics. {t.footer.rights}</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-accent transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              {t.footer.offer}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
