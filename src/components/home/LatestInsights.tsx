import Image from 'next/image';
import Link from 'next/link';
import { homeHighlights } from '@/content/csrcContent';
import { featuredLinkedInPost } from '@/content/linkedinFeed';
import styles from './LatestInsights.module.css';

export default function LatestInsights() {
    return (
        <section className={styles.section} id="featured-work">
            <div className={`container ${styles.shell}`}>
                <div className={styles.intro}>
                    <div className={styles.introCopy}>
                        <p className={styles.kicker}>Editorial and programmatic highlights</p>
                        <h2 className={styles.sectionTitle}>Featured work</h2>
                    </div>
                    <p className={styles.sectionText}>
                        Featured work brings together active programme areas, current public notices,
                        and learning formats that show how CSRC supports civil society organisations
                        through knowledge, convening, and field-facing practice.
                    </p>
                </div>

                <Link href={featuredLinkedInPost.href} className={styles.featured} target="_blank" rel="noopener noreferrer">
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
                                {["Research", "Application notice"].map((tag) => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                            <span className={styles.featuredLink}>Read the notice</span>
                        </div>
                    </div>
                </Link>

                <div className={styles.highlightsGrid}>
                    {homeHighlights.map((post) => (
                        <Link
                            key={post.id}
                            href={post.href}
                            className={styles.card}
                        >
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
                    ))}
                </div>
            </div>
        </section>
    );
}
