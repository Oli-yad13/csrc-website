import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'type',
      title: 'Resource Type',
      type: 'string',
      options: {
        list: [
          { title: 'Guide', value: 'Guide' },
          { title: 'Report', value: 'Report' },
          { title: 'Brief', value: 'Brief' },
          { title: 'Recording', value: 'Recording' },
          { title: 'Template', value: 'Template' },
          { title: 'Other', value: 'Other' },
        ],
      },
    }),
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {
        list: [
          { title: 'Knowledge hub', value: 'Knowledge hub' },
          { title: 'Legal guidance', value: 'Legal guidance' },
          { title: 'Funding context', value: 'Funding context' },
          { title: 'Programme briefs', value: 'Programme briefs' },
          { title: 'Advocacy', value: 'Advocacy' },
          { title: 'Other', value: 'Other' },
        ],
      },
    }),
    defineField({
      name: 'source',
      title: 'Source Organisation',
      type: 'string',
      description: 'e.g. CSRC, INTRAC, European Union',
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for accessibility and SEO',
        },
      ],
    }),
    defineField({
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          { title: 'External URL', value: 'url' },
          { title: 'Uploaded File (PDF, doc, etc.)', value: 'file' },
        ],
        layout: 'radio',
      },
      initialValue: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      hidden: ({ document }) => (document?.linkType as string) !== 'url',
    }),
    defineField({
      name: 'file',
      title: 'Upload File',
      type: 'file',
      hidden: ({ document }) => (document?.linkType as string) !== 'file',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      description: 'Pin this resource in a featured position on the Knowledge Hub',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
      theme: 'theme',
      media: 'image',
    },
    prepare({ title, type, theme, media }) {
      return {
        title,
        subtitle: [type, theme].filter(Boolean).join(' · '),
        media,
      }
    },
  },
})
