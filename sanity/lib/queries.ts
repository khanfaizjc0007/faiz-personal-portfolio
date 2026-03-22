// sanity/lib/queries.ts

export const PROJECT_BY_SLUG_QUERY = `
*[_type == "project" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  description,
  fullDescription,
  category,
  showOnHome,
  tags,
  technologies,
  completionYear,
  role,
  client,
  projectType,
  status,
  liveUrl,
  githubUrl,
  clientProblem,
  solution,
  contribution,
  features,
  thumbnail{
    asset->{ url }
  },
  thumbnailVideo{
    "videoUrl": asset->url
  },
  thumbnailPdf{
    "pdfUrl": asset->url
  },
  images[]{
    asset->{ url },
    alt
  },
  seo
}
`;

export const ALL_PROJECT_SLUGS_QUERY = `
*[_type == "project"]{ "slug": slug.current }
`;

// All projects (used on /work page)
export const PROJECTS_QUERY = `
*[_type == "project"] | order(orderRank asc, _createdAt desc){
  _id,
  title,
  "slug": slug.current,
  description,
  category,
  thumbnail{ asset->{ _id, url } },
  tags,
  technologies,
  status,
  completionYear,
}
`;

// Only projects selected for the homepage
export const HOME_PROJECTS_QUERY = `
*[_type == "project" && showOnHome == true] | order(orderRank asc, _createdAt desc){
  _id,
  title,
  "slug": slug.current,
  description,
  category,
  thumbnail{ asset->{ _id, url } },
  tags,
  technologies,
  status,
  completionYear,
}
`;

export const ABOUT_PAGE_QUERY = `
*[_type == "aboutPage"][0]{
  bio,
  skills[]{
    category,
    items
  },
  experience[]{
    year,
    role,
    company
  }
}
`;