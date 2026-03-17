import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { programmes } from '@/content/csrcContent';
import styles from './page.module.css';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getProgramme(slug: string) {
  return programmes.find((programme) => programme.slug === slug);
}

export async function generateStaticParams() {
  return programmes.map((programme) => ({
    slug: programme.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const programme = getProgramme(slug);

  if (!programme) {
    return {
      title: 'Programme not found',
    };
  }

  return {
    title: `${programme.title} | CSRC`,
    description: programme.summary,
  };
}

export default async function ProgrammeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const programme = getProgramme(slug);

  if (!programme) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.breadcrumb}>Programme area</div>
          <span className={styles.status}>{programme.status}</span>
          <h1 className={styles.pageTitle}>{programme.title}</h1>
          <p className={styles.heroText}>{programme.summary}</p>
        </div>
      </section>

      <section className={styles.overviewSection}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div>
              <h2 className={styles.sectionTitle}>{programme.strapline}</h2>
              {programme.paragraphs.map((paragraph) => (
                <p key={paragraph} className={styles.bodyText}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className={styles.imageWrapper}>
              <Image src={programme.image} alt={programme.title} fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.highlightsSection}>
        <div className="container">
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Focus</h2>
              <div className={styles.stack}>
                {programme.focus.map((item) => (
                  <p key={item} className={styles.bodyText}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Public signals</h2>
              <div className={styles.stack}>
                {programme.highlights.map((item) => (
                  <p key={item} className={styles.bodyText}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <h2 className={styles.sectionTitle}>Partners and collaborators</h2>
            <div className={styles.list}>
              {programme.partners.map((partner) => (
                <span key={partner} className={styles.chip}>
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.linksSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Source trail</h2>
          <p className={styles.bodyText}>
            These pages are based on CSRC&apos;s public footprint and direct partner materials. As more
            official CSRC pages return, this section can be tightened further.
          </p>
          <div className={styles.sourceLinks}>
            {programme.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sourceLink}
              >
                {link.label}
              </a>
            ))}
            <Link href="/programs" className={styles.backLink}>
              Back to programmes
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
