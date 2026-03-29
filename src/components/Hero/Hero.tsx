import Container from '../../layout/Container'

export default function Hero() {
  return (
    <section id="hero" aria-label="Hero" className="flex min-h-[80vh] items-center">
      <Container>
        <h1 className="font-heading text-5xl text-text sm:text-6xl">
          The Night Borrower
        </h1>
        <p className="mt-4 max-w-xl text-lg text-secondary">
          A first-person psychological survival horror game.
        </p>
      </Container>
    </section>
  )
}
