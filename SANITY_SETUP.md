# Sanity CMS Setup Guide

This project uses Sanity CMS for managing blog content. Follow these steps to set up and use the CMS.

## Initial Setup

### 1. Install Sanity CLI (if not already installed)
```bash
npm install -g @sanity/cli
```

### 2. Authenticate with Sanity
```bash
npx sanity login
```

### 3. Configure CORS
You need to add your local development URL to Sanity's CORS settings. You can do this via:
- Sanity Studio: Go to https://sanity.io/manage and select your project
- Or use the Sanity CLI: `sanity cors add http://localhost:3000 --credentials`

### 4. Create Environment Variables
Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=f7p76yd9
NEXT_PUBLIC_SANITY_DATASET=production
```

For write access (if needed for Studio), you'll also need:
```env
SANITY_API_READ_TOKEN=your_read_token_here
SANITY_API_WRITE_TOKEN=your_write_token_here
```

To get API tokens:
1. Go to https://sanity.io/manage
2. Select your project (f7p76yd9)
3. Go to API → Tokens
4. Create a new token with appropriate permissions

## Using Sanity Studio

### Access the Studio
Once the development server is running, visit:
```
http://localhost:3000/studio
```

This will open the Sanity Studio where you can:
- Create and edit blog posts
- Manage authors
- Manage categories
- Upload images

### Creating Your First Blog Post

1. Navigate to `/studio` in your browser
2. Click "Create new" → "Blog Post"
3. Fill in the required fields:
   - **Title**: The blog post title
   - **Slug**: Auto-generated from title (or customize)
   - **Excerpt**: Short description for previews
   - **Published At**: Publication date
   - **Author**: Select or create an author
   - **Main Image**: Featured image for the post
   - **Content**: The main blog content

### Adding Images Anywhere in Content

The blog schema supports inline images! When editing content:

1. In the content editor, place your cursor where you want the image
2. Click the "+" button or press `/` to see available blocks
3. Select "Image"
4. Upload or select an image
5. Configure:
   - **Alternative Text**: For accessibility
   - **Caption**: Optional image caption
   - **Alignment**: Left, Center, Right, or Full Width

Images can be placed anywhere in your content - between paragraphs, after headings, etc.

## Blog Features

### Content Types
- **Rich Text**: Full formatting support (headings, lists, quotes, links)
- **Inline Images**: Place images anywhere in content with alignment options
- **Categories**: Organize posts by category
- **Tags**: Add tags for better organization
- **Authors**: Assign authors to posts

### Pages
- `/blog` - Blog listing page
- `/blog/[slug]` - Individual blog post pages
- `/studio` - Sanity Studio for content management

## Schema Structure

### Blog Post Schema
- `title`: Post title
- `slug`: URL-friendly identifier
- `excerpt`: Short description
- `publishedAt`: Publication date
- `author`: Reference to author
- `mainImage`: Featured image
- `categories`: Array of category references
- `content`: Portable text with inline images
- `tags`: Array of tag strings

### Author Schema
- `name`: Author name
- `slug`: URL-friendly identifier
- `image`: Author photo
- `bio`: Author biography

### Category Schema
- `title`: Category name
- `slug`: URL-friendly identifier
- `description`: Category description

## Development

### Running the Development Server
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

The blog pages use static generation where possible for optimal performance.

## Troubleshooting

### Studio Not Loading
- Make sure you're authenticated: `npx sanity login`
- Check that CORS is configured for `http://localhost:3000`
- Verify environment variables are set correctly

### Images Not Displaying
- Check that images are uploaded to Sanity (not external URLs)
- Verify the image URL builder is working correctly
- Check browser console for errors

### Content Not Appearing
- Ensure posts are published (have a `publishedAt` date)
- Check that the dataset name matches (`production`)
- Verify the GROQ queries are correct

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/docs/js-client)
- [Portable Text](https://www.sanity.io/docs/block-content)

