import { defineConfig, buildLegacyTheme } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemaTypes';

// Brand Theme matching TIDI colors (Navy and Lavender)
const brandTheme = buildLegacyTheme({
  '--black': '#1A3C7A', // brand-navy
  '--white': '#FAFAFA', // brand-offwhite
  '--brand-primary': '#C8BEFA', // brand-lavender
  '--main-navigation-color': '#1A3C7A',
  '--main-navigation-color--inverted': '#FAFAFA',
  '--focus-color': '#C8BEFA',
});

// Singletons that must never have more than 1 document instance
const SINGLETONS = [
  'homePage',
  'aboutPage',
  'pillarsPage',
  'globalSettings',
];

const PAGE_SINGLETONS = [
  { id: 'homePage', title: 'Home Page' },
  { id: 'aboutPage', title: 'About Page' },
  { id: 'pillarsPage', title: 'Our Pillars Page' },
];

export default defineConfig({
  name: 'default',
  title: 'TIDI Content Studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'a8rtjgod',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  theme: brandTheme,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content Management')
          .items([
            // 1. Pages Group (Singletons)
            S.listItem()
              .title('Pages')
              .child(
                S.list()
                  .title('Pages')
                  .items(
                    PAGE_SINGLETONS.map((page) =>
                      S.listItem()
                        .title(page.title)
                        .id(page.id)
                        .child(S.document().schemaType(page.id).documentId(page.id))
                    )
                  )
              ),

            S.divider(),

            // 2. Dynamic Collections (Repeatable Documents)
            S.documentTypeListItem('teamMember').title('Team Members'),
            S.documentTypeListItem('updatePost').title('Updates & News'),

            S.divider(),

            // 3. Global Site Settings
            S.listItem()
              .title('Site Settings')
              .child(
                S.list()
                  .title('Site Settings')
                  .items([
                    S.listItem()
                      .title('Global Brand Settings')
                      .id('globalSettings')
                      .child(S.document().schemaType('globalSettings').documentId('globalSettings')),
                  ])
              ),
          ]),
    }),
    visionTool(),
  ],

  // Prevent creating new instances of singletons via the (+) button
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !SINGLETONS.includes(schemaType)),
  },

  // Prevent deleting or duplicating singletons
  document: {
    actions: (input, context) =>
      SINGLETONS.includes(context.schemaType)
        ? input.filter(({ action }) => action && !['duplicate', 'delete'].includes(action))
        : input,
  },
});
