import type { Metadata } from "next";

export const siteConfig = {
  name: "Samye Tibetan Medical Centre",
  title: "Samye Tibetan Medical Centre",
  description:
    "Ancient Tibetan medicine for modern healing through the Sowa Rigpa tradition.",
  url: process.env.NEXT_PUBLIC_API_URL || "https://samyemedical.com",
  ogImage: "/assets/meta/opengraph.png",
  author: "Samye Tibetan Medical Centre",
};

export const pageMetadata = {
  "/": {
    title: "Home",
    description:
      "Discover holistic healing through authentic Sowa Rigpa Tibetan medicine at Samye Tibetan Medical Centre.",
    image: "/assets/meta/opengraph-img.png",
  },

  "/about": {
    title: "About Us",
    description:
      "Learn about Samye Tibetan Medical Centre, our philosophy, and the ancient Sowa Rigpa healing tradition.",
    image: "/assets/meta/about.png",
  },

  "/services": {
    title: "Clinical Services",
    description:
      "Explore our clinical services, including personalized Tibetan medicine consultations and holistic treatments.",
    image: "/assets/meta/services.png",
  },

  "/testimonials": {
    title: "Testimonials",
    description:
      "Read authentic patient stories and experiences with Sowa Rigpa Tibetan medicine at Samye Tibetan Medical Centre.",
    image: "/assets/meta/testimonials.png",
  },
};