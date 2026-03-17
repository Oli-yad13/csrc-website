import Link from 'next/link';
import Image from 'next/image';
import { featuredProgrammes } from '@/content/csrcContent';
import styles from './FeaturedPrograms.module.css';

export default function FeaturedPrograms() {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Programme Areas</h2>
                <div className={styles.grid}>
                    {featuredProgrammes.map((program) => (
                        <article key={program.slug} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={program.image}
                                    alt={program.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{program.title}</h3>
                                <p className={styles.cardDescription}>{program.summary}</p>
                                <Link href={`/programs/${program.slug}`} className={styles.cardLink}>
                                    Explore area →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
