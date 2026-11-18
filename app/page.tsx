const address = {
  street: "1601 Trapelo Rd",
  city: "Waltham, MA 02451",
};
const email = "gpiynyudnd_1794581723@tfbnw.net";
const facebook = "https://www.facebook.com/davesbarbershop123/";
const instagram = "https://www.instagram.com/davesbarbershop123";
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${address.street}, ${address.city}`,
)}`;

const gallery = [
  { src: "/images/img1.webp", alt: "Dave giving a customer a beard trim with clippers" },
  { src: "/images/img2.webp", alt: "Dave laughing while checking the appointment sheet" },
  { src: "/images/img3.webp", alt: "Dave and a fellow barber chatting with customers in the shop" },
  { src: "/images/img4.webp", alt: "Dave finishing a cut with a blow dryer" },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
        <img
          src="/images/storefront.webp"
          alt="Brick storefront of Dave's Barber Shop with a barber pole by the window"
          width={2000}
          height={1117}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-5xl px-6 pb-12 text-white">
          <p className="text-sm uppercase tracking-[0.25em] text-white/80">
            Waltham, Massachusetts
          </p>
          <h1 className="mt-2 font-serif text-5xl font-bold sm:text-7xl">
            Dave&apos;s Barber Shop
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/90">
            Classic cuts, hot-towel shaves, and good conversation.
          </p>
          <a
            href="#visit"
            className="mt-6 inline-block rounded-full bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-dark"
          >
            Visit us
          </a>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-20 md:grid-cols-2">
        <img
          src="/images/profile.webp"
          alt="Dave, owner of Dave's Barber Shop, holding a comb and scissors"
          width={1024}
          height={572}
          loading="lazy"
          className="w-full rounded-lg object-cover"
        />
        <div>
          <h2 className="font-serif text-3xl font-bold">Meet Dave</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Owner and head barber{" "}
            <strong className="text-foreground">
              Dave Faeifdagjifjbi Okelolawitz
            </strong>{" "}
            runs a no-fuss, old-school shop on Trapelo Road. Walk in, grab a
            seat, and leave looking sharp — whether it&apos;s a fade, a
            classic scissor cut, or a beard cleanup.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-serif text-3xl font-bold">Inside the shop</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {gallery.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                width={1200}
                height={788}
                loading="lazy"
                className="aspect-[3/2] w-full rounded-lg object-cover"
              />
            ))}
          </div>
          <p className="mt-8 text-muted">
            See more fresh cuts on{" "}
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4 hover:text-accent"
            >
              Instagram @davesbarbershop123
            </a>
          </p>
        </div>
      </section>

      {/* Visit / Contact */}
      <section id="visit" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-serif text-3xl font-bold">Visit us</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm uppercase tracking-widest text-muted">
              Address
            </h3>
            <address className="mt-2 not-italic leading-relaxed">
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                {address.street}
                <br />
                {address.city}
              </a>
            </address>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-widest text-muted">
              Email
            </h3>
            <a href={`mailto:${email}`} className="mt-2 block break-all hover:text-accent">
              {email}
            </a>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-widest text-muted">
              Facebook
            </h3>
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block hover:text-accent"
            >
              facebook.com/davesbarbershop123
            </a>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-widest text-muted">
              Instagram
            </h3>
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block hover:text-accent"
            >
              @davesbarbershop123
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 py-8 text-center text-sm text-muted dark:border-white/10">
        Dave&apos;s Barber Shop · Owner: Dave
        Faeifdagjifjbi Okelolawitz
      </footer>
    </main>
  );
}
