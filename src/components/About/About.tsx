import Container from '../../layout/Container'

export default function About() {
  return (
    <section id="about" aria-label="About" className="scroll-mt-16 border-t border-primary py-24">
      <Container>
        <h2 className="font-heading text-3xl text-text">About the Game</h2>
        <p className="mt-2 text-sm uppercase tracking-widest text-secondary">
          A first-person psychological survival horror experience
        </p>
        <div className="mt-8 max-w-2xl space-y-4 text-secondary">
          <p>
            Set in a small-town bookstore in the Pacific Northwest, 1990s.
            Something moves between the shelves after dark.
          </p>
          <p>More details coming soon.</p>
        </div>
      </Container>
    </section>
  )
}
