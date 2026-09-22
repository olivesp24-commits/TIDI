import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'updatePost',
  title: 'Updates & News',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Post Title',
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
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'galleryItem' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
    },
  },
});
