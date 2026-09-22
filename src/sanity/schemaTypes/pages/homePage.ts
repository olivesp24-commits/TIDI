import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'stats', title: 'Impact Stats' },
    { name: 'sections', title: 'Page Sections' },
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
      name: 'heroSlides',
      title: 'Hero Slideshow Images',
      type: 'array',
      of: [{ type: 'galleryItem' }],
      group: 'hero',
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
        title: 'Home Page Settings',
        subtitle: 'Live root page content (/)'
      };
    },
  },
});
