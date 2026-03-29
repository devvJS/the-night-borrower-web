import Container from '../../layout/Container'

export default function Features() {
  return (
    <section id="features" aria-label="Features" className="scroll-mt-16 border-t border-primary bg-primary/5 py-24">
      <Container>
        <h2 className="font-heading text-3xl text-text">Features</h2>
        <p className="mt-2 text-sm uppercase tracking-widest text-secondary">
          What awaits you inside
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature cards will be populated in a later branch */}
          <div className="rounded border border-primary p-6">
            <h3 className="font-heading text-lg text-text">Coming soon</h3>
            <p className="mt-2 text-sm text-secondary">Feature details will appear here.</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
