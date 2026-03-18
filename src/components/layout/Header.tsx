'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isWhoWeAreOpen, setIsWhoWeAreOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleWhoWeAre = () => {
        setIsWhoWeAreOpen(!isWhoWeAreOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsWhoWeAreOpen(false);
            }
        };

        if (isWhoWeAreOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isWhoWeAreOpen]);

    return (
        <header className={styles.header}>
            <div className={`${styles.container} ${styles.mainRow}`}>
                <Link href="/" className={styles.logoContainer} onClick={closeMenu}>
                    <Image
                        src="/logo green.svg"
                        alt="CSRC Logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority
                        style={{ width: 'auto', height: '56px' }}
                    />
                    <div className={styles.brandBlock}>
                        <span className={styles.brandMark}>CSRC</span>
                        <div className={styles.brandName}>
                            Civil Society<br />Resource Center
                        </div>
                    </div>
                </Link>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <div className={styles.dropdownContainer} ref={dropdownRef}>
                        <button
                            className={`${styles.navLink} ${styles.dropdownTrigger}`}
                            onClick={toggleWhoWeAre}
                            aria-expanded={isWhoWeAreOpen}
                            aria-haspopup="true"
                        >
                            Who We Are
                            <svg
                                className={`${styles.dropdownArrow} ${isWhoWeAreOpen ? styles.dropdownArrowOpen : ''}`}
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 4.5L6 7.5L9 4.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        {isWhoWeAreOpen && (
                            <div className={styles.dropdownMenu}>
                                <Link href="/about" className={styles.dropdownItem} onClick={() => { setIsWhoWeAreOpen(false); closeMenu(); }}>
                                    <span>About Us</span>
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 1L6 4L2 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                                <Link href="/team" className={styles.dropdownItem} onClick={() => { setIsWhoWeAreOpen(false); closeMenu(); }}>
                                    <span>Our Team</span>
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 1L6 4L2 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                                <Link href="/supporters" className={styles.dropdownItem} onClick={() => { setIsWhoWeAreOpen(false); closeMenu(); }}>
                                    <span>Supporters & Affiliates</span>
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 1L6 4L2 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                                <Link href="/governance" className={styles.dropdownItem} onClick={() => { setIsWhoWeAreOpen(false); closeMenu(); }}>
                                    <span>Governance</span>
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 1L6 4L2 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                                <Link href="/finances" className={styles.dropdownItem} onClick={() => { setIsWhoWeAreOpen(false); closeMenu(); }}>
                                    <span>Finances</span>
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 1L6 4L2 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                                <Link href="/opportunities" className={styles.dropdownItem} onClick={() => { setIsWhoWeAreOpen(false); closeMenu(); }}>
                                    <span>Opportunities</span>
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 1L6 4L2 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link href="/programs" className={styles.navLink} onClick={closeMenu}>What We Do</Link>
                    <Link href="/resources" className={styles.navLink} onClick={closeMenu}>Knowledge Hub</Link>
                    <Link href="/blog" className={styles.navLink} onClick={closeMenu}>Insights</Link>
                    <Link href="/events" className={styles.navLink} onClick={closeMenu}>Events</Link>
                    <Link href="/contact" className={styles.contactButtonMobile} onClick={closeMenu}>Get in touch</Link>
                </nav>

                <div className={styles.actions}>
                    <Link href="/contact" className={styles.contactButton}>
                        Get in touch
                    </Link>
                    <button
                        className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className={styles.mobileOverlay} onClick={closeMenu}></div>
            )}
        </header>
    );
}
