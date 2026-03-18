import { contactDetails } from '@/content/csrcContent';
import styles from './page.module.css';

/* ── Decorative SVGs ── */

function ConcentricRings() {
  return (
    <svg
      viewBox="0 0 400 400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.decorRings}
    >
      {[175, 145, 115, 85, 55, 28].map((r, i) => (
        <circle
          key={r}
          cx="200"
          cy="200"
          r={r}
          fill="none"
          stroke="#567f3d"
          strokeWidth={i === 0 ? 1.2 : 0.8}
          strokeOpacity={0.05 + i * 0.035}
          strokeDasharray={i % 2 === 1 ? '5 9' : undefined}
        />
      ))}
      <circle cx="200" cy="200" r="7" fill="#567f3d" fillOpacity="0.22" />
      <circle cx="200" cy="200" r="3.5" fill="#567f3d" fillOpacity="0.45" />
    </svg>
  );
}

function NetworkGraph() {
  const nodes = [
    { x: 185, y: 98, r: 15, main: true },
    { x: 58,  y: 52, r: 9  },
    { x: 312, y: 44, r: 8  },
    { x: 46,  y: 158, r: 7 },
    { x: 318, y: 155, r: 9 },
    { x: 128, y: 172, r: 6 },
    { x: 248, y: 168, r: 7 },
    { x: 185, y: 22,  r: 5 },
    { x: 95,  y: 108, r: 5 },
    { x: 270, y: 100, r: 6 },
  ];

  const edges: [number, number][] = [
    [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],
    [1,3],[1,8],[2,4],[2,9],[5,3],[6,4],[7,2],[8,5],[9,6],
  ];

  return (
    <svg
      viewBox="0 0 370 205"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.networkSvg}
    >
      {/* Orbit rings around centre */}
      <circle cx="185" cy="98" r="52"  fill="none" stroke="#567f3d" strokeWidth="1"    strokeOpacity="0.18" strokeDasharray="4 7" />
      <circle cx="185" cy="98" r="95"  fill="none" stroke="#567f3d" strokeWidth="0.75" strokeOpacity="0.11" strokeDasharray="3 9" />
      <circle cx="185" cy="98" r="135" fill="none" stroke="#567f3d" strokeWidth="0.5"  strokeOpacity="0.07" strokeDasharray="2 10" />

      {/* Edges */}
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke="rgba(86,127,61,0.3)"
          strokeWidth="1.4"
        />
      ))}

      {/* Outer nodes */}
      {nodes.filter((n) => !n.main).map((node, i) => (
        <circle
          key={i}
          cx={node.x}
          cy={node.y}
          r={node.r}
          fill="rgba(22,32,51,0.16)"
          stroke="rgba(22,32,51,0.12)"
          strokeWidth="1"
        />
      ))}

      {/* Centre node — CSRC */}
      <circle cx="185" cy="98" r="24" fill="rgba(86,127,61,0.18)" />
      <circle cx="185" cy="98" r="15" fill="#567f3d" fillOpacity="0.72" />
      <circle cx="185" cy="98" r="6"  fill="white"   fillOpacity="0.92" />
    </svg>
  );
}

/* ── Page data ── */

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
    text: "Follow CSRC's public page for updates on programmes, events, and opportunities.",
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

/* ── Page ── */

export default function ContactPage() {
  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.heroSection}>
        {/* Background decorations */}
        <ConcentricRings />

        <div className={`container ${styles.shell}`}>
          <div className={styles.heroGrid}>
            {/* Copy card */}
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

            {/* Detail card — illustration + contact facts */}
            <div className={styles.heroDetailCard}>
              <div className={styles.detailIllustration}>
                <NetworkGraph />
              </div>

              <div className={styles.detailContent}>
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
