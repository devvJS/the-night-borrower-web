import { motion } from 'framer-motion'
import Container from '../../layout/Container'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' as const },
  }),
}

export default function About() {
  return (
    <section id="about" aria-label="About" className="scroll-mt-16 border-t border-primary py-24">
      <Container>
        <motion.h2
          className="font-heading text-3xl text-text"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-80px' }}
          custom={0}
        >
          About the Game
        </motion.h2>
        <motion.p
          className="mt-2 text-sm uppercase tracking-widest text-secondary"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-80px' }}
          custom={1}
        >
          A first-person psychological survival horror experience
        </motion.p>

        <div className="mt-10 grid gap-12 lg:grid-cols-[2fr_1fr]">
          {/* Narrative column */}
          <motion.div
            className="space-y-6 text-secondary leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: '-80px' }}
            custom={2}
          >
            <p>
              The Night Borrower is a first-person psychological survival horror game
              set in a quiet bookstore in the Pacific Northwest, sometime in the early 1990s.
              You are the new night clerk — hired to sort, shelve, and close up alone.
            </p>
            <p>
              The store feels wrong after dark. Books move between visits. Handwriting
              appears in margins you know were blank. The back hallway stretches longer
              than it should, and something behind the walls keeps pace with your footsteps.
            </p>
            <p>
              There is no combat. There is no rescue. There is only the growing
              realization that whatever lives inside the store has been waiting for
              someone exactly like you — and it borrows more than books.
            </p>
          </motion.div>

          {/* Sidebar column */}
          <motion.aside
            className="rounded border border-primary bg-primary/5 p-6 lg:self-start"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: '-80px' }}
            custom={3}
          >
            <h3 className="font-heading text-lg text-text">Setting</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="uppercase tracking-widest text-secondary">Location</dt>
                <dd className="mt-1 text-text">Small-town bookstore</dd>
              </div>
              <div>
                <dt className="uppercase tracking-widest text-secondary">Era</dt>
                <dd className="mt-1 text-text">Pacific Northwest, 1990s</dd>
              </div>
              <div>
                <dt className="uppercase tracking-widest text-secondary">Genre</dt>
                <dd className="mt-1 text-text">Psychological survival horror</dd>
              </div>
              <div>
                <dt className="uppercase tracking-widest text-secondary">Perspective</dt>
                <dd className="mt-1 text-text">First-person</dd>
              </div>
            </dl>
          </motion.aside>
        </div>
      </Container>
    </section>
  )
}
