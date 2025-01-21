import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "tfm4zkfe";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.NEXT_PUBLIC_SANITY_API_TOKEN;
const apiVersion = '2025-01-17'; // Replace with your API version

export const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion,
  useCdn: true,
});
