import { createCurrentUserHool, createClient } from "next-sanity";
import createImageUrlBuilder from "sanityimage-url";

// configuration for connecting backend
// refer documentation https://www.sanity.io/guides/sanity-nextjs-tailwindcss
export const config = {
  dataset: process.env.SANITY_DATASET || "production",
  projectId: process.env.SANITY_PROJECT_ID,
  apiVersion: "2021-08-11",
  useCdn: process.env.NODE_ENV === "production",
};


export const sanityClient = createClient(config)

// helper function for generating image urls with only the asset reference data in your documents.
// refer www.sanity.io/docs/image-url
export const urlFor =(source) => createImageUrlBuilder(config).image(source)

