import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const { t } = useLanguage()

  const stats = [
    { n: t.hero.stat1n, t: t.hero.stat1t },
    { n: t.hero.stat2n, t: t.hero.stat2t },
    { n: t.hero.stat3n, t: t.hero.stat3t },
  ]

  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-20 -right-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-secondary/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/60 text-text/80 text-xs md:text-sm mb-6"
          >
            <Sparkles size={14} className="text-accent" />
            <span>{t.hero.badge}</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={1}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight"
          >
            {t.hero.title1}{' '}
            <span className="text-accent">{t.hero.titleAccent}</span>{' '}
            {t.hero.title2}
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={2}
            className="mt-6 text-base md:text-lg text-text/70 max-w-xl leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={3}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#collections"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[var(--radius-soft)] bg-accent text-white font-medium hover:bg-hover transition-colors shadow-sm"
            >
              {t.hero.btnCollection} <ArrowRight size={18} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[var(--radius-soft)] border border-secondary bg-transparent text-text font-medium hover:bg-secondary/50 transition-colors"
            >
              {t.hero.btnPhilosophy}
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={4}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md"
          >
            {stats.map(s => (
              <div key={s.t}>
                <div className="font-heading text-2xl md:text-3xl font-semibold text-accent">
                  {s.n}
                </div>
                <div className="text-xs md:text-sm text-text/60 mt-1">{s.t}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-[var(--radius-card)] overflow-hidden bg-secondary/40 shadow-[0_30px_80px_-30px_rgba(61,43,31,0.35)]">
            <img
              src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1200&q=80&auto=format&fit=crop"
              alt={t.hero.imageAlt}
              loading="eager"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/15 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute -bottom-6 -left-4 md:-left-8 bg-white p-4 md:p-5 rounded-[var(--radius-card)] shadow-lg max-w-[220px]"
          >
            <div className="flex items-center gap-2 text-accent mb-1">
              <Sparkles size={16} />
              <span className="text-xs font-medium uppercase tracking-wider">
                {t.hero.hit}
              </span>
            </div>
            <div className="font-heading text-base md:text-lg font-semibold">
              {t.hero.hitName}
            </div>
            <div className="text-xs text-text/60 mt-1">{t.hero.hitDesc}</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
