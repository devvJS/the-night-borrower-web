import { motion } from 'framer-motion'
import Container from '../../layout/Container'
import { characters } from '../../data/characters'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' as const },
  }),
}

const portraitMap: Record<string, string> = {
  shadow: '▓',
  glasses: '◉',
  eye: '◈',
  moon: '☽',
}

export default function Characters() {
  return (
    <section id="characters" aria-label="Characters" className="scroll-mt-16 border-t border-primary py-24">
      <Container>
        <motion.h2
          className="font-heading text-3xl text-text"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-80px' }}
          custom={0}
        >
          Characters
        </motion.h2>
        <motion.p
          className="mt-2 text-sm uppercase tracking-widest text-secondary"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-80px' }}
          custom={1}
        >
          The people you will meet
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {characters.map((character, i) => (
            <motion.article
              key={character.id}
              className="rounded border border-primary bg-primary/5 p-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: '-80px' }}
              custom={i + 2}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-primary text-2xl text-secondary">
                {portraitMap[character.portrait] ?? '?'}
              </div>
              <h3 className="font-heading text-lg text-text">{character.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-widest text-secondary">{character.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-secondary">{character.description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
