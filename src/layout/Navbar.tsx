import { useState } from 'react'
import Container from './Container'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Characters', href: '#characters' },
  { label: 'Screenshots', href: '#screenshots' },
  { label: 'Devlog', href: '#devlog' },
  { label: 'Wishlist', href: '#wishlist' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav aria-label="Main navigation" className="fixed top-0 z-50 w-full border-b border-primary bg-bg/90 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-heading text-lg text-text" aria-label="The Night Borrower — home">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="10 15 390 275" fill="currentColor" aria-hidden="true" className="h-8 w-8">
            <path d="M182 30L34 32L28 98L25 149L27 202L33 268L182 271ZM218 30L367 33L374 101L376 152L373 201L368 269L218 271Z" />
          </svg>
          The Night Borrower
        </a>

        {/* Desktop links */}
        <ul className="hidden gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-secondary transition-colors hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="text-secondary transition-colors hover:text-text md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg className="h-6 w-6" viewBox="8 6 174 172" fill="currentColor">
              <path d="M18 20L24 17L98 82L166 158L162 165L94 94L26 24ZM160 14L166 18L100 90L30 166L24 161L90 86L156 16Z" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 12 200 138" fill="currentColor">
              <path d="M15 29L44 22L84 20L131 25L168 31L133 39L87 38L47 36ZM8 82L51 74L101 71L149 73L193 78L147 87L97 88L51 86ZM32 133L71 127L114 123L156 122L186 128L159 139L117 141L69 138Z" />
            </svg>
          )}
        </button>
      </Container>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-primary md:hidden">
          <Container>
            <ul className="flex flex-col gap-4 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-sm text-secondary transition-colors hover:text-text"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </nav>
  )
}
