import { motion } from 'framer-motion'
import Container from '../../layout/Container'
import { features } from '../../data/features'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' as const },
  }),
}

const iconMap: Record<string, string> = {
  eye: '👁',
  pencil: '✎',
  flame: '🕯',
  moon: '☽',
}

export default function Features() {
  return (
    <section id="features" aria-label="Features" className="scroll-mt-16 border-t border-primary bg-primary/5 py-24">
      <Container>
        <motion.h2
          className="font-heading text-3xl text-text"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-80px' }}
          custom={0}
        >
          Features
        </motion.h2>
        <motion.p
          className="mt-2 text-sm uppercase tracking-widest text-secondary"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-80px' }}
          custom={1}
        >
          What awaits you inside
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.article
              key={feature.id}
              className="rounded border border-primary bg-bg/50 p-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: '-80px' }}
              custom={i + 2}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded border border-primary text-2xl text-secondary">
                {iconMap[feature.icon] ?? '?'}
              </div>
              <h3 className="font-heading text-lg text-text">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
