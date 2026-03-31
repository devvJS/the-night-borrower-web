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
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
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
