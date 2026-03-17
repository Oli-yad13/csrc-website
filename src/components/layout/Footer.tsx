import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topRow}>
                    <div className={styles.brandCol}>
                        <Link href="/" className={styles.logoLink}>
                            <Image
                                src="/logo green.svg"
                                alt="CSRC Logo"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: 'auto', height: '50px', filter: 'brightness(0) invert(1)' }}
                            />
                        </Link>
                        <p className={styles.brandDesc}>
                            Civil Society Resource Center — Ethiopia&apos;s national hub for civic learning, dialogue, and innovation.
                        </p>
                        <p className={styles.address}>
                            Addis Ababa, Ethiopia
                        </p>
                    </div>

                    <div className={styles.linksCol}>
                        <h4 className={styles.colTitle}>Who we are</h4>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/team">Our Team</Link></li>
                            <li><Link href="/supporters">Supporters &amp; Affiliates</Link></li>
                            <li><Link href="/governance">Governance</Link></li>
                            <li><Link href="/finances">Finances</Link></li>
                            <li><Link href="/opportunities">Opportunities</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linksCol}>
                        <h4 className={styles.colTitle}>What we do</h4>
                        <ul>
                            <li><Link href="/programs">Programmes</Link></li>
                            <li><Link href="/resources">Knowledge Hub</Link></li>
                            <li><Link href="/blog">Insights</Link></li>
                            <li><Link href="/events">Events</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linksCol}>
                        <h4 className={styles.colTitle}>Connect</h4>
                        <ul>
                            <li><a href="https://et.linkedin.com/company/civilsocietyresourcecenter" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://www.facebook.com/CSRCEthiopia" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="mailto:contact@csrc-et.org">Email Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <div className={styles.bottomContainer}>
                    <span>&copy; {new Date().getFullYear()} Civil Society Resource Center. All rights reserved.</span>
                    <div className={styles.bottomLinks}>
                        <Link href="/privacy">Privacy</Link>
                        <Link href="/terms">Terms of use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
