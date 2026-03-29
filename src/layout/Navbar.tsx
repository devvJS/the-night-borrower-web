import Container from './Container'

export default function Navbar() {
  return (
    <nav aria-label="Main navigation" className="fixed top-0 z-50 w-full border-b border-primary bg-bg/90 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="font-heading text-lg text-text" aria-label="The Night Borrower — home">
          The Night Borrower
        </a>
      </Container>
    </nav>
  )
}
