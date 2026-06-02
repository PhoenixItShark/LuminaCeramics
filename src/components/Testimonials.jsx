import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const reviews = [
  {
    quote:
      'Ваза Silence стала центром нашей гостиной. Качество и тактильность невероятные — видно, что в каждое изделие вложена душа.',
    name: 'Анна М.',
    city: 'Москва',
  },
  {
    quote:
      'Заказывал набор кружек Earth Mug для офиса. Коллеги не верят, что это ручная работа — настолько ровно и аккуратно всё сделано.',
    name: 'Дмитрий К.',
    city: 'Санкт-Петербург',
  },
  {
    quote:
      'Подарила маме миску Morning Bowl на день рождения. Она говорит, что теперь каждый завтрак — маленький ритуал. Спасибо за эту магию!',
    name: 'Елена С.',
    city: 'Казань',
  },
  {
    quote:
      'Доставка в крафте, продуманная упаковка, открытка с историей изделия — чувствуется внимание к деталям. Рекомендую всем.',
    name: 'Игорь В.',
    city: 'Екатеринбург',
  },
]

export default function Testimonials() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setI(p => (p + 1) % reviews.length), 5000)
    return () => clearInterval(t)
  }, [paused])

  const prev = () => setI(p => (p - 1 + reviews.length) % reviews.length)
  const next = () => setI(p => (p + 1) % reviews.length)

  return (
    <section
      id="reviews"
      className="py-20 md:py-28 bg-white/40 border-y border-secondary/40"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Отзывы
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-5xl font-semibold tracking-tight">
            Что говорят наши клиенты
          </h2>
        </motion.div>

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="relative bg-white rounded-[var(--radius-card)] border border-secondary/60 shadow-[0_20px_50px_-30px_rgba(61,43,31,0.3)] p-8 md:p-12 min-h-[280px] md:min-h-[260px]">
            <Quote
              className="absolute top-6 left-6 md:top-8 md:left-8 text-accent/15"
              size={48}
              strokeWidth={1.5}
              aria-hidden="true"
            />

            <AnimatePresence mode="wait">
              <motion.figure
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <blockquote className="text-lg md:text-2xl font-heading font-medium leading-relaxed text-text/90">
                  «{reviews[i].quote}»
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <div className="font-semibold text-text">{reviews[i].name}</div>
                    <div className="text-sm text-text/60">{reviews[i].city}</div>
                  </div>
                  <div
                    className="flex items-center gap-1 text-accent"
                    aria-label="Оценка 5 из 5"
                  >
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} size={16} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="w-10 h-10 grid place-items-center rounded-full border border-secondary hover:bg-secondary/60 transition-colors"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2" role="tablist">
              {reviews.map((_, k) => (
                <button
                  type="button"
                  key={k}
                  onClick={() => setI(k)}
                  role="tab"
                  aria-selected={k === i}
                  aria-label={`Перейти к отзыву ${k + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    k === i
                      ? 'w-8 bg-accent'
                      : 'w-2 bg-secondary hover:bg-accent/40'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="w-10 h-10 grid place-items-center rounded-full border border-secondary hover:bg-secondary/60 transition-colors"
              aria-label="Следующий отзыв"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
