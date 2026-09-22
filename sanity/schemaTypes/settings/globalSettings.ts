import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'TIDI',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumbers',
      title: 'Phone Numbers',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'address',
      title: 'Office Address',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        defineField({
          name: 'socialLink',
          title: 'Social Link',
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform', type: 'string', options: { list: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'YouTube'] } },
            { name: 'url', title: 'URL', type: 'url' },
          ]
        })
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Global Site Settings',
      };
    },
  },
});
