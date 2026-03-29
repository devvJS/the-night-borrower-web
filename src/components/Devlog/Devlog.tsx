import Container from '../../layout/Container'

export default function Devlog() {
  return (
    <section id="devlog" aria-label="Development log" className="scroll-mt-16 border-t border-primary py-24">
      <Container>
        <h2 className="font-heading text-3xl text-text">Development Log</h2>
        <p className="mt-2 text-sm uppercase tracking-widest text-secondary">
          Follow the progress
        </p>
        <div className="mt-8 space-y-6">
          {/* Devlog entries will be populated in a later branch */}
          <article className="rounded border border-primary p-6">
            <p className="text-xs uppercase tracking-widest text-secondary">Coming soon</p>
            <h3 className="mt-2 font-heading text-lg text-text">Development updates</h3>
            <p className="mt-2 text-sm text-secondary">Devlog entries will appear here.</p>
          </article>
        </div>
      </Container>
    </section>
  )
}
