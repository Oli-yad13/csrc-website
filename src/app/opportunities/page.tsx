import { opportunities } from '@/content/csrcContent';
import styles from '../simple-page.module.css';

export default function OpportunitiesPage() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.breadcrumb}>Opportunities</div>
          <h1 className={styles.pageTitle}>Recent calls and opportunities</h1>
          <p className={styles.heroText}>
            CSRC uses public channels for fellowships, programme calls, and consultancy notices.
            The items below come from the public company trail and should be treated as recent
            reference points unless the linked source still shows an open deadline.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.grid}>
            {opportunities.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <p className={styles.bodyText} style={{ fontWeight: 600 }}>
                  {item.type} · {item.date}
                </p>
                <h2 className={styles.sectionTitle} style={{ fontSize: '1.8rem' }}>
                  {item.title}
                </h2>
                <p className={styles.bodyText}>{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
