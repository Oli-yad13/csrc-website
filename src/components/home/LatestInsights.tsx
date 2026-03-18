import Image from 'next/image';
import Link from 'next/link';
import { homeHighlights } from '@/content/csrcContent';
import { featuredLinkedInPost } from '@/content/linkedinFeed';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { recentBlogPostsQuery } from '@/sanity/lib/queries';
import { format } from 'date-fns';
import styles from './LatestInsights.module.css';
import type { SanityImageSource } from '@sanity/image-url';

type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt?: string;
  mainImage?: { alt?: string } & SanityImageSource;
  author?: { name: string };
  categories?: { title: string; slug: { current: string } }[];
  featured?: boolean;
};

async function getRecentPosts(): Promise<BlogPost[]> {
  try {
    return await client.fetch<BlogPost[]>(recentBlogPostsQuery);
  } catch {
    return [];
  }
}

function formatDate(dateStr: string) {
  return format(new Date(dateStr), 'MMM d, yyyy');
}

export default async function LatestInsights() {
  const posts = await getRecentPosts();
  const useSanity = posts.length > 0;

  // Featured = explicitly flagged post, or first post
  const featuredPost = posts.find((p) => p.featured) ?? posts[0] ?? null;
  // Grid = remaining posts (not the featured one), up to 4
  const gridPosts = posts
    .filter((p) => p._id !== featuredPost?._id)
    .slice(0, 4);

  return (
    <section className={styles.section} id="featured-work">
      <div className={`container ${styles.shell}`}>
        <div className={styles.intro}>
          <div className={styles.introCopy}>
            <p className={styles.kicker}>Editorial and programmatic highlights</p>
            <h2 className={styles.sectionTitle}>
              {useSanity ? 'Latest insights' : 'Featured work'}
            </h2>
          </div>
          <p className={styles.sectionText}>
            Featured work brings together active programme areas, current public notices,
            and learning formats that show how CSRC supports civil society organisations
            through knowledge, convening, and field-facing practice.
          </p>
        </div>

        {/* ── Featured card ── */}
        {useSanity && featuredPost ? (
          <Link href={`/blog/${featuredPost.slug.current}`} className={styles.featured}>
            <div className={styles.featuredImage}>
              {featuredPost.mainImage && (
                <Image
                  src={urlFor(featuredPost.mainImage).width(900).height(600).url()}
                  alt={featuredPost.mainImage.alt || featuredPost.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              )}
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.featuredMetaRow}>
                <span className={styles.featuredPillPrimary}>
                  {featuredPost.featured ? 'Featured' : 'Latest'}
                </span>
                {featuredPost.categories?.[0] && (
                  <span className={styles.featuredPill}>
                    {featuredPost.categories[0].title}
                  </span>
                )}
                {featuredPost.publishedAt && (
                  <span className={styles.featuredDate}>
                    {formatDate(featuredPost.publishedAt)}
                  </span>
                )}
              </div>
              <h3 className={styles.featuredTitle}>{featuredPost.title}</h3>
              {featuredPost.excerpt && (
                <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
              )}
              <div className={styles.featuredFooter}>
                <div className={styles.tags}>
                  {featuredPost.categories?.slice(0, 2).map((cat) => (
                    <span key={cat.slug.current} className={styles.tag}>
                      {cat.title}
                    </span>
                  ))}
                </div>
                <span className={styles.featuredLink}>Read post</span>
              </div>
            </div>
          </Link>
        ) : (
          // Static fallback
          <Link
            href={featuredLinkedInPost.href}
            className={styles.featured}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.featuredImage}>
              <Image
                src={featuredLinkedInPost.image}
                alt={featuredLinkedInPost.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.featuredMetaRow}>
                <span className={styles.featuredPillPrimary}>Lead notice</span>
                <span className={styles.featuredPill}>{featuredLinkedInPost.kind}</span>
                <span className={styles.featuredDate}>{featuredLinkedInPost.dateLabel}</span>
              </div>
              <h3 className={styles.featuredTitle}>{featuredLinkedInPost.title}</h3>
              <p className={styles.featuredExcerpt}>{featuredLinkedInPost.excerpt}</p>
              <div className={styles.featuredFooter}>
                <div className={styles.tags}>
                  {['Research', 'Application notice'].map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <span className={styles.featuredLink}>Read the notice</span>
              </div>
            </div>
          </Link>
        )}

        {/* ── Highlights grid ── */}
        <div className={styles.highlightsGrid}>
          {useSanity ? (
            gridPosts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className={styles.card}
              >
                <div className={styles.cardImage}>
                  {post.mainImage && (
                    <Image
                      src={urlFor(post.mainImage).width(600).height(400).url()}
                      alt={post.mainImage.alt || post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  )}
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.cardEyebrow}>
                    {post.categories?.[0]?.title ?? 'Insight'}
                  </p>
                  <h4 className={styles.cardTitle}>{post.title}</h4>
                  {post.excerpt && (
                    <p className={styles.cardSummary}>{post.excerpt}</p>
                  )}
                  <div className={styles.cardFooter}>
                    <span className={styles.cardMeta}>
                      {post.publishedAt ? formatDate(post.publishedAt) : ''}
                    </span>
                    <span className={styles.cardPrompt}>Read</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            homeHighlights.map((post) => (
              <Link key={post.id} href={post.href} className={styles.card}>
                <div className={styles.cardImage}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.cardEyebrow}>{post.eyebrow}</p>
                  <h4 className={styles.cardTitle}>{post.title}</h4>
                  <p className={styles.cardSummary}>{post.summary}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.cardMeta}>{post.date}</span>
                    <span className={styles.cardPrompt}>Explore</span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
