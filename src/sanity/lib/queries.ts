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
  tags
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
  content
}`

export const blogPostSlugsQuery = `*[_type == "blogPost" && defined(slug.current)][] {
  "slug": slug.current
}`

