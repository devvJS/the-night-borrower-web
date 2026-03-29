import Container from '../../layout/Container'

export default function Characters() {
  return (
    <section id="characters" aria-label="Characters" className="py-24">
      <Container>
        <h2 className="font-heading text-3xl text-text">Characters</h2>
        <p className="mt-2 text-sm uppercase tracking-widest text-secondary">
          The people you will meet
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Character cards will be populated in a later branch */}
          <div className="rounded border border-primary p-6">
            <h3 className="font-heading text-lg text-text">Coming soon</h3>
            <p className="mt-2 text-sm text-secondary">Character profiles will appear here.</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
