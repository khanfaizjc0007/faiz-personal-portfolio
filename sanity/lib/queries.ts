// sanity/lib/queries.ts

export const PROJECT_BY_SLUG_QUERY = `
*[_type == "project" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  description,
  fullDescription,
  category,
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

export const PROJECTS_QUERY = `
*[_type == "project"] | order(_createdAt desc){
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