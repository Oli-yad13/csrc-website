// ── Blog ──────────────────────────────────────────────────────────────────

export const blogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  author->{
    name,
    image
  },
  categories[]->{
    title,
    slug
  },
  tags,
  featured
}`

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  author->{
    name,
    image,
    bio
  },
  categories[]->{
    title,
    slug
  },
  tags,
  featured,
  content
}`

export const blogPostSlugsQuery = `*[_type == "blogPost" && defined(slug.current)][] {
  "slug": slug.current
}`

// Home page: one featured post + 3 most recent non-featured posts
export const featuredBlogPostQuery = `*[_type == "blogPost" && featured == true] | order(publishedAt desc)[0] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  author->{ name },
  categories[]->{ title, slug },
  tags
}`

export const recentBlogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc)[0...4] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  author->{ name },
  categories[]->{ title, slug },
  featured
}`

// ── Resources ─────────────────────────────────────────────────────────────

export const resourcesQuery = `*[_type == "resource"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  description,
  type,
  theme,
  source,
  image,
  linkType,
  externalUrl,
  "fileUrl": file.asset->url,
  publishedAt,
  featured,
  "hasBody": defined(body) && length(body) > 0
}`

export const resourceBySlugQuery = `*[_type == "resource" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  type,
  theme,
  source,
  image,
  linkType,
  externalUrl,
  "fileUrl": file.asset->url,
  publishedAt,
  body
}`

export const resourceSlugsQuery = `*[_type == "resource" && defined(slug.current) && defined(body) && length(body) > 0][] {
  "slug": slug.current
}`
