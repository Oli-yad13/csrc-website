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

export default function TeamPage() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.breadcrumb}>Who we are</div>
          <h1 className={styles.pageTitle}>Team and public directory</h1>
          <p className={styles.heroText}>{teamOverview.title}</p>
          <p className={styles.heroText}>{teamOverview.intro}</p>
          <p className={styles.heroText}>{teamOverview.secondary}</p>
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className="container">
          <div className={styles.teamCategory}>
            <h2 className={styles.categoryTitle}>Publicly referenced profiles</h2>
            <div className={styles.membersList}>
              {teamProfiles.map((member) => (
                <div key={member.name} className={styles.memberCard}>
                  <div className={styles.memberPhotoCol}>
                    <div className={styles.memberPhotoPlaceholder}>
                      <span className={styles.memberInitials}>{getInitials(member.name)}</span>
                    </div>
                  </div>
                  <div className={styles.memberInfo}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <div className={styles.memberTitle}>{member.title}</div>
                    <p className={styles.memberDesc}>{member.description}</p>
                    <div className={styles.connectBlock}>
                      <span className={styles.connectLabel}>Source</span>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.connectLink}
                      >
                        Public company profile
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.teamCategory}>
            <h2 className={styles.categoryTitle}>Current public name list</h2>
            <div className={styles.membersList}>
              {publicStaffNames.map((name) => (
                <div key={name} className={styles.memberCard}>
                  <div className={styles.memberPhotoCol}>
                    <div className={styles.memberPhotoPlaceholder}>
                      <span className={styles.memberInitials}>{getInitials(name)}</span>
                    </div>
                  </div>
                  <div className={styles.memberInfo}>
                    <h3 className={styles.memberName}>{name}</h3>
                    <div className={styles.memberTitle}>Publicly listed employee</div>
                    <p className={styles.memberDesc}>
                      This entry is included because the name appears on the public CSRC company
                      profile or in public-facing calls and partner materials.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.opportunitiesSection}>
        <div className="container">
          <div className={styles.oppContent}>
            <h2 className={styles.oppTitle}>Opportunities</h2>
            <p className={styles.oppText}>
              CSRC often uses public channels for fellowships, consultancy notices, and programme
              calls. Those live opportunities are collected on a separate page.
            </p>
            <Link href="/opportunities" className={styles.outlineBtn}>View opportunities</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
