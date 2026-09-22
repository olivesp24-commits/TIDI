import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'galleryItem',
  title: 'Gallery Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title / Alt Text',
      type: 'string',
      description: 'Important for accessibility.',
    }),
    defineField({
      name: 'caption',
      title: 'Detailed Caption',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Untitled Photo',
        media,
      };
    },
  },
});
