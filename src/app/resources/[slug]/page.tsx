import { client } from '@/sanity/lib/client'
import { resourceBySlugQuery, resourceSlugsQuery } from '@/sanity/lib/queries'
import PortableText from '@/components/blog/PortableText'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { format } from 'date-fns'
import { Metadata } from 'next'
import Link from 'next/link'
import { PortableTextBlock } from '@portabletext/types'
import type { SanityImageSource } from '@sanity/image-url'
import styles from './page.module.css'

type Resource = {
  title: string
  description?: string
  type?: string
  theme?: string
  source?: string
  publishedAt?: string
  image?: { alt?: string } & SanityImageSource
  linkType?: 'url' | 'file'
  externalUrl?: string
  fileUrl?: string
  body?: PortableTextBlock[]
}

async function getResource(slug: string) {
  try {
    return await client.fetch<Resource | null>(resourceBySlugQuery, { slug })
  } catch {
    return null
  }
}

async function getAllSlugs() {
  try {
    return await client.fetch<{ slug: string }[]>(resourceSlugsQuery)
  } catch {
    return []
  }
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const resource = await getResource(slug)
  if (!resource) return { title: 'Resource Not Found' }
  return {
    title: `${resource.title} — CSRC`,
    description: resource.description,
  }
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const resource = await getResource(slug)

  if (!resource) {
    return (
      <main className={styles.main}>
        <div className={`container ${styles.notFound}`}>
          <h1 className={styles.notFoundTitle}>Resource not found</h1>
          <Link href="/resources" className={styles.backLink}>← Back to Knowledge Hub</Link>
        </div>
      </main>
    )
  }

  const downloadHref = resource.linkType === 'file' ? resource.fileUrl : resource.externalUrl

  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.shell}>
          <Link href="/resources" className={styles.backLink}>← Knowledge Hub</Link>

          <div className={styles.metaRow}>
            {resource.type && <span className={styles.typePill}>{resource.type}</span>}
            {resource.theme && <span className={styles.themePill}>{resource.theme}</span>}
            {resource.publishedAt && (
              <span className={styles.datePill}>
                {format(new Date(resource.publishedAt), 'MMMM d, yyyy')}
              </span>
            )}
          </div>

          <h1 className={styles.title}>{resource.title}</h1>

          {resource.description && (
            <p className={styles.excerpt}>{resource.description}</p>
          )}

          <div className={styles.heroFooter}>
            {resource.source && (
              <span className={styles.source}>Published by {resource.source}</span>
            )}
            {downloadHref && (
              <a
                href={downloadHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.downloadBtn}
              >
                {resource.linkType === 'file' ? 'Download PDF' : 'View Original'}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Cover image */}
      {resource.image && (
        <section className={styles.coverSection}>
          <div className={styles.shellWide}>
            <div className={styles.coverWrapper}>
              <Image
                src={urlFor(resource.image).width(1400).height(600).url()}
                alt={(resource.image as { alt?: string }).alt || resource.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="(max-width: 768px) 100vw, 1280px"
              />
            </div>
          </div>
        </section>
      )}

      {/* Body content */}
      {resource.body && resource.body.length > 0 && (
        <section className={styles.contentSection}>
          <div className={styles.shell}>
            <PortableText content={resource.body} />
          </div>
        </section>
      )}

      {/* Footer nav */}
      <div className={styles.footerNav}>
        <div className={styles.shell}>
          <Link href="/resources" className={styles.footerBackLink}>← Back to Knowledge Hub</Link>
        </div>
      </div>
    </main>
  )
}
