import { motion } from 'framer-motion'
import Container from '../../layout/Container'
import { screenshots } from '../../data/screenshots'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' as const },
  }),
}

export default function Screenshots() {
  return (
    <section id="screenshots" aria-label="Screenshots" className="scroll-mt-16 border-t border-primary bg-primary/5 py-24">
      <Container>
        <motion.h2
          className="font-heading text-3xl text-text"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-80px' }}
          custom={0}
        >
          Screenshots
        </motion.h2>
        <motion.p
          className="mt-2 text-sm uppercase tracking-widest text-secondary"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-80px' }}
          custom={1}
        >
          Glimpses from the darkness
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {screenshots.map((screenshot, i) => (
            <motion.figure
              key={screenshot.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: '-80px' }}
              custom={i + 2}
            >
              <div
                className="flex aspect-video items-center justify-center rounded border border-primary bg-bg/80"
                role="img"
                aria-label={screenshot.alt}
              >
                <span className="text-xs uppercase tracking-widest text-secondary/50">Image placeholder</span>
              </div>
              <figcaption className="mt-2 text-sm text-secondary">{screenshot.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
