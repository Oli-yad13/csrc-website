import Image from 'next/image';
import Link from 'next/link';
import { homeHighlights } from '@/content/csrcContent';
import { featuredLinkedInPost } from '@/content/linkedinFeed';
import styles from './LatestInsights.module.css';

export default function LatestInsights() {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Featured Work</h2>

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
                        <h3 className={styles.featuredTitle}>{featuredLinkedInPost.title}</h3>
                        <p className={styles.featuredExcerpt}>{featuredLinkedInPost.excerpt}</p>
                        <p className={styles.featuredMeta}>
                            {featuredLinkedInPost.dateLabel} · {featuredLinkedInPost.kind}
                        </p>
                        <div className={styles.tags}>
                            {["Research", "Opportunity"].map((tag, i) => (
                                <span key={i} className={styles.tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </Link>

                <div className={styles.sliderSection}>
                    <div className={styles.slider}>
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
                                <h4 className={styles.cardTitle}>{post.title}</h4>
                                <p className={styles.cardMeta}>{post.date}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
