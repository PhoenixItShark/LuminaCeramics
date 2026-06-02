import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const products = [
  {
    name: 'Morning Bowl',
    desc: 'Глубокая миска для завтраков и ритуалов утра',
    price: '3 500 ₽',
    img: 'https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=900&q=80&auto=format&fit=crop',
  },
  {
    name: 'Silence Vase',
    desc: 'Высокая ваза с матовой глазурью цвета песка',
    price: '8 900 ₽',
    img: 'https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?w=900&q=80&auto=format&fit=crop',
  },
  {
    name: 'Earth Mug',
    desc: 'Тактильная кружка объёмом 320 мл с удобной ручкой',
    price: '2 400 ₽',
    img: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=900&q=80&auto=format&fit=crop',
  },
  {
    name: 'Dusk Plate',
    desc: 'Плоская тарелка с переливом глазури в сумерках',
    price: '4 200 ₽',
    img: 'https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=900&q=80&auto=format&fit=crop',
  },
]

export default function Collections() {
  return (
    <section
      id="collections"
      className="py-20 md:py-28 bg-white/40 border-y border-secondary/40"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16"
        >
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Каталог
            </span>
            <h2 className="mt-3 font-heading text-3xl md:text-5xl font-semibold tracking-tight">
              Коллекции
            </h2>
          </div>
          <p className="text-text/70 max-w-md text-sm md:text-base">
            Каждое изделие создаётся небольшой партией. Следите за пополнениями — некоторые позиции появляются всего раз в сезон.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: (i % 2) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-[var(--radius-card)] bg-secondary/30 hover:shadow-[0_25px_60px_-25px_rgba(61,43,31,0.4)] transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary/40">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-text/60 via-text/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-text text-sm font-medium shadow-lg hover:bg-accent hover:text-white transition-colors"
                >
                  Подробнее <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="p-5 md:p-6 bg-white">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-lg md:text-xl font-semibold">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm text-text/60 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-[10px] uppercase tracking-wider text-text/40">
                      от
                    </div>
                    <div className="font-heading text-lg md:text-xl font-semibold text-accent">
                      {p.price}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
