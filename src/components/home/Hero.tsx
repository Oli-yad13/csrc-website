import Image from 'next/image';
import Link from 'next/link';
import { heroContent } from '@/content/csrcContent';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <p className={styles.kicker}>{heroContent.kicker}</p>
                        <h1 className={styles.title}>
                            {heroContent.title}
                        </h1>
                        <p className={styles.subtitle}>
                            {heroContent.summary}
                        </p>
                        <div className={styles.actions}>
                            <Link href={heroContent.primaryCta.href} className="btn">
                                {heroContent.primaryCta.label}
                            </Link>
                            <Link href={heroContent.secondaryCta.href} className={styles.secondaryLink}>
                                {heroContent.secondaryCta.label}
                            </Link>
                        </div>
                        <div className={styles.metrics}>
                            {heroContent.metrics.map((item) => (
                                <div key={item.label} className={styles.metric}>
                                    <span className={styles.metricLabel}>{item.label}</span>
                                    <span className={styles.metricValue}>{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.visualColumn}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={heroContent.image}
                                alt="Civil Society Collage"
                                fill
                                priority
                                sizes="(max-width: 968px) 100vw, 64vw"
                                quality={82}
                            />
                        </div>
                        <div className={styles.spotlight}>
                            <span className={styles.spotlightLabel}>{heroContent.spotlight.label}</span>
                            <p className={styles.spotlightText}>{heroContent.spotlight.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
