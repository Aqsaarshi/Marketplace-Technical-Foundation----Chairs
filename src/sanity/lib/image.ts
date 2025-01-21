import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,  // Make sure this is your actual project ID
  dataset: 'production', // Adjust this if using a different dataset
});

export const urlFor = (source: any) => builder.image(source).url();
