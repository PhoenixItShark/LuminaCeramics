import { motion } from 'framer-motion'
import { Beaker, CircleDot, Flame, Droplets, Package } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const stepConfig = [
  { key: 'clay', icon: Beaker },
  { key: 'wheel', icon: CircleDot },
  { key: 'fire1', icon: Flame },
  { key: 'glaze', icon: Droplets },
  { key: 'fire2', icon: Flame },
  { key: 'pack', icon: Package },
]

export default function Process() {
  const { t } = useLanguage()

  const steps = stepConfig.map(s => ({
    ...s,
    title: t.process.steps[s.key].title,
    text: t.process.steps[s.key].text,
  }))

  return (
    <section id="process" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 md:mb-16"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            {t.process.label}
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-5xl font-semibold tracking-tight">
            {t.process.title}
          </h2>
          <p className="mt-4 text-text/70 text-base md:text-lg">
            {t.process.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/0 via-accent/30 to-accent/0"
            aria-hidden="true"
          />

          <ol className="space-y-8 md:space-y-14">
            {steps.map((s, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.li
                  key={s.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  className={`relative grid md:grid-cols-2 gap-6 md:gap-12 items-center pl-14 md:pl-0 ${
                    isEven ? '' : 'md:[&>*:first-child]:order-2'
                  }`}
                >
                  <div
                    className={`${isEven ? 'md:text-right md:pr-10' : 'md:pl-10'}`}
                  >
                    <div
                      className={`inline-flex items-center gap-3 ${
                        isEven ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      <span className="font-heading text-3xl md:text-4xl font-semibold text-accent/30">
                        0{i + 1}
                      </span>
                      <h3 className="font-heading text-xl md:text-2xl font-semibold">
                        {s.title}
                      </h3>
                    </div>
                    <p
                      className={`mt-3 text-text/70 text-sm md:text-base leading-relaxed max-w-md ${
                        isEven ? 'md:ml-auto' : ''
                      }`}
                    >
                      {s.text}
                    </p>
                  </div>

                  <div
                    className={`hidden md:flex ${
                      isEven ? 'justify-start pl-10' : 'justify-end pr-10'
                    }`}
                  >
                    <div className="w-32 h-32 rounded-[var(--radius-card)] bg-secondary/40 grid place-items-center text-accent">
                      <s.icon size={48} strokeWidth={1.5} />
                    </div>
                  </div>

                  <span
                    className="absolute left-5 md:left-1/2 top-1 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-10 h-10 rounded-full bg-accent text-white grid place-items-center shadow-md ring-4 ring-bg"
                    aria-hidden="true"
                  >
                    <s.icon size={18} strokeWidth={2} className="md:hidden" />
                    <span className="hidden md:inline font-heading text-sm font-semibold">
                      {i + 1}
                    </span>
                  </span>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
