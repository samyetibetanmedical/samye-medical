export default function sitemap() {
  const baseUrl = "https://samyemedical.com";

  const routes = ["", "/services", "/testimonials", "/about"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
