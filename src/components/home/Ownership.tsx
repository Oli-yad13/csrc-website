import Image from 'next/image';
import Link from 'next/link';
import { logoPartners, ownershipNarrative } from '@/content/csrcContent';
import PartnerCarousel from './PartnerCarousel';
import styles from './Ownership.module.css';

export default function Ownership() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.hero}>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>
                            {ownershipNarrative.heading}
                        </h2>
                        <Link href={ownershipNarrative.cta.href} className={styles.button}>
                            {ownershipNarrative.cta.label}
                        </Link>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={ownershipNarrative.image}
                            alt="Collaborative ownership"
                            fill
                            sizes="(max-width: 968px) 100vw, 50vw"
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>
            </div>
            
            {/* Logos Section */}
            <div className={styles.logosSection}>
                <div className="container">
                    <PartnerCarousel partners={logoPartners} />
                </div>
            </div>
        </section>
    );
}

