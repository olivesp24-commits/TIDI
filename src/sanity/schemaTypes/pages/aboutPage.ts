import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'mission', title: 'Mission & Vision' },
    { name: 'sections', title: 'Additional Content' },
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
      name: 'missionStatement',
      title: 'Mission Statement',
      type: 'text',
      rows: 4,
      group: 'mission',
    }),
    defineField({
      name: 'visionStatement',
      title: 'Vision Statement',
      type: 'text',
      rows: 4,
      group: 'mission',
    }),
    defineField({
      name: 'featuredSections',
      title: 'Page Content Blocks',
      type: 'array',
      of: [{ type: 'sectionBlock' }],
      group: 'sections',
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
        title: 'About Page Settings',
        subtitle: 'Live /about content'
      };
    },
  },
});
