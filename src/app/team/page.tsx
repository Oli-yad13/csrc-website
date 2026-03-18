import Link from 'next/link';
import { publicStaffNames, teamOverview, teamProfiles } from '@/content/csrcContent';
import styles from './page.module.css';

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('');
}

const roleSignals = [
  'Leadership and direction',
  'Programme coordination',
  'Communications and public visibility',
  'Operations and support functions',
];

const quickFacts = [
  {
    label: 'Publicly referenced profiles',
    value: String(teamProfiles.length),
  },
  {
    label: 'Names currently visible',
    value: String(publicStaffNames.length),
  },
  {
    label: 'Base',
    value: 'Addis Ababa',
  },
  {
    label: 'Presentation standard',
    value: 'Public evidence only',
  },
];

export default function TeamPage() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className={`container ${styles.shell}`}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopyCard}>
              <div className={styles.heroMetaRow}>
                <span className={styles.breadcrumb}>Who we are</span>
                <span className={styles.locationChip}>Public directory</span>
              </div>
              <h1 className={styles.pageTitle}>Team and public directory</h1>
              <p className={styles.heroLead}>{teamOverview.title}</p>
              <p className={styles.heroText}>{teamOverview.intro}</p>
              <p className={styles.heroText}>{teamOverview.secondary}</p>
              <div className={styles.heroActions}>
                <Link href="/opportunities" className="btn">
                  View opportunities
                </Link>
                <Link href="/contact" className={`btn btn-outline ${styles.secondaryAction}`}>
                  Contact CSRC
                </Link>
              </div>
            </div>

            <div className={styles.heroSideCard}>
              <div className={styles.sideBlock}>
                <p className={styles.sideEyebrow}>What the public record shows</p>
                <div className={styles.sideList}>
                  {roleSignals.map((item) => (
                    <div key={item} className={styles.sideItem}>
                      <span className={styles.sideMark}>•</span>
                      <p className={styles.sideText}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.statsGrid}>
                {quickFacts.map((item) => (
                  <div key={item.label} className={styles.statCard}>
                    <span className={styles.statLabel}>{item.label}</span>
                    <span className={styles.statValue}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`container ${styles.shell}`}>
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.sectionEyebrow}>Publicly referenced profiles</p>
              <h2 className={styles.sectionTitle}>
                Named people connected to CSRC in public-facing materials.
              </h2>
            </div>
            <p className={styles.sectionLead}>
              These profiles are presented carefully, using only roles or signals that appear in
              public partner pages, public notices, or CSRC&apos;s public company profile.
            </p>
          </div>

          <div className={styles.profileGrid}>
            {teamProfiles.map((member) => (
              <article key={member.name} className={styles.profileCard}>
                <div className={styles.profileHeader}>
                  <div className={styles.avatar}>
                    <span className={styles.avatarText}>{getInitials(member.name)}</span>
                  </div>
                  <div className={styles.profileMeta}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberRole}>{member.title}</p>
                  </div>
                </div>

                <p className={styles.memberDescription}>{member.description}</p>

                <div className={styles.profileFooter}>
                  <span className={styles.sourceLabel}>Source</span>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sourceLink}
                  >
                    Public company profile
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`container ${styles.shell}`}>
          <div className={styles.directoryCard}>
            <div className={styles.directoryIntro}>
              <div>
                <p className={styles.sectionEyebrow}>Current public name list</p>
                <h2 className={styles.sectionTitle}>
                  Additional names visible across CSRC&apos;s public footprint.
                </h2>
              </div>
              <p className={styles.sectionLead}>
                This list avoids invented biographies. It simply reflects names that appear in
                public channels connected to CSRC.
              </p>
            </div>

            <div className={styles.nameGrid}>
              {publicStaffNames.map((name) => (
                <div key={name} className={styles.namePill}>
                  <span className={styles.nameInitials}>{getInitials(name)}</span>
                  <div className={styles.nameText}>
                    <span className={styles.nameValue}>{name}</span>
                    <span className={styles.nameMeta}>Publicly listed employee</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`container ${styles.shell}`}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaIntro}>
              <p className={styles.sectionEyebrow}>Opportunities</p>
              <h2 className={styles.sectionTitle}>
                CSRC often uses public channels for fellowships, consultancy notices, and programme
                calls.
              </h2>
              <p className={styles.sectionLead}>
                Live opportunities are collected separately so the team directory can stay focused
                on the public structure of the organisation.
              </p>
            </div>

            <div className={styles.ctaActions}>
              <Link href="/opportunities" className="btn">
                View opportunities
              </Link>
              <Link href="/about" className={`btn btn-outline ${styles.secondaryAction}`}>
                About CSRC
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
