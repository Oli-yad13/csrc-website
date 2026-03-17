import Image from 'next/image';
import Link from 'next/link';
import { heroContent } from '@/content/csrcContent';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.grid}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        {heroContent.title}
                    </h1>
                    <p className={styles.subtitle}>
                        {heroContent.summary}
                    </p>
                    <div className={styles.actions}>
                        <Link href={heroContent.primaryCta.href} className="btn btn-outline">
                            {heroContent.primaryCta.label}
                        </Link>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src={heroContent.image}
                        alt="Civil Society Collage"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 55vw"
                        quality={75}
                    />
                </div>
            </div>
        </section>
    );
}
