import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { ImageUrlBuilder } from 'sanity';

const builder: ImageUrlBuilder = imageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,  // Replace with your actual project ID
  dataset: 'production', // Replace with your dataset name if it's not "production"
});

export const urlFor = (source: SanityImageSource) => builder.image(source).url();
