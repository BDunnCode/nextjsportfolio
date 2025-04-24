import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'
import { LATEST } from 'sanity'

export const client = createClient({
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: LATEST,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
