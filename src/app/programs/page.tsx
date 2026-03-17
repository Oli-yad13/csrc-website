import Image from 'next/image';
import Link from 'next/link';
import {
  featuredProgrammes,
  programmes,
  strategicAmbitions,
} from '@/content/csrcContent';
import styles from './page.module.css';

const ecosystemParagraphs = [
  "CSRC's public programme footprint is best understood as a mix of direct learning formats and ecosystem-facing partnership work. Some activities are clearly branded as CSRC initiatives, while others sit inside wider civil society support frameworks with multiple partners and donors.",
  "This page groups that work into programme areas that are visible across recent public sources: fellowships, legal and regulatory support, rights education, networks and ecosystem strengthening, public-interest legal learning, and communications capacity.",
];

export default function ProgramsPage() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.breadcrumb}>What we do</div>
          <h1 className={styles.pageTitle}>Programmes and service areas</h1>
          <p className={styles.heroText}>
            CSRC works as a support platform for civil society in Ethiopia. Its public programmes
            combine fellowships, training, legal and regulatory guidance, rights education,
            partnership delivery, and ecosystem-strengthening work with local and international
            collaborators.
          </p>
        </div>
      </section>

      <section className={styles.overviewSection}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewText}>
              <h2 className={styles.sectionTitle}>Programme model</h2>
              {ecosystemParagraphs.map((paragraph) => (
                <p key={paragraph} className={styles.overviewPara}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className={styles.overviewImageCol}>
              <div className={styles.overviewImageWrapper}>
                <Image
                  src="/CSSP2 SOM/CSSP2 SOM/photo_2025-11-28_16-04-12.jpg"
                  alt="CSRC programme work"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.leadershipSection}>
        <div className="container">
          <div className={styles.leadershipGrid}>
            <div className={styles.leadershipImageCol}>
              <div className={styles.leadershipImageWrapper}>
                <Image
                  src="/Executive Leadership ACLP/Executive Leadership ACLP/photo_2025-11-28_15-09-06.jpg"
                  alt="Leadership and learning"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className={styles.leadershipText}>
              <h2 className={styles.sectionTitle}>Featured learning areas</h2>
              {featuredProgrammes.map((programme) => (
                <p key={programme.slug} className={styles.leadershipPara}>
                  <strong>{programme.title}:</strong> {programme.summary}
                </p>
              ))}
              <Link
                href={`/programs/${featuredProgrammes[0].slug}`}
                className={styles.outlineBtn}
              >
                Explore featured area
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ambitionsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Strategic ambitions</h2>
          <p className={styles.sectionSubtitle}>
            The work visible across CSRC&apos;s public materials points to three broad ambitions:
            stronger leaders and organisations, more capable rights-based civic action, and better
            access to practical knowledge and ecosystem support.
          </p>
          <div className={styles.ambitionsGrid}>
            {strategicAmbitions.map((item) => (
              <article key={item.title} className={styles.ambitionCard}>
                <div className={styles.ambitionImageWrapper}>
                  <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.ambitionContent}>
                  <h3 className={styles.ambitionTitle}>{item.title}</h3>
                  <p className={styles.ambitionDesc}>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.initiativesSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Programme areas</h2>
          <p className={styles.sectionSubtitle}>
            These pages translate the public CSRC footprint into clear, reusable programme areas
            for the site.
          </p>
          <div className={styles.initiativesGrid}>
            {programmes.map((programme) => (
              <article key={programme.slug} className={styles.initiativeCard}>
                <div className={styles.initiativeImageWrapper}>
                  <Image
                    src={programme.image}
                    alt={programme.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.initiativeContent}>
                  <h3 className={styles.initiativeTitle}>{programme.title}</h3>
                  <p className={styles.initiativeDesc}>{programme.summary}</p>
                  <Link href={`/programs/${programme.slug}`} className={styles.cardLink}>
                    View detail →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Need the right route in?</h2>
            <p className={styles.ctaText}>
              If you are looking for training, a current opportunity, a partnership conversation,
              or a specific resource, start with contact and opportunities first.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/opportunities" className={styles.outlineBtn}>
                Opportunities
              </Link>
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
