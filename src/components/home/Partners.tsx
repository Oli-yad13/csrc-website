import Image from 'next/image';
import styles from './Partners.module.css';

const partners = [
    'Friedrich-Ebert-Stiftung',
    'Freedom House',
    'UN Women',
    'CSSP2',
    'AFD'
];

export default function Partners() {
    return (
        <section className={styles.section}>
            <div className={styles.consortiumSection}>
                <div className={styles.consortiumContent}>
                    <h2 className={styles.consortiumHeading}>
                        We are a board-led strategic hub supported by a consortium of Ethiopia&apos;s leading human rights and civic platforms.
                    </h2>
                    <p className={styles.consortiumText}>
                        Our collaborative ownership structure facilitates institutional excellence and democratic renewal across the nation.
                    </p>
                    <button className={styles.ctaButton}>
                        Our unique ownership structure
                    </button>
                </div>
                <div className={styles.consortiumImage}>
                    <Image
                        src="/images/consortium-people.png"
                        alt="Consortium of Ethiopian civic leaders and organizations"
                        width={900}
                        height={620}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            objectFit: 'contain'
                        }}
                    />
                </div>
            </div>
            <div className={styles.partnersRow}>
                <div className={styles.logoGrid}>
                    <div className={styles.logoSlider}>
                        {partners.map((partner, index) => (
                            <div key={index} className={styles.logoItem}>
                                {partner}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
