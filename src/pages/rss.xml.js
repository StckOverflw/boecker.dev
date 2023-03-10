import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import sanitizeHtml from "sanitize-html";

export async function get(context) {
  const postImportResult = import.meta.glob("./blog/**/*.{md,mdx}", {
    eager: true,
  });
  const posts = Object.values(postImportResult);

  return rss({
    title: "Emma's Blog",
    description:
      "A blog about different topics that interest me like politics and technology.",
    site: context.site ?? "https://stckoverflw.net",
    items: posts.map((post) => ({
      link: post.url,
      content: sanitizeHtml(post.compiledContent()),
      ...post.frontmatter,
    })),
  });
}
