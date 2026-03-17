import Link from 'next/link';
import styles from './CTABanner.module.css';

export default function CTABanner() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.heading}>
                        Looking for a training partner, a civic resource, or a route into the sector?
                    </h2>
                    <Link href="/contact" className={styles.ctaButton}>
                        Contact CSRC
                    </Link>
                </div>
            </div>
        </section>
    );
}
