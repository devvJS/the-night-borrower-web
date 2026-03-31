import { motion } from 'framer-motion'
import Container from '../../layout/Container'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.15, duration: 0.6, ease: 'easeOut' as const },
  }),
}

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-screen scroll-mt-16 items-center overflow-hidden"
    >
      {/* Background layer */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-bg via-primary/40 to-bg"
        aria-hidden="true"
      />

      {/* Noise overlay layer */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Radial vignette overlay */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-bg)_100%)]"
        aria-hidden="true"
      />

      {/* Content container */}
      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="25 10 360 280"
          aria-hidden="true"
          data-testid="hero-glyph"
          className="mb-6 h-24 w-24"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-80px' }}
          custom={0}
        >
          <path
            fill="#D6D3C4"
            d="M348 95L319 117L284 133L249 144L202 151L154 142L117 130L81 113L47 88L78 63L112 45L149 34L197 30L246 37L274 31L267 44L242 53L197 44L151 53L118 65L86 79L58 90L86 102L118 115L151 127L197 133L242 127L278 115L313 102L337 95ZM195 151L193 268L206 271L208 151Z"
          />
        </motion.svg>

        <motion.h1
          className="font-heading text-5xl leading-tight text-text sm:text-6xl md:text-7xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-80px' }}
          custom={1}
        >
          The Night Borrower
        </motion.h1>

        <motion.p
          className="mt-4 max-w-lg text-lg text-secondary sm:text-xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-80px' }}
          custom={2}
        >
          Something watches while you sleep.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-80px' }}
          custom={3}
        >
          <button
            type="button"
            disabled
            className="inline-block cursor-not-allowed rounded border border-text bg-text/10 px-8 py-3 text-sm font-medium text-text/60"
          >
            You&rsquo;ll know when it&rsquo;s time.
          </button>
          <button
            type="button"
            disabled
            className="inline-block cursor-not-allowed rounded border border-secondary px-8 py-3 text-sm font-medium text-secondary/60"
          >
            Close your eyes. Not yet.
          </button>
        </motion.div>
      </Container>
    </section>
  )
}
