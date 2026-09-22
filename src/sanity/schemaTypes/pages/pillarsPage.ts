import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'pillarsPage',
  title: 'Our Pillars Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'pillars', title: 'Pillars Content' },
    { name: 'seo', title: 'SEO & Social' },
  ],
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      group: 'hero',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Subheadline',
      type: 'text',
      rows: 3,
      group: 'hero',
    }),
    defineField({
      name: 'pillars',
      title: 'The Pillars',
      type: 'array',
      of: [{ type: 'sectionBlock' }],
      group: 'pillars',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Our Pillars Page Settings',
        subtitle: 'Live /pillars content'
      };
    },
  },
});
