import { contactDetails, publicSources } from '@/content/csrcContent';
import styles from '../simple-page.module.css';

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.breadcrumb}>Contact</div>
          <h1 className={styles.pageTitle}>Contact CSRC</h1>
          <p className={styles.heroText}>
            Use this page for programme enquiries, resource requests, partnership conversations,
            and follow-up on current public calls. The current public contact details below come from
            CSRC&apos;s LinkedIn company page and archived public materials.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.card}>
              <h2 className={styles.sectionTitle}>Address</h2>
              <div className={styles.list}>
                {contactDetails.address.map((line) => (
                  <p key={line} className={styles.bodyText}>
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <div className={styles.card}>
              <h2 className={styles.sectionTitle}>Reach the team</h2>
              <div className={styles.list}>
                <a className={styles.bodyText} href={`mailto:${contactDetails.email}`}>
                  {contactDetails.email}
                </a>
                <a className={styles.bodyText} href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}>
                  {contactDetails.phone}
                </a>
                <a className={styles.bodyText} href={contactDetails.website} target="_blank" rel="noopener noreferrer">
                  {contactDetails.website}
                </a>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <h2 className={styles.sectionTitle}>Public channels</h2>
            <div className={styles.linkList}>
              <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" className={styles.button}>
                LinkedIn
              </a>
              <a href={contactDetails.facebook} target="_blank" rel="noopener noreferrer" className={styles.button}>
                Facebook
              </a>
              {publicSources.slice(1, 4).map((source) => (
                <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer" className={styles.button}>
                  {source.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
