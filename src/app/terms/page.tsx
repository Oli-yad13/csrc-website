import styles from '../simple-page.module.css';

export default function TermsPage() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.breadcrumb}>Terms</div>
          <h1 className={styles.pageTitle}>Terms of use</h1>
          <p className={styles.heroText}>
            This is a practical holding page for the new CSRC site. It should be replaced with a
            final approved legal text before public launch.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Using this website</h2>
          <p className={styles.bodyText}>
            Content on this site is provided for general information about CSRC, its programmes,
            public resources, and opportunities. Visitors should verify deadlines, calls, and partner
            requirements directly from the official linked source when an external programme page is
            referenced.
          </p>
          <p className={styles.bodyText}>
            Unless otherwise noted, organisation names, logos, reports, and external resources remain
            the property of their respective owners. Links to external content are provided to help
            visitors find authoritative source material.
          </p>
          <p className={styles.bodyText}>
            Before launch, this page should be updated with CSRC&apos;s final legal wording, dispute
            handling language, and any local compliance requirements.
          </p>
        </div>
      </section>
    </main>
  );
}
