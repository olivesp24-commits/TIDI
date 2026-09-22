import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'sectionBlock',
  title: 'Content Section Block',
  type: 'object',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Eyebrow / Tagline',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'ctaButton',
    }),
  ],
  preview: {
    select: { title: 'heading', subtitle: 'tagline' },
  },
});
