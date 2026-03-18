import Image from 'next/image';
import Link from 'next/link';
import { publicSources, strategicAmbitions } from '@/content/csrcContent';
import styles from './page.module.css';

const missionParagraphs = [
  "The Civil Society Resource Center was founded in 2019 and operates from Addis Ababa as a civil society knowledge hub for Ethiopia. Public descriptions of the centre consistently emphasise information access, technical support, learning, and partnership work for existing and emerging civil society organisations.",
  "Rather than behaving like a single programme brand, CSRC works as a support platform. It hosts learning, shares practical guidance, connects actors to opportunities, and contributes to broader ecosystem-strengthening initiatives with local and international partners.",
];

const impactAreas = [
  {
    title: 'Knowledge',
    text: 'Translate legal, regulatory, and programme experience into usable guides, webinar notes, and practical resources for CSOs.',
  },
  {
    title: 'Learning',
    text: 'Run training pathways, fellowships, and event formats that build leadership, advocacy, communication, and management capacity.',
  },
  {
    title: 'Convening',
    text: 'Bring together universities, rights groups, public institutions, funders, and local organisations around common civic challenges.',
  },
  {
    title: 'Partnerships',
    text: 'Work through consortiums and sector support programmes that expand the reach of civil society strengthening in Ethiopia.',
  },
];

const quickFacts = [
  {
    label: 'Founded',
    value: '2019',
  },
  {
    label: 'Base',
    value: 'Addis Ababa',
  },
  {
    label: 'Operating model',
    value: 'Learning and support hub',
  },
  {
    label: 'Through',
    value: 'Programmes and partnerships',
  },
];

const workingModel = [
  'Public-facing knowledge services for CSOs and emerging actors',
  'Training, fellowship, and short-format learning pathways',
  'Convening across rights, legal, academic, and civic actors',
  'Partnership delivery through consortium and grant-linked work',
];

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className={`container ${styles.shell}`}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopyCard}>
              <div className={styles.heroMetaRow}>
                <span className={styles.breadcrumb}>Who we are</span>
                <span className={styles.locationChip}>Addis Ababa, Ethiopia</span>
              </div>
              <h1 className={styles.pageTitle}>About CSRC</h1>
              <p className={styles.heroText}>
                CSRC is an Ethiopia-based civil society resource centre that combines knowledge
                services, public-interest learning, and programme partnership work. Its public
                footprint points to a practical role: helping organisations access information,
                strengthen systems, and connect with opportunities, peers, and sector-wide
                conversations.
              </p>
              <div className={styles.heroActions}>
                <Link href="/programs" className="btn">
                  Explore programmes
                </Link>
                <Link href="/contact" className={`btn btn-outline ${styles.secondaryAction}`}>
                  Contact CSRC
                </Link>
              </div>
              <div className={styles.statsGrid}>
                {quickFacts.map((item) => (
                  <div key={item.label} className={styles.statCard}>
                    <span className={styles.statLabel}>{item.label}</span>
                    <span className={styles.statValue}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.heroMediaCard}>
              <div className={styles.heroImageWrapper}>
                <Image
                  src="/logo/csrc center.jpg"
                  alt="Civil Society Resource Center"
                  fill
                  sizes="(max-width: 968px) 100vw, 42vw"
                  className={styles.heroImage}
                />
              </div>
              <div className={styles.heroCaption}>
                <span className={styles.captionEyebrow}>Working model</span>
                <p className={styles.captionText}>
                  CSRC operates as a support platform for civil society organisations, combining
                  resource access, learning formats, and partner-led programme delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`container ${styles.shell}`}>
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.sectionEyebrow}>How the centre works</p>
              <h2 className={styles.sectionTitle}>
                A resource hub built around support, learning, and sector connection.
              </h2>
            </div>
          </div>

          <div className={styles.overviewGrid}>
            <article className={styles.surfaceCard}>
              {missionParagraphs.map((paragraph) => (
                <p key={paragraph} className={styles.bodyText}>
                  {paragraph}
                </p>
              ))}
              <p className={styles.bodyText}>
                Public partner materials also describe CSRC as a national hub for civic innovation,
                policy learning, and resource sharing. That combination of support, learning, and
                convening is the clearest lens through which to understand the organisation.
              </p>
            </article>

            <aside className={styles.sidePanel}>
              <p className={styles.sidePanelEyebrow}>Working signals</p>
              <div className={styles.sidePanelList}>
                {workingModel.map((item) => (
                  <div key={item} className={styles.sidePanelItem}>
                    <span className={styles.sidePanelMark}>•</span>
                    <p className={styles.sidePanelText}>{item}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`container ${styles.shell}`}>
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.sectionEyebrow}>What CSRC does in practice</p>
              <h2 className={styles.sectionTitle}>Core operating modes across the centre.</h2>
            </div>
            <p className={styles.sectionLead}>
              CSRC&apos;s public role is best understood through the ways it translates knowledge,
              delivers learning, convenes actors, and works through partnerships.
            </p>
          </div>

          <div className={styles.impactGrid}>
            {impactAreas.map((item, index) => (
              <article key={item.title} className={styles.impactCard}>
                <span className={styles.impactIndex}>{String(index + 1).padStart(2, '0')}</span>
                <h3 className={styles.impactTitle}>{item.title}</h3>
                <p className={styles.impactText}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`container ${styles.shell}`}>
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.sectionEyebrow}>Strategic direction</p>
              <h2 className={styles.sectionTitle}>
                Priority areas visible in CSRC&apos;s programmes and public activity.
              </h2>
            </div>
          </div>

          <div className={styles.directionGrid}>
            {strategicAmbitions.map((item) => (
              <article key={item.title} className={styles.directionCard}>
                <div className={styles.directionImageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 32vw"
                    className={styles.directionImage}
                  />
                </div>
                <div className={styles.directionBody}>
                  <h3 className={styles.directionTitle}>{item.title}</h3>
                  <p className={styles.directionText}>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`container ${styles.shell}`}>
          <div className={styles.sourceCard}>
            <div className={styles.sourceIntro}>
              <p className={styles.sourceEyebrow}>Public sources</p>
              <h2 className={styles.sourceTitle}>
                This page is grounded in CSRC&apos;s public footprint, not placeholder copy.
              </h2>
              <p className={styles.sourceText}>
                This first-pass content is based on CSRC&apos;s public company page, partner
                programme pages, and archived CSRC materials while the main website remains
                unstable.
              </p>
            </div>

            <div className={styles.sourceLinks}>
              {publicSources.slice(0, 6).map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sourceLink}
                >
                  {source.label}
                </a>
              ))}
            </div>

            <div className={styles.sourceActions}>
              <Link href="/supporters" className={`btn btn-outline ${styles.secondaryAction}`}>
                View partners
              </Link>
              <Link href="/contact" className="btn">
                Contact CSRC
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
