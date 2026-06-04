import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, User, Send, Check } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Newsletter() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = t.newsletter.errName
    if (!form.email.trim()) e.email = t.newsletter.errEmailRequired
    else if (!emailRegex.test(form.email)) e.email = t.newsletter.errEmailInvalid
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = ev => {
    ev.preventDefault()
    if (!validate()) return
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '' })
    }, 1200)
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[var(--radius-card)] bg-accent text-white p-8 md:p-14 lg:p-20"
        >
          <div
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-hover/40 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                {t.newsletter.label}
              </span>
              <h2 className="mt-3 font-heading text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                {t.newsletter.title}
              </h2>
              <p className="mt-4 text-white/80 text-base md:text-lg max-w-md">
                {t.newsletter.subtitle}
              </p>
            </div>

            <div className="w-full">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-[var(--radius-card)] p-7 text-center"
                  >
                    <div className="w-14 h-14 mx-auto rounded-full bg-white text-accent grid place-items-center mb-4">
                      <Check size={28} strokeWidth={2.5} />
                    </div>
                    <h3 className="font-heading text-2xl font-semibold">
                      {t.newsletter.successTitle}
                    </h3>
                    <p className="mt-2 text-white/80">{t.newsletter.successText}</p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="mt-5 text-sm text-white/80 underline underline-offset-4 hover:text-white"
                    >
                      {t.newsletter.anotherAddress}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    noValidate
                    className="space-y-3"
                  >
                    <div>
                      <label htmlFor="nl-name" className="sr-only">
                        {t.newsletter.nameLabel}
                      </label>
                      <div className="relative">
                        <User
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-text/50"
                        />
                        <input
                          id="nl-name"
                          type="text"
                          placeholder={t.newsletter.namePlaceholder}
                          value={form.name}
                          onChange={e =>
                            setForm(f => ({ ...f, name: e.target.value }))
                          }
                          className="w-full pl-11 pr-4 py-3.5 rounded-[var(--radius-soft)] bg-white text-text placeholder:text-text/40 focus:outline-none focus:ring-2 focus:ring-white"
                          aria-invalid={!!errors.name}
                          aria-describedby={
                            errors.name ? 'nl-name-err' : undefined
                          }
                          disabled={status === 'loading'}
                        />
                      </div>
                      {errors.name && (
                        <p
                          id="nl-name-err"
                          className="mt-1.5 text-xs text-white/90 bg-white/15 inline-block px-2 py-0.5 rounded"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="nl-email" className="sr-only">
                        {t.newsletter.emailLabel}
                      </label>
                      <div className="relative">
                        <Mail
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-text/50"
                        />
                        <input
                          id="nl-email"
                          type="email"
                          placeholder={t.newsletter.emailPlaceholder}
                          value={form.email}
                          onChange={e =>
                            setForm(f => ({ ...f, email: e.target.value }))
                          }
                          className="w-full pl-11 pr-4 py-3.5 rounded-[var(--radius-soft)] bg-white text-text placeholder:text-text/40 focus:outline-none focus:ring-2 focus:ring-white"
                          aria-invalid={!!errors.email}
                          aria-describedby={
                            errors.email ? 'nl-email-err' : undefined
                          }
                          disabled={status === 'loading'}
                        />
                      </div>
                      {errors.email && (
                        <p
                          id="nl-email-err"
                          className="mt-1.5 text-xs text-white/90 bg-white/15 inline-block px-2 py-0.5 rounded"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[var(--radius-soft)] bg-text text-bg font-medium hover:bg-hover hover:text-white transition-colors disabled:opacity-70"
                    >
                      {status === 'loading' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-bg/40 border-t-bg rounded-full animate-spin" />
                          {t.newsletter.loading}
                        </>
                      ) : (
                        <>
                          {t.newsletter.submit} <Send size={16} />
                        </>
                      )}
                    </button>
                    <p className="text-xs text-white/70 text-center pt-1">
                      {t.newsletter.privacy}
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
