import { client } from '@/sanity/lib/client'
import { blogPostBySlugQuery, blogPostSlugsQuery } from '@/sanity/lib/queries'
import PortableText from '@/components/blog/PortableText'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { format } from 'date-fns'
import { Metadata } from 'next'
import Link from 'next/link'
import { PortableTextBlock } from '@portabletext/types'
import type { SanityImageSource } from '@sanity/image-url'
import styles from './page.module.css'

type BlogCategory = {
  title: string
  slug: { current: string }
}

type BlogPost = {
  title: string
  excerpt?: string
  publishedAt?: string
  mainImage?: { alt?: string } & SanityImageSource
  author?: { name: string; image?: SanityImageSource }
  categories?: BlogCategory[]
  tags?: string[]
  content?: PortableTextBlock[]
}

async function getBlogPost(slug: string) {
  try {
    return await client.fetch<BlogPost | null>(blogPostBySlugQuery, { slug })
  } catch {
    return null
  }
}

async function getAllSlugs() {
  try {
    return await client.fetch<{ slug: string }[]>(blogPostSlugsQuery)
  } catch {
    return []
  }
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: `${post.title} — CSRC`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : [],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return (
      <main className={styles.main}>
        <div className={`container ${styles.notFound}`}>
          <h1 className={styles.notFoundTitle}>Post not found</h1>
          <Link href="/blog" className={styles.backLink}>← Back to Insights</Link>
        </div>
      </main>
    )
  }

  return (
    <main className={styles.main}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.shell}>
          <Link href="/blog" className={styles.backLink}>← All insights</Link>

          <div className={styles.metaRow}>
            {post.categories?.map((cat) => (
              <span key={cat.slug.current} className={styles.category}>{cat.title}</span>
            ))}
            {post.publishedAt && (
              <span className={styles.datePill}>
                {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
              </span>
            )}
          </div>

          <h1 className={styles.title}>{post.title}</h1>

          {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}

          {post.author && (
            <div className={styles.authorRow}>
              {post.author.image && (
                <div className={styles.authorAvatar}>
                  <Image
                    src={urlFor(post.author.image).width(48).height(48).url()}
                    alt={post.author.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}
              <span className={styles.authorName}>{post.author.name}</span>
            </div>
          )}
        </div>
      </section>

      {/* ── Cover image ── */}
      {post.mainImage && (
        <section className={styles.coverSection}>
          <div className={styles.shellWide}>
            <div className={styles.coverWrapper}>
              <Image
                src={urlFor(post.mainImage).width(1400).height(700).url()}
                alt={post.mainImage.alt || post.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="(max-width: 768px) 100vw, 1280px"
              />
            </div>
          </div>
        </section>
      )}

      {/* ── Article content ── */}
      <section className={styles.contentSection}>
        <div className={styles.shell}>
          {post.content && <PortableText content={post.content} />}

          {post.tags && post.tags.length > 0 && (
            <div className={styles.tagsSection}>
              <p className={styles.tagsLabel}>Tags</p>
              <div className={styles.tagsList}>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Footer nav ── */}
      <div className={styles.footerNav}>
        <div className={styles.shell}>
          <Link href="/blog" className={styles.footerBackLink}>← Back to Insights</Link>
        </div>
      </div>
    </main>
  )
}
