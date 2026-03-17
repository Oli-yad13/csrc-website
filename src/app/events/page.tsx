import Image from 'next/image';
import Link from 'next/link';
import { recentEvents, recurringEventFormats } from '@/content/csrcContent';
import styles from './page.module.css';

export default function EventsPage() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.breadcrumb}>Events</div>
          <h1 className={styles.pageTitle}>Events and convenings</h1>
          <p className={styles.heroText}>
            CSRC&apos;s public footprint is event-rich: trainings, launch events, fellowships, webinars,
            and flagship public-interest learning formats all play a role in how the centre supports
            civil society in Ethiopia.
          </p>
        </div>
      </section>

      <section className={styles.eventsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Recent public events</h2>
          <div className={styles.eventsGrid}>
            {recentEvents.map((event) => (
              <article key={event.title} className={styles.eventCard}>
                <div className={styles.eventImageWrapper}>
                  <Image src={event.image} alt={event.title} fill style={{ objectFit: 'cover' }} />
                  <span className={styles.eventType}>{event.type}</span>
                </div>
                <div className={styles.eventContent}>
                  <div className={styles.eventMeta}>
                    <span className={styles.eventDate}>{event.date}</span>
                    <span className={styles.eventDivider}>·</span>
                    <span className={styles.eventLocation}>{event.location}</span>
                  </div>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <p className={styles.eventDesc}>{event.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.pastSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Recurring formats</h2>
          <div className={styles.pastGrid}>
            {recurringEventFormats.map((event) => (
              <article key={event.title} className={styles.pastCard}>
                <span className={styles.pastDate}>{event.date}</span>
                <h3 className={styles.pastTitle}>{event.title}</h3>
                <p className={styles.pastDesc}>{event.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.policySection}>
        <div className="container">
          <div className={styles.policyContent}>
            <h2 className={styles.policyTitle}>Hosting approach</h2>
            <p className={styles.policyText}>
              The centre&apos;s event pattern is highly practical: bring people together, share usable
              knowledge, and connect participants to the next step, whether that is a fellowship,
              a training track, a legal resource, or a partnership conversation.
            </p>
            <p className={styles.policyText}>
              For current notices and registrations, follow the centre&apos;s public updates or contact
              the team directly.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://et.linkedin.com/company/civilsocietyresourcecenter"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.outlineBtn}
              >
                Follow updates
              </a>
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
