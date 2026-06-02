import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Leaf } from 'lucide-react'

const links = [
  { href: '#about', label: 'О нас' },
  { href: '#collections', label: 'Коллекции' },
  { href: '#process', label: 'Процесс' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#contact', label: 'Контакты' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/85 backdrop-blur-md border-b border-secondary'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between"
        aria-label="Главная навигация"
      >
        <a
          href="#top"
          className="flex items-center gap-2 group"
          aria-label="Lumina Ceramics — на главную"
        >
          <span className="grid place-items-center w-9 h-9 rounded-full bg-accent/15 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
            <Leaf size={18} strokeWidth={1.8} />
          </span>
          <span className="font-heading text-lg md:text-xl font-semibold tracking-tight">
            Lumina <span className="text-accent">Ceramics</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-text/80 hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-[var(--radius-soft)] bg-accent text-white text-sm font-medium hover:bg-hover transition-colors"
          >
            Заказать
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          className="lg:hidden p-2 rounded-md text-text hover:bg-secondary/60"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-secondary bg-bg"
          >
            <ul className="px-5 py-4 flex flex-col gap-1">
              {links.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 px-3 rounded-lg text-text hover:bg-secondary/60 hover:text-accent transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block text-center py-3 rounded-[var(--radius-soft)] bg-accent text-white font-medium hover:bg-hover"
                >
                  Заказать
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
