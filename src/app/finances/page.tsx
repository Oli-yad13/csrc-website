import Link from 'next/link';
import {
  financeHighlights,
  financeNarrative,
  financePractices,
} from '@/content/csrcContent';
import styles from './page.module.css';

export default function FinancesPage() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.breadcrumb}>Who we are</div>
          <h1 className={styles.pageTitle}>Finance and public funding context</h1>
          <p className={styles.heroText}>
            The current public record around CSRC is strongest at the programme level. Rather than
            presenting invented annual totals, this page summarises the funding and finance signals
            that are actually visible across public announcements and partner materials.
          </p>
        </div>
      </section>

      <section className={styles.highlightsSection}>
        <div className="container">
          <div className={styles.highlightsGrid}>
            {financeHighlights.map((item) => (
              <div key={item.label} className={styles.highlightCard}>
                <span className={styles.highlightValue}>{item.value}</span>
                <span className={styles.highlightLabel}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.fundingSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>What can be said accurately</h2>
          <p className={styles.sectionSubtitle}>
            Public finance context for CSRC currently comes through programme announcements, donor
            statements, and sector partner pages.
          </p>
          {financeNarrative.map((paragraph) => (
            <div key={paragraph} className={styles.fundingGroup}>
              <div className={styles.fundingList}>
                <div className={styles.fundingItem}>
                  <span className={styles.fundingName}>{paragraph}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.practicesSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>How this page should evolve</h2>
          <div className={styles.practicesGrid}>
            {financePractices.map((practice) => (
              <div key={practice.title} className={styles.practiceCard}>
                <h3 className={styles.practiceTitle}>{practice.title}</h3>
                <p className={styles.practiceDesc}>{practice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Request a clarification</h2>
            <p className={styles.ctaText}>
              If you need the most current public donor or programme disclosure information, contact
              the centre directly.
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
