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

type BlogCategory = {
  title: string
  slug: {
    current: string
  }
}

type BlogPost = {
  title: string
  excerpt?: string
  publishedAt?: string
  mainImage?: {
    alt?: string
  } & SanityImageSource
  author?: {
    name: string
    image?: SanityImageSource
  }
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
  return slugs.map((post: { slug: string }) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImage
        ? [urlFor(post.mainImage).width(1200).height(630).url()]
        : [],
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
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <header className="mb-8">
        {post.categories && post.categories.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <span
                key={category.slug.current}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {category.title}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

        {post.excerpt && (
          <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>
        )}

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-8">
          {post.publishedAt && (
            <time dateTime={post.publishedAt}>
              Published {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
            </time>
          )}
          {post.author && (
            <div className="flex items-center gap-2">
              {post.author.image && (
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={urlFor(post.author.image).width(32).height(32).url()}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <span>{post.author.name}</span>
            </div>
          )}
        </div>

        {post.mainImage && (
          <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden mb-8">
            <Image
              src={urlFor(post.mainImage).width(1200).height(630).url()}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        )}
      </header>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        {post.content && <PortableText content={post.content} />}
      </div>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Footer Navigation */}
      <div className="mt-12 pt-8 border-t">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          ← Back to Blog
        </Link>
      </div>
    </article>
  )
}

