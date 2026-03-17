import { client } from '@/sanity/lib/client'
import { blogPostsQuery } from '@/sanity/lib/queries'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { format } from 'date-fns'
import styles from './page.module.css'
import type { SanityImageSource } from '@sanity/image-url'

type BlogCategory = {
  title: string
  slug: {
    current: string
  }
}

type BlogPostPreview = {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  publishedAt?: string
  mainImage?: {
    alt?: string
  } & SanityImageSource
  author?: {
    name: string
  }
  categories?: BlogCategory[]
}

async function getBlogPosts() {
  try {
    return await client.fetch<BlogPostPreview[]>(blogPostsQuery)
  } catch {
    return []
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.breadcrumb}>Insights</div>
          <h1 className={styles.pageTitle}>Insights</h1>
          <p className={styles.heroText}>
            Explore stories, analysis, and reflections shared by our team and partners. From programme updates to sector-wide research, our insights provide a window into the work of strengthening civil society in Ethiopia.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className={styles.postsSection}>
        <div className="container">
          <div className={styles.postsGrid}>
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className={styles.postCard}
              >
                {post.mainImage && (
                  <div className={styles.postImageWrapper}>
                    <Image
                      src={urlFor(post.mainImage).width(600).height(400).url()}
                      alt={post.mainImage.alt || post.title}
                      fill
                      className={styles.postImage}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className={styles.postContent}>
                  <div className={styles.postMeta}>
                    {post.publishedAt && (
                      <time dateTime={post.publishedAt}>
                        {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                      </time>
                    )}
                    {post.author && (
                      <>
                        <span className={styles.metaDot}>·</span>
                        <span>{post.author.name}</span>
                      </>
                    )}
                  </div>
                  <h2 className={styles.postTitle}>
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className={styles.postExcerpt}>{post.excerpt}</p>
                  )}
                  {post.categories && post.categories.length > 0 && (
                    <div className={styles.postTags}>
                      {post.categories.map((category) => (
                        <span
                          key={category.slug.current}
                          className={styles.postTag}
                        >
                          {category.title}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <div className={styles.emptyState}>
              <p>No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
