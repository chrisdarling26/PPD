import { useState } from 'react'

const navigation = ['Edu-Mobil', 'Contact', 'Gallery', 'Team']

function ProfileIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5">
      <circle cx="12" cy="7.5" r="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M6.5 20v-2.5a4.3 4.3 0 0 1 4.3-4.3h2.4a4.3 4.3 0 0 1 4.3 4.3V20" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Return to the landing page">
        <img
          className="brand-logo"
          src="/assets/precious-plastic-logo.png"
          alt="Precious Plastic Dublin"
        />
        <strong>
          <em>Re-think</em> PLASTIC
        </strong>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="main-navigation"
        aria-label="Main navigation"
        className={`navigation${menuOpen ? ' is-open' : ''}`}
      >
        {navigation.map((item) => {
          const href =
            item === 'Edu-Mobil'
              ? '/edu-mobil'
              : item === 'Contact'
                ? '/contact'
                : item === 'Gallery'
                  ? '/gallery'
                  : item === 'Team'
                    ? '/team'
                    : null

          return href ? (
            <a key={item} href={href}>
              {item}
            </a>
          ) : (
            <span key={item}>{item}</span>
          )
        })}
        <ProfileIcon />
      </nav>
    </header>
  )
}

function HomePage() {
  return (
    <>
      <div className="page-shell">
        <SiteHeader />

        <main className="content">
          <p>
            Precious Plastic Dublin is a group of environmentalists working on practical solutions
            to plastic waste and pollution in Dublin. As part of the{' '}
            <a href="https://www.preciousplastic.com/" target="_blank" rel="noreferrer">
              Precious Plastic
            </a>{' '}
            global movement, we aim to bring plastic recycling closer to your community and enable
            you to get creative with it. Turn your old plastic into something new...again and again.
          </p>

          <p className="intro">
            In case you’re new to the concept of Precious Plastic, here’s the found Dave ‘at work’
          </p>

          <a
            className="video-preview"
            href="https://www.youtube.com/watch?v=76AFNIxYjUE"
            target="_blank"
            rel="noreferrer"
            aria-label="Watch Precious Plastic at work"
          >
            <img src="/assets/precious-plastic-video.jpg" alt="Precious Plastic at work video" />
          </a>
        </main>

        <div className="chat-bubble" aria-hidden="true">
          <span>Re-</span>
          <span>connect</span>
        </div>
      </div>

      <section className="edu-bus-section" aria-label="Precious Plastic Edu-Mobil gallery">
        <img src="/assets/edu-bus-section.jpg" alt="Precious Plastic Edu-Mobil and recycled plastic creations" />
        <a className="edu-mobile-card" href="/edu-mobil" aria-label="Visit the Edu-Mobil page">
          <img src="/assets/edu-mobile-card.png" alt="Precious Plastic Edu-Mobile" />
        </a>
      </section>
    </>
  )
}

