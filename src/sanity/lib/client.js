import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'
import { LATEST } from 'sanity'

 const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, 
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export default client;