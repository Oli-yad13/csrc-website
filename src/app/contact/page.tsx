import { contactDetails } from '@/content/csrcContent';
import styles from './page.module.css';

const channels = [
  {
    icon: '✉',
    title: 'Email',
    text: 'Reach the team directly for programme enquiries, partnership conversations, or resource requests.',
    href: `mailto:${contactDetails.email}`,
    label: contactDetails.email,
  },
  {
    icon: '☎',
    title: 'Phone',
    text: 'Speak with the centre during working hours (East Africa Time, Mon–Fri).',
    href: `tel:${contactDetails.phone.replace(/\s+/g, '')}`,
    label: contactDetails.phone,
  },
  {
    icon: '⬡',
    title: 'LinkedIn',
    text: 'Follow CSRC\'s public page for updates on programmes, events, and opportunities.',
    href: contactDetails.linkedin,
    label: 'Public page',
  },
];

const enquiryTypes = [
  {
    title: 'Programme enquiries',
    text: 'Questions about active or upcoming CSRC programmes — eligibility, timelines, participation, and selection processes.',
  },
  {
    title: 'Partnership conversations',
    text: 'Institutional or funder interest in co-designing or co-delivering work with CSRC.',
  },
  {
    title: 'Resource requests',
    text: 'Looking for guides, publications, training materials, or event recordings from the knowledge hub.',
  },
  {
    title: 'Public call follow-ups',
    text: 'Follow-up on a published tender, consultancy notice, or fellowship call that has closed or is active.',
  },
];

export default function ContactPage() {
  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.shell}`}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopyCard}>
              <div className={styles.metaRow}>
                <span className={styles.breadcrumb}>Contact</span>
                <span className={styles.chip}>Addis Ababa, Ethiopia</span>
              </div>

              <h1 className={styles.pageTitle}>Get in touch</h1>

              <p className={styles.heroText}>
                Use this page for programme enquiries, resource requests, partnership
                conversations, and follow-up on current public calls. CSRC&apos;s team is based
                in Addis Ababa and operates Monday to Friday.
              </p>

              <div className={styles.quickLinks}>
                <a href={`mailto:${contactDetails.email}`} className={styles.quickLink}>
                  Email the team
                </a>
                <a
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.quickLink}
                >
                  LinkedIn page
                </a>
                <a
                  href={contactDetails.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.quickLink}
                >
                  Facebook
                </a>
              </div>
            </div>

            <div className={styles.heroDetailCard}>
              <div className={styles.detailBlock}>
                <span className={styles.detailLabel}>Address</span>
                {contactDetails.address.map((line) => (
                  <p key={line} className={styles.detailLine}>{line}</p>
                ))}
              </div>

              <hr className={styles.divider} />

              <div className={styles.detailBlock}>
                <span className={styles.detailLabel}>Email</span>
                <a href={`mailto:${contactDetails.email}`} className={styles.detailLink}>
                  {contactDetails.email}
                </a>
              </div>

              <hr className={styles.divider} />

              <div className={styles.detailBlock}>
                <span className={styles.detailLabel}>Phone</span>
                <a
                  href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}
                  className={styles.detailLink}
                >
                  {contactDetails.phone}
                </a>
              </div>

              <hr className={styles.divider} />

              <div className={styles.detailBlock}>
                <span className={styles.detailLabel}>Website</span>
                <a
                  href={contactDetails.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.detailLink}
                >
                  {contactDetails.website}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className={styles.section}>
        <div className={`container ${styles.shell}`}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>How to reach us</p>
            <h2 className={styles.sectionTitle}>Contact channels</h2>
            <p className={styles.sectionLead}>
              Email is the primary channel for all enquiries. Phone and social channels are
              available for general contact and updates.
            </p>
          </div>

          <div className={styles.channelGrid}>
            {channels.map((ch) => (
              <div key={ch.title} className={styles.channelCard}>
                <div className={styles.channelIcon}>{ch.icon}</div>
                <h3 className={styles.channelTitle}>{ch.title}</h3>
                <p className={styles.channelText}>{ch.text}</p>
                <a
                  href={ch.href}
                  target={ch.href.startsWith('http') ? '_blank' : undefined}
                  rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={styles.channelAction}
                >
                  {ch.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry types */}
      <section className={styles.section}>
        <div className={`container ${styles.shell}`}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>What to write about</p>
            <h2 className={styles.sectionTitle}>Types of enquiries</h2>
            <p className={styles.sectionLead}>
              CSRC receives enquiries from civil society organisations, funders, researchers,
              and individuals across Ethiopia and internationally.
            </p>
          </div>

          <div className={styles.enquiryGrid}>
            {enquiryTypes.map((item, i) => (
              <article key={item.title} className={styles.enquiryCard}>
                <span className={styles.enquiryIndex}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={styles.enquiryTitle}>{item.title}</h3>
                <p className={styles.enquiryText}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
