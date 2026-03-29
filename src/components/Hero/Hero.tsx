import Container from '../../layout/Container'

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-screen scroll-mt-16 items-center overflow-hidden"
    >
      {/* Background layer */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-bg via-primary/40 to-bg"
        aria-hidden="true"
      />

      {/* Noise overlay layer */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Radial vignette overlay */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-bg)_100%)]"
        aria-hidden="true"
      />

      {/* Content container */}
      <Container className="relative z-10 flex flex-col items-center text-center">
        <h1 className="font-heading text-5xl leading-tight text-text sm:text-6xl md:text-7xl">
          The Night Borrower
        </h1>

        <p className="mt-4 max-w-lg text-lg text-secondary sm:text-xl">
          Something watches while you sleep.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#wishlist"
            className="inline-block rounded border border-text bg-text/10 px-8 py-3 text-sm font-medium text-text transition-colors hover:bg-text/20"
          >
            Wishlist on Steam
          </a>
          <a
            href="#"
            className="inline-block rounded border border-secondary px-8 py-3 text-sm font-medium text-secondary transition-colors hover:border-text hover:text-text"
          >
            Watch Teaser
          </a>
        </div>
      </Container>
    </section>
  )
}
