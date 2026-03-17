'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { LogoPartner } from '@/content/csrcContent';
import styles from './PartnerCarousel.module.css';

type PartnerCarouselProps = {
  partners: LogoPartner[];
};

const AUTO_SCROLL_MS = 3400;
const END_OFFSET = 8;

function getStep(track: HTMLDivElement) {
  return Math.max(track.clientWidth * 0.72, 220);
}

export default function PartnerCarousel({ partners }: PartnerCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  function scrollTrack(direction: 1 | -1) {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const maxScrollLeft = Math.max(track.scrollWidth - track.clientWidth, 0);
    const nextLeft = track.scrollLeft + getStep(track) * direction;

    if (direction === 1 && track.scrollLeft >= maxScrollLeft - END_OFFSET) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
      return;
    }

    if (direction === -1 && track.scrollLeft <= END_OFFSET) {
      track.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
      return;
    }

    track.scrollTo({
      left: Math.min(Math.max(nextLeft, 0), maxScrollLeft),
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      const track = trackRef.current;

      if (!track) {
        return;
      }

      const maxScrollLeft = Math.max(track.scrollWidth - track.clientWidth, 0);
      const nextLeft = track.scrollLeft + getStep(track);

      track.scrollTo({
        left: track.scrollLeft >= maxScrollLeft - END_OFFSET ? 0 : Math.min(nextLeft, maxScrollLeft),
        behavior: 'smooth',
      });
    }, AUTO_SCROLL_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isPaused]);

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <div className={styles.header}>
        <p className={styles.kicker}>Partners and supporters</p>
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.control}
            onClick={() => scrollTrack(-1)}
            aria-label="Show previous partners"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            className={styles.control}
            onClick={() => scrollTrack(1)}
            aria-label="Show next partners"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div className={styles.viewport}>
        <div
          ref={trackRef}
          className={styles.track}
          role="region"
          aria-label="CSRC partner logos"
          tabIndex={0}
        >
          {partners.map((partner) => {
            const cardTitle = partner.fullName ?? partner.name;
            const content = (
              <>
                <div className={styles.logoFrame}>
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={cardTitle}
                      width={180}
                      height={86}
                      className={styles.logoImage}
                      unoptimized
                    />
                  ) : (
                    <div className={styles.fallback} aria-hidden="true">
                      <span className={styles.fallbackCode}>{partner.name}</span>
                      <span className={styles.fallbackLabel}>{cardTitle}</span>
                    </div>
                  )}
                </div>
                <div className={styles.cardText}>
                  <span className={styles.cardTitle}>{partner.name}</span>
                  {partner.fullName ? (
                    <span className={styles.cardMeta}>{partner.fullName}</span>
                  ) : null}
                </div>
              </>
            );

            if (partner.href) {
              return (
                <a
                  key={partner.name}
                  href={partner.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.card}
                  title={cardTitle}
                >
                  {content}
                </a>
              );
            }

            return (
              <article key={partner.name} className={styles.card} title={cardTitle}>
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
