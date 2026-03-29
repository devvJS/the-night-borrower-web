import Container from '../../layout/Container'

export default function Screenshots() {
  return (
    <section id="screenshots" aria-label="Screenshots" className="py-24">
      <Container>
        <h2 className="font-heading text-3xl text-text">Screenshots</h2>
        <p className="mt-2 text-sm uppercase tracking-widest text-secondary">
          Glimpses from the darkness
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Screenshot images will be populated in a later branch */}
          <div className="flex aspect-video items-center justify-center rounded border border-primary bg-primary/20">
            <span className="text-sm text-secondary">Screenshot placeholder</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
