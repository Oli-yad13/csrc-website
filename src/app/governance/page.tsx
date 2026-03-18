import Image from 'next/image';
import Link from 'next/link';
import { governanceModel, governancePrinciples } from '@/content/csrcContent';
import styles from './page.module.css';

export default function GovernancePage() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.breadcrumb}>Who we are</div>
          <h1 className={styles.pageTitle}>Governance and institutional model</h1>
          <p className={styles.heroText}>
            Public descriptions of CSRC consistently position the centre as a board-led strategic
            hub. Because not all governance documents are easy to access yet, this page focuses on
            what can be said clearly from public source material and programme disclosures.
          </p>
        </div>
      </section>

      <section className={styles.structureSection}>
        <div className="container">
          <div className={styles.structureGrid}>
            <div className={styles.structureText}>
              <h2 className={styles.sectionTitle}>What is visible publicly</h2>
              <p className={styles.structurePara}>
                CSRC operates as a civil society support hub rather than a narrow service provider.
                The public record shows a centre that works through convening, learning, guidance,
                and partnership delivery.
              </p>
              <p className={styles.structurePara}>
                That makes governance clarity especially important. Visitors should be able to see
                how the centre is led, how it works with funders and consortium partners, and where
                to find the programmes and disclosures that explain its role.
              </p>
              <p className={styles.structurePara}>
                This page therefore avoids invented board biographies and instead presents the
                institutional model that is actually supported by public source material.
              </p>
            </div>
            <div className={styles.structureImageCol}>
              <div className={styles.structureImageWrapper}>
                <Image
                  src="/CSSP2 SOM/CSSP2 SOM/photo_2025-11-28_16-12-29.jpg"
                  alt="CSRC governance and partnership context"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.boardSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Institutional model</h2>
          <div className={styles.boardGrid}>
            {governanceModel.map((item, index) => (
              <div key={item.title} className={styles.boardCard}>
                <div className={styles.modelHeader}>
                  <span className={styles.modelIndex}>{String(index + 1).padStart(2, '0')}</span>
                  <span className={styles.modelEyebrow}>Institutional signal</span>
                </div>
                <h3 className={styles.boardName}>{item.title}</h3>
                <p className={styles.boardBio}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.principlesSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Operating principles</h2>
          <div className={styles.principlesGrid}>
            {governancePrinciples.map((principle) => (
              <div key={principle.title} className={styles.principleCard}>
                <h3 className={styles.principleTitle}>{principle.title}</h3>
                <p className={styles.principleDesc}>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Governance documents and clarifications</h2>
            <p className={styles.ctaText}>
              As more verified governance material becomes available, this page should link directly
              to it rather than paraphrasing from partner pages.
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
