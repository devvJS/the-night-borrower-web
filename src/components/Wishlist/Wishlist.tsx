import { motion } from 'framer-motion'
import Container from '../../layout/Container'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.25, duration: 0.8, ease: 'easeOut' as const },
  }),
}

export default function Wishlist() {
  return (
    <section id="wishlist" aria-label="Wishlist" className="relative scroll-mt-16 overflow-hidden border-t border-primary bg-primary/5 py-32 sm:py-40">
      {/* Glyph watermark — anchored to section, centered behind everything */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="350 260 340 980"
        aria-hidden="true"
        data-testid="glyph-watermark"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[500px] w-auto -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.07]"
      >
        <path
          fill="#D6D3C4"
          d="M509 276L429 414L423 402L369 465L409 449L406 489L491 370L490 654L396 573L393 591L347 535L375 597L491 714L491 769L361 666L492 817L489 876L439 840L444 870L487 911L430 964L427 993L490 948L490 1003L364 1120L414 1107L406 1139L489 1049L512 1236L525 1140L531 1167L534 1050L617 1140L609 1104L661 1118L536 1009L537 952L596 1002L591 964L535 912L578 872L584 840L535 875L538 797L653 702L663 664L537 764L537 695L658 586L676 535L536 651L527 356L593 458L597 424L617 488L617 453L653 465L564 364L561 385Z"
        />
      </svg>

      <Container className="relative z-10 text-center">

        <motion.h2
          className="relative font-heading text-3xl text-text sm:text-4xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-80px' }}
          custom={0}
        >
          Don&rsquo;t Look Away
        </motion.h2>

        <motion.p
          className="relative mt-4 text-sm uppercase tracking-widest text-secondary"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-80px' }}
          custom={1}
        >
          It isn&rsquo;t finished yet. But it will find you when it is.
        </motion.p>

        <motion.div
          className="relative mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-80px' }}
          custom={3}
        >
          <button
            type="button"
            disabled
            className="inline-block cursor-not-allowed rounded border border-primary px-8 py-3 text-sm tracking-wide text-secondary/60"
          >
            The path is not yet open.
          </button>
        </motion.div>
      </Container>
    </section>
  )
}
