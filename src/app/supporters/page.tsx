import Link from 'next/link';
import { supporterSections } from '@/content/csrcContent';
import styles from './page.module.css';

export default function SupportersPage() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.breadcrumb}>Who we are</div>
          <h1 className={styles.pageTitle}>Supporters and affiliates</h1>
          <p className={styles.heroText}>
            CSRC&apos;s public work is deeply partnership-based. The organisations listed here are the
            funders, technical actors, legal and academic collaborators, and consortium partners that
            appear repeatedly in public programme pages, announcements, and learning materials.
          </p>
        </div>
      </section>

      {supporterSections.map((section) => (
        <section key={section.id} className={styles.supporterSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <p className={styles.sectionDesc}>{section.description}</p>
            </div>

            <div className={styles.logoGrid}>
              {section.supporters.map((org) => {
                const CardContent = (
                  <>
                    <div className={styles.orgBadge}>
                      <span className={styles.orgAbbr}>{org.abbr}</span>
                    </div>
                    <div className={styles.orgDetails}>
                      <span className={styles.orgName}>{org.name}</span>
                      <span className={styles.orgRegion}>{org.region}</span>
                    </div>
                    {org.href && (
                      <svg
                        className={styles.externalIcon}
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 11L11 3M11 3H6M11 3V8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </>
                );

                return org.href ? (
                  <a
                    key={org.name}
                    href={org.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.orgCard} ${styles.orgCardLink}`}
                  >
                    {CardContent}
                  </a>
                ) : (
                  <div key={org.name} className={styles.orgCard}>
                    {CardContent}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Need the full context?</h2>
            <p className={styles.ctaText}>
              This page is intentionally conservative. It only includes funders and partners that are
              visible in current public source material.
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
