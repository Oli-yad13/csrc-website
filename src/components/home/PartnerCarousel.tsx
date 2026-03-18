import Image from 'next/image';
import type { LogoPartner } from '@/content/csrcContent';
import styles from './PartnerCarousel.module.css';

type PartnerCarouselProps = {
  partners: LogoPartner[];
};

function PartnerCard({
  partner,
  duplicate = false,
}: {
  partner: LogoPartner;
  duplicate?: boolean;
}) {
  const cardTitle = partner.fullName ?? partner.name;
  const content = (
    <div className={styles.logoFrame}>
      {partner.logo ? (
        <Image
          src={partner.logo}
          alt={duplicate ? '' : cardTitle}
          width={188}
          height={92}
          className={styles.logoImage}
          aria-hidden={duplicate}
          unoptimized
        />
      ) : (
        <div className={styles.fallback} aria-hidden="true">
          <span className={styles.fallbackCode}>{partner.name}</span>
          <span className={styles.fallbackLabel}>{cardTitle}</span>
        </div>
      )}
    </div>
  );

  if (partner.href) {
    return (
      <a
        key={`${partner.name}-${duplicate ? 'duplicate' : 'primary'}`}
        href={partner.href}
        target="_blank"
        rel="noreferrer"
        className={styles.card}
        title={cardTitle}
        aria-hidden={duplicate}
        tabIndex={duplicate ? -1 : 0}
      >
        {content}
      </a>
    );
  }

  return (
    <article
      key={`${partner.name}-${duplicate ? 'duplicate' : 'primary'}`}
      className={styles.card}
      title={cardTitle}
      aria-hidden={duplicate}
    >
      {content}
    </article>
  );
}

export default function PartnerCarousel({ partners }: PartnerCarouselProps) {
  const repeatedPartners = [...partners, ...partners];

  return (
    <div className={styles.carousel}>
      <div className={styles.header}>
        <p className={styles.kicker}>Working with</p>
        <p className={styles.summary}>
          Institutional, learning, and funding partners connected to CSRC&apos;s programme work.
        </p>
      </div>

      <div className={styles.viewport}>
        <div className={styles.marqueeTrack} style={{ animation: 'marqueeScroll 30s linear infinite' }}>
          {repeatedPartners.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className={styles.item} aria-hidden={index >= partners.length}>
              <PartnerCard partner={partner} duplicate={index >= partners.length} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
