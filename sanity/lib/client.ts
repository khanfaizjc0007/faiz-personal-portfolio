import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  ...(process.env.SANITY_API_WRITE_TOKEN && { token: process.env.SANITY_API_WRITE_TOKEN }),
})
