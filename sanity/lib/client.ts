import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Always fetch the latest content (no CDN cache)
  useCdn: false,
  ...(process.env.SANITY_API_WRITE_TOKEN && { token: process.env.SANITY_API_WRITE_TOKEN }),
})
