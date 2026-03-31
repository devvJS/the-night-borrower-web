import { motion } from 'framer-motion'

const fade = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: 0.4 + i * 0.6, duration: 1.2, ease: 'easeOut' as const },
  }),
}

export default function ComingSoon() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background layer */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-bg via-primary/40 to-bg"
        aria-hidden="true"
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-bg)_100%)]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="25 10 360 280"
          aria-hidden="true"
          data-testid="coming-soon-glyph"
          className="mb-6 h-20 w-20"
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <path
            fill="#D6D3C4"
            d="M348 95L319 117L284 133L249 144L202 151L154 142L117 130L81 113L47 88L78 63L112 45L149 34L197 30L246 37L274 31L267 44L242 53L197 44L151 53L118 65L86 79L58 90L86 102L118 115L151 127L197 133L242 127L278 115L313 102L337 95ZM195 151L193 268L206 271L208 151Z"
          />
        </motion.svg>

        <motion.h1
          className="font-heading text-4xl leading-tight text-text sm:text-5xl"
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          The Night Borrower
        </motion.h1>

        <motion.p
          className="mt-4 max-w-lg text-lg text-secondary sm:text-xl"
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          It isn&rsquo;t ready for you yet.
        </motion.p>

        <motion.p
          className="mt-24 font-heading text-lg text-text/70"
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          Try to remember.
        </motion.p>
      </div>
    </div>
  )
}