function EduMobilPage() {
  return (
    <div className="edu-mobile-page">
      <SiteHeader />

      <main className="edu-mobile-content">
        <img src="/assets/edu-mobile-card.png" alt="Precious Plastic Edu-Mobile" />
        <div className="edu-mobile-hero-copy">
          <h1>
            <span className="learn-to">Learn to</span> <span className="transform">transform</span>{' '}
            your own plastic
          </h1>
          <p>
            We’re developing a Mobile Circular Experience to deliver as Education Workshops for
            Primary and Secondary schools in Dublin and surrounds. While it’s still in development,
            here’s what you can look forward to.
          </p>
        </div>
      </main>

      <section className="activity-feature">
        <div className="activity-copy">
          <p className="eyebrow">HANDS-ON LEARNING</p>
          <h2>Discover your plastic</h2>
          <p>
            Learn how there are different types of plastic, using our specialised scanning machine.
            More importantly, learn what that material can become by filling the material buckets.
          </p>
        </div>
        <img
          src="/assets/edu-mobil-activity-04.jpg"
          alt="Using a specialised machine to scan and identify plastic"
        />
      </section>

      <section className="activity-feature activity-feature-secondary">
        <div className="activity-copy">
          <p className="eyebrow">CREATE TOGETHER</p>
          <h2>Make a mini-mural</h2>
          <p>
            While you’re learning about different plastic types, make a mini-mural with your group.
            Maybe you could make a flower, maybe an SDG!
          </p>
        </div>
        <img
          src="/assets/edu-mobil-activity-02.jpg"
          alt="Mini-murals made from colourful recycled plastic bottle caps"
        />
      </section>

      <section className="activity-feature activity-feature-secondary">
        <div className="activity-copy">
          <p className="eyebrow">DESIGN &amp; MAKE</p>
          <h2>From bottle to 3D print</h2>
          <p>
            For the more technical savvy, learn how to turn a plastic bottle into 3D print filament,
            and design your own fridge magnet or pen holder for school.
          </p>
        </div>
        <img
          src="/assets/edu-mobil-activity-01.jpg"
          alt="Students turning recycled plastic into 3D-printed objects"
        />
      </section>

      <section className="activity-feature activity-feature-secondary">
        <div className="activity-copy">
          <p className="eyebrow">GROW SOMETHING NEW</p>
          <h2>Make a planter pot</h2>
          <p>
            When the class wish to move outside, you can learn how to turn those bottle caps into a
            planter pot, for your school’s garden. Plant a waste reduction seed and let it grow!
          </p>
        </div>
        <img
          src="/assets/edu-mobil-activity-03.jpg"
          alt="Making a planter pot from recycled plastic bottle caps"
        />
      </section>

      <section className="activity-feature activity-feature-secondary">
        <div className="activity-copy">
          <p className="eyebrow">IMAGINE WHAT’S NEXT</p>
          <h2>Become a Waste Champion</h2>
          <p>
            Finally, we can try to come up with new ideas and products you would like to make from
            your collected plastic. You can become a Waste Champion!
          </p>
        </div>
        <img
          src="/assets/edu-mobil-activity-05.jpg"
          alt="Ideas and values collected on a classroom vision board"
        />
      </section>

      <div className="edu-cta-grid">
        <section className="school-review">
          <p>
            We’ve visited a number of schools already, check out a review from our friends at St
            Kilians Primary school{' '}
            <a
              href="https://www.kilians.com/news/2025/our-primary-school-green-school-committee-enjoys-a-special-visit-from-precious-plastic-dublin/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>
        </section>

        <section className="contact-callout">
          <p>
            If you’re a primary school teacher, parent, member of a social group, or just interested
            to learn more about the mobile experience, please get in touch{' '}
            <a className="contact-link" href="/contact">
              here
            </a>
            … we’d love to hear from!
          </p>
        </section>
      </div>
    </div>
  )
}

function ContactPage() {
  return (
    <div className="contact-page">
      <SiteHeader />
      <main className="contact-page-content">
        <p className="eyebrow">PRECIOUS PLASTIC DUBLIN</p>
        <h1>Contact us</h1>
        <form className="contact-form">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="Your email" />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="I’m interested" />
          </label>
          <button type="button">Send enquiry</button>
        </form>
        <a href="/" className="home-link">
          Return to home
        </a>
      </main>
    </div>
  )
}

function GalleryPage() {
  return (
    <div className="gallery-page">
      <SiteHeader />
      <main className="gallery-page-content">
        <p className="eyebrow">PRECIOUS PLASTIC DUBLIN</p>
        <h1>Gallery</h1>
      </main>
    </div>
  )
}

function TeamPage() {
  return (
    <div className="team-page">
      <SiteHeader />
      <main className="team-page-content">
        <p className="eyebrow">PRECIOUS PLASTIC DUBLIN</p>
        <h1>Team</h1>
        <p className="team-intro">
          (While it looks like a one-person team, the reality is that everyone is part of the team,
          and everyone can do their small part.)
        </p>
        <img
          className="team-hero-image"
          src="/assets/team-photo-01.jpg"
          alt="Precious Plastic Dublin team member with a mountain bike"
        />
        <article className="team-bio">
          <p>
            Chris is a dedicated outdoors person and Designer at Precious Plastic Dublin. Like most
            people with a passion, he likes to get stuck into any project that helps the
            environment. Having spent time in the IT industry whilst also running a surfboard
            repairs/crafts workshop, he completed a MSc in Sustainable energy and he’s now taken on
            the role of Plastics upcycling educator at PPD. You can find Chris&apos;s other passion
            project on his Facebook page ‘Surfcraft’, whilst he&apos;ll be on the beach/mountains
            picking up plastic and thinking of ways to upcycle it!
          </p>
        </article>
      </main>
    </div>
  )
}

export default function App() {
  if (window.location.pathname === '/edu-mobil') return <EduMobilPage />
  if (window.location.pathname === '/contact') return <ContactPage />
  if (window.location.pathname === '/gallery') return <GalleryPage />
  if (window.location.pathname === '/team') return <TeamPage />
  return <HomePage />
}
