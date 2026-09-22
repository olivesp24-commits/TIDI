import { client } from './client';

// =========================================
// REUSABLE GROQ PROJECTION FRAGMENTS
// =========================================

export const IMAGE_FIELDS = `{
  "src": asset->url,
  "alt": title,
  caption
}`;

export const GALLERY_FIELDS = `[]{
  "src": image.asset->url,
  "title": title,
  "caption": caption
}`;

export const CTA_FIELDS = `{
  label,
  href,
  style
}`;

export const SEO_FIELDS = `{
  metaTitle,
  metaDescription,
  "ogImage": ogImage.asset->url
}`;

// =========================================
// QUERIES
// =========================================

export async function getHomePage() {
  const query = `*[_type == "homePage"][0] {
    heroHeadline,
    heroSubheadline,
    "heroSlides": heroSlides${GALLERY_FIELDS},
    featuredSections[]{
      tagline,
      heading,
      body,
      cta${CTA_FIELDS}
    },
    seo${SEO_FIELDS}
  }`;

  try {
    return await client.fetch(query, {}, { next: { tags: ['homePage'] } });
  } catch (error) {
    console.error('Failed to fetch home page from Sanity:', error);
    return null;
  }
}

export async function getTeamMembers() {
  const query = `*[_type == "teamMember" && !(_id in path("drafts.**"))] | order(order asc) {
    _id,
    name,
    role,
    profession,
    phone,
    email,
    "image": image.asset->url,
    bio
  }`;

  try {
    return await client.fetch(query, {}, { next: { tags: ['teamMember'] } });
  } catch (error) {
    console.error('Failed to fetch team members:', error);
    return [];
  }
}

export async function getAboutPage() {
  const query = `*[_type == "aboutPage"][0] {
    heroHeadline,
    heroSubheadline,
    missionStatement,
    visionStatement,
    featuredSections[]{
      tagline,
      heading,
      body,
      cta${CTA_FIELDS}
    },
    seo${SEO_FIELDS}
  }`;

  try {
    return await client.fetch(query, {}, { next: { tags: ['aboutPage'] } });
  } catch (error) {
    console.error('Failed to fetch about page:', error);
    return null;
  }
}

export async function getPillarsPage() {
  const query = `*[_type == "pillarsPage"][0] {
    heroHeadline,
    heroSubheadline,
    pillars[]{
      tagline,
      heading,
      body,
      cta${CTA_FIELDS}
    },
    seo${SEO_FIELDS}
  }`;

  try {
    return await client.fetch(query, {}, { next: { tags: ['pillarsPage'] } });
  } catch (error) {
    console.error('Failed to fetch pillars page:', error);
    return null;
  }
}

export async function getUpdatePosts() {
  const query = `*[_type == "updatePost" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    "coverImage": coverImage.asset->url,
    excerpt
  }`;

  try {
    return await client.fetch(query, {}, { next: { tags: ['updatePost'] } });
  } catch (error) {
    console.error('Failed to fetch updates:', error);
    return [];
  }
}
