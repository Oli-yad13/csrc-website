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

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.breadcrumb}>Who we are</div>
          <h1 className={styles.pageTitle}>About CSRC</h1>
          <p className={styles.heroText}>
            CSRC is an Ethiopia-based civil society resource centre that combines knowledge services,
            public-interest learning, and programme partnership work. The centre&apos;s public footprint
            shows a practical focus: helping organisations access information, strengthen systems,
            and connect with opportunities, peers, and sector-wide conversations.
          </p>
        </div>
      </section>

      <section className={styles.missionSection}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionTextCol}>
              <h2 className={styles.sectionTitle}>How the centre works</h2>
              {missionParagraphs.map((paragraph) => (
                <p key={paragraph} className={styles.missionText}>
                  {paragraph}
                </p>
              ))}
              <p className={styles.missionText}>
                Public partner materials also describe CSRC as a national hub for civic innovation,
                policy learning, and resource sharing. That combination of support, learning, and
                convening is the clearest lens through which to understand the organisation.
              </p>
            </div>
            <div className={styles.missionImageCol}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/logo/csrc center.jpg"
                  alt="Civil Society Resource Center"
                  fill
                  style={{ objectFit: 'cover' }}
                  className={styles.missionImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.impactSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>What CSRC does in practice</h2>
          <div className={styles.impactGrid}>
            {impactAreas.map((item) => (
              <div key={item.title} className={styles.impactItem}>
                <h3 className={styles.impactTitle}>{item.title}</h3>
                <p className={styles.impactText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.missionSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Strategic direction</h2>
          <div className={styles.impactGrid}>
            {strategicAmbitions.map((item) => (
              <div key={item.title} className={styles.impactItem}>
                <h3 className={styles.impactTitle} style={{ color: '#172133' }}>
                  {item.title}
                </h3>
                <p className={styles.missionText}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.sectionTitle}>Public sources</h2>
            <p className={styles.ctaText}>
              This first-pass site content is grounded in CSRC&apos;s public footprint across LinkedIn,
              partner programme pages, and archived CSRC materials while the main website remains
              unstable.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {publicSources.slice(0, 4).map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.outlineBtn}
                >
                  {source.label}
                </a>
              ))}
            </div>
            <div style={{ marginTop: '2rem' }}>
              <Link href="/contact" className={styles.outlineBtn}>
                Contact CSRC
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
