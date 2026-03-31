import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '../../layout/Container'
import { devlogEntries } from '../../data/devlog'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' as const },
  }),
}

const bodyReveal = {
  initial: { height: 0, opacity: 0 },
  animate: {
    height: 'auto',
    opacity: 1,
    transition: { height: { duration: 0.6, ease: 'easeInOut' as const }, opacity: { duration: 0.5, delay: 0.15 } },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { opacity: { duration: 0.3 }, height: { duration: 0.5, ease: 'easeInOut' as const, delay: 0.1 } },
  },
}

export default function Devlog() {
  const [openId, setOpenId] = useState<string | null>(null)

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="devlog" aria-label="Development log" className="scroll-mt-16 border-t border-primary py-24">
      <Container>
        <motion.h2
          className="font-heading text-3xl text-text"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-80px' }}
          custom={0}
        >
          Development Log
        </motion.h2>
        <motion.p
          className="mt-2 text-sm uppercase tracking-widest text-secondary"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-80px' }}
          custom={1}
        >
          Recovered notes from an ongoing excavation
        </motion.p>

        <div className="relative mt-10">
          {/* Timeline spine */}
          <div className="absolute left-3 top-0 hidden h-full w-px bg-primary sm:block" aria-hidden="true" />

          <div className="space-y-6">
            {devlogEntries.map((entry, i) => {
              const isOpen = openId === entry.id
              return (
                <motion.article
                  key={entry.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ margin: '-80px' }}
                  custom={i + 2}
                  className="relative sm:pl-10"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-1.5 top-1.5 hidden h-3 w-3 rounded-full border border-primary bg-bg sm:block"
                    aria-hidden="true"
                  />

                  <button
                    type="button"
                    onClick={() => toggle(entry.id)}
                    aria-expanded={isOpen}
                    className="w-full cursor-pointer rounded border border-primary bg-primary/5 p-6 text-left transition-colors duration-300 hover:bg-primary/10"
                  >
                    <time className="text-xs uppercase tracking-widest text-secondary">{entry.date}</time>
                    <h3 className="mt-2 font-heading text-lg text-text">{entry.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-secondary">{entry.summary}</p>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key={`body-${entry.id}`}
                        variants={bodyReveal}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="overflow-hidden"
                      >
                        <div className="border-x border-b border-primary bg-primary/5 px-6 pb-6 pt-4">
                          <p className="text-sm leading-relaxed text-text/80">{entry.body}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
