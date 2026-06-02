import { motion } from 'framer-motion'
import { Hand, Leaf, Clock } from 'lucide-react'

const items = [
  {
    icon: Hand,
    title: 'Ручная работа',
    text: 'Никакого конвейера. Каждое изделие проходит через руки мастера — от первого прикосновения к глине до финального обжига. Уникальность в каждом изгибе.',
  },
  {
    icon: Leaf,
    title: 'Экологичность',
    text: 'Натуральная глина без свинца и токсичных глазурей. Перерабатываемая крафт-упаковка. Мы думаем о следующем поколении, не только о вашем интерьере.',
  },
  {
    icon: Clock,
    title: 'Осознанность',
    text: 'Керамика — это инструмент замедления. В мире бесконечных уведомлений мы создаём вещи, к которым хочется возвращаться и держать в руках.',
  },
]

export default function Philosophy() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 md:mb-16"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            О нас
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-5xl font-semibold tracking-tight">
            Три принципа мастерской
          </h2>
          <p className="mt-4 text-text/70 text-base md:text-lg">
            Мы верим, что керамика — это диалог между материалом, мастером и тем, кто будет ею пользоваться каждый день.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-7 md:p-8 rounded-[var(--radius-card)] bg-white border border-secondary/60 hover:border-accent/40 hover:shadow-[0_20px_50px_-25px_rgba(168,123,91,0.5)] transition-all"
            >
              <div className="w-12 h-12 rounded-[var(--radius-soft)] bg-accent/10 text-accent grid place-items-center mb-5 group-hover:bg-accent group-hover:text-white transition-colors">
                <it.icon size={22} strokeWidth={1.8} />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-semibold mb-3">
                {it.title}
              </h3>
              <p className="text-text/70 text-sm md:text-base leading-relaxed">
                {it.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
