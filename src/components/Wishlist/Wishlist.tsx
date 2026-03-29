import Container from '../../layout/Container'

export default function Wishlist() {
  return (
    <section id="wishlist" aria-label="Wishlist" className="scroll-mt-16 border-t border-primary bg-primary/5 py-24">
      <Container className="text-center">
        <h2 className="font-heading text-3xl text-text">Wishlist on Steam</h2>
        <p className="mt-2 text-sm uppercase tracking-widest text-secondary">
          Be the first to know when it launches
        </p>
        <div className="mt-8">
          {/* Steam wishlist button/link will be added in a later branch */}
          <span className="inline-block rounded border border-secondary px-8 py-3 text-sm text-secondary">
            Steam link coming soon
          </span>
        </div>
      </Container>
    </section>
  )
}
