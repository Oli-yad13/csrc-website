import Image from 'next/image';
import Link from 'next/link';
import { resources } from '@/content/csrcContent';
import styles from './page.module.css';

const themes = ['Knowledge hub', 'Legal guidance', 'Funding context', 'Programme briefs'];

export default function ResourcesPage() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.breadcrumb}>Resources</div>
          <h1 className={styles.pageTitle}>Knowledge hub</h1>
          <p className={styles.heroText}>
            CSRC&apos;s public knowledge footprint currently lives across partner programme pages,
            archived materials, and social updates. This hub pulls those sources into one place so
            visitors can find the most useful public references quickly.
          </p>
        </div>
      </section>

      <section className={styles.filtersSection}>
        <div className="container">
          <div className={styles.filtersRow}>
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Current focus</span>
              <div className={styles.filterTags}>
                {themes.map((theme) => (
                  <span key={theme} className={`${styles.filterTag} ${styles.filterTagActive}`}>
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.resourcesSection}>
        <div className="container">
          <div className={styles.resourcesGrid}>
            {resources.map((resource) => (
              <a
                key={resource.href}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resourceCard}
              >
                <div className={styles.resourceImageWrapper}>
                  <Image src={resource.image} alt={resource.title} fill style={{ objectFit: 'cover' }} />
                  <span className={styles.resourceType}>{resource.type}</span>
                </div>
                <div className={styles.resourceContent}>
                  <span className={styles.resourceTheme}>{resource.theme}</span>
                  <h3 className={styles.resourceTitle}>{resource.title}</h3>
                  <p className={styles.resourceDesc}>{resource.description}</p>
                  <p className={styles.resourceDesc} style={{ marginTop: '1rem', fontWeight: 500 }}>
                    {resource.linkLabel} · {resource.source}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Need a specific document?</h2>
            <p className={styles.ctaText}>
              If you are looking for a report, manual, event recording, or partner brief that is not
              yet surfaced here, contact the centre directly.
            </p>
            <Link href="/contact" className={styles.outlineBtn}>
              Contact CSRC
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
