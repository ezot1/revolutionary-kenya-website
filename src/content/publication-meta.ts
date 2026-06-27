// Pure metadata (no asset imports) so build scripts can consume it via tsx.
export function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export interface PublicationMeta {
  title: string;
  image: string; // public URL under /images/publications/
  description: string;
}

export const publicationMeta: PublicationMeta[] = [
  {
    title: "On the Gen-Z Uprising of 2024",
    image: "/images/publications/gen-z-uprising.jpg",
    description: "PRC statement on the June–July 2024 mobilizations in Kenya and the tasks of the revolutionary movement.",
  },
  {
    title: "For a Workers' Government in Kenya",
    image: "/images/publications/workers-government.jpg",
    description: "Position paper on the strategic axis of a workers' government and the transitional programme of the PRC.",
  },
  {
    title: "Founding Resolutions of the PRC",
    image: "/images/publications/founding-resolutions.jpg",
    description: "The founding political resolutions of the Permanent Revolutionary Congress.",
  },
  {
    title: "What is Permanent Revolution?",
    image: "/images/publications/permanent-revolution.jpg",
    description: "An introduction to the theory of permanent revolution and its application to the Kenyan and African context.",
  },
  {
    title: "Theses on Imperialism in Africa",
    image: "/images/publications/imperialism-africa.jpg",
    description: "Theses on imperialism, debt, and the struggle for African liberation.",
  },
  {
    title: "The Gig Economy in Nairobi: A Class Analysis",
    image: "/images/publications/gig-economy.jpg",
    description: "A Marxist analysis of platform labour, boda boda riders, and the new fractions of the Kenyan working class.",
  },
  {
    title: "Permanent Revolution & the African Working Class",
    image: "/images/publications/african-working-class.jpg",
    description: "On the strategic role of the African working class in the struggle for socialism on the continent.",
  },
  {
    title: "Selected Writings of Kenyan Marxists 1960–1990",
    image: "/images/publications/kenyan-marxists.jpg",
    description: "An archive of Kenyan Marxist writings from independence through the underground period.",
  },
];