import styles from '../simple-page.module.css';

export default function PrivacyPage() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.breadcrumb}>Privacy</div>
          <h1 className={styles.pageTitle}>Privacy notice</h1>
          <p className={styles.heroText}>
            This is a simple first-pass privacy notice for the new CSRC site. It should be reviewed
            and replaced with a final approved version once the organisation confirms its website,
            analytics, newsletter, and contact-form setup.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>What this draft covers</h2>
          <p className={styles.bodyText}>
            The site may collect information that visitors provide directly through contact forms,
            newsletter signups, or event registrations. Basic website logs may also be collected by
            the hosting provider for security and performance purposes.
          </p>
          <p className={styles.bodyText}>
            Personal data should only be retained for as long as needed to respond to enquiries,
            process an application, or deliver a service the visitor requested.
          </p>
          <p className={styles.bodyText}>
            Before launch, this page should be updated with the final data controller details,
            cookie and analytics setup, third-party processors, and the organisation&apos;s retention
            practices.
          </p>
        </div>
      </section>
    </main>
  );
}
