import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { resourcesQuery } from '@/sanity/lib/queries';
import { resources as staticResources } from '@/content/csrcContent';
import type { SanityImageSource } from '@sanity/image-url';
import styles from './page.module.css';

type SanityResource = {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  type?: string;
  theme?: string;
  source?: string;
  image?: { alt?: string } & SanityImageSource;
  linkType?: 'url' | 'file';
  externalUrl?: string;
  fileUrl?: string;
  publishedAt?: string;
  featured?: boolean;
  hasBody?: boolean;
};

async function getResources(): Promise<SanityResource[]> {
  try {
    return await client.fetch<SanityResource[]>(resourcesQuery);
  } catch {
    return [];
  }
}

const themes = ['Knowledge hub', 'Legal guidance', 'Funding context', 'Programme briefs'];

export default async function ResourcesPage() {
  const sanityResources = await getResources();
  const hasSanityContent = sanityResources.length > 0;

  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.breadcrumb}>Resources</div>
          <h1 className={styles.pageTitle}>Knowledge hub</h1>
          <p className={styles.heroText}>
            CSRC&apos;s public knowledge footprint currently lives across partner programme pages,
            archived materials, and social updates. This hub pulls those sources into one place so
            visitors can find the most useful public references quickly.
          </p>
        </div>
      </section>

      <section className={styles.filtersSection}>
        <div className="container">
          <div className={styles.filtersRow}>
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Current focus</span>
              <div className={styles.filterTags}>
                {themes.map((theme) => (
                  <span key={theme} className={`${styles.filterTag} ${styles.filterTagActive}`}>
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.resourcesSection}>
        <div className="container">
          {hasSanityContent ? (
            <div className={styles.resourcesGrid}>
              {sanityResources.map((resource) => {
                // Prefer internal detail page if body content exists
              const href = resource.hasBody
                ? `/resources/${resource.slug.current}`
                : resource.linkType === 'file'
                ? resource.fileUrl
                : resource.externalUrl;

                const imageUrl = resource.image
                  ? urlFor(resource.image).width(600).height(400).url()
                  : null;

                const card = (
                  <div className={styles.resourceCard}>
                    <div className={styles.resourceImageWrapper}>
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={
                            (resource.image && 'alt' in resource.image
                              ? (resource.image as { alt?: string }).alt
                              : undefined) || resource.title
                          }
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      ) : (
                        <div className={styles.resourceImagePlaceholder} />
                      )}
                      {resource.type && (
                        <span className={styles.resourceType}>{resource.type}</span>
                      )}
                    </div>
                    <div className={styles.resourceContent}>
                      {resource.theme && (
                        <span className={styles.resourceTheme}>{resource.theme}</span>
                      )}
                      <h3 className={styles.resourceTitle}>{resource.title}</h3>
                      {resource.description && (
                        <p className={styles.resourceDesc}>{resource.description}</p>
                      )}
                      {resource.source && (
                        <p className={styles.resourceDesc} style={{ marginTop: '1rem', fontWeight: 500 }}>
                          {resource.linkType === 'file' ? 'Download' : 'View'} · {resource.source}
                        </p>
                      )}
                    </div>
                  </div>
                );

                if (href) {
                  if (resource.hasBody) {
                    return (
                      <Link key={resource._id} href={href} className={styles.resourceCardLink}>
                        {card}
                      </Link>
                    );
                  }
                  return (
                    <a
                      key={resource._id}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.resourceCardLink}
                    >
                      {card}
                    </a>
                  );
                }
                return <div key={resource._id}>{card}</div>;
              })}
            </div>
          ) : (
            // Fallback to static content while Sanity is being populated
            <div className={styles.resourcesGrid}>
              {staticResources.map((resource) => (
                <a
                  key={resource.href}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.resourceCard}
                >
                  <div className={styles.resourceImageWrapper}>
                    <Image src={resource.image} alt={resource.title} fill style={{ objectFit: 'cover' }} />
                    <span className={styles.resourceType}>{resource.type}</span>
                  </div>
                  <div className={styles.resourceContent}>
                    <span className={styles.resourceTheme}>{resource.theme}</span>
                    <h3 className={styles.resourceTitle}>{resource.title}</h3>
                    <p className={styles.resourceDesc}>{resource.description}</p>
                    <p className={styles.resourceDesc} style={{ marginTop: '1rem', fontWeight: 500 }}>
                      {resource.linkLabel} · {resource.source}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Need a specific document?</h2>
            <p className={styles.ctaText}>
              If you are looking for a report, manual, event recording, or partner brief that is not
              yet surfaced here, contact the centre directly.
            </p>
            <Link href="/contact" className={styles.outlineBtn}>
              Contact CSRC
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
