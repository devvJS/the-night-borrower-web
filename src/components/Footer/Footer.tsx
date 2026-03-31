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

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

const socialLinks = [
  { label: 'Instagram', icon: InstagramIcon, href: '#' },
  { label: 'Twitter', icon: TwitterIcon, href: '#' },
  { label: 'Github', icon: GithubIcon, href: '#' },
]

export default function Footer() {
  return (
    <footer aria-label="Site footer" className="border-t border-primary py-12">
      <Container>
        {/* Top row */}
        <motion.div
          className="flex items-center justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-40px' }}
          custom={0}
        >
          <div className="flex items-center gap-2 opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="10 15 390 275" fill="currentColor" aria-hidden="true" className="h-6 w-6 text-text">
              <path d="M182 30L34 32L28 98L25 149L27 202L33 268L182 271ZM218 30L367 33L374 101L376 152L373 201L368 269L218 271Z" />
            </svg>
            <span className="font-heading text-sm text-text">The Night Borrower</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="opacity-40 transition-opacity duration-500 hover:opacity-70"
              >
                <link.icon className="h-5 w-5 text-text" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.hr
          className="my-10 border-primary/30"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-40px' }}
          custom={1}
        />

        {/* Final line */}
        <motion.p
          className="py-8 text-center font-heading text-lg text-text/70"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-40px' }}
          custom={2}
        >
          Try to remember.
        </motion.p>

        {/* Copyright */}
        <motion.p
          className="text-center text-xs text-secondary/50"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-40px' }}
          custom={3}
        >
          &copy; 2026 The Night Borrower. All rights reserved.
        </motion.p>
      </Container>
    </footer>
  )
}
