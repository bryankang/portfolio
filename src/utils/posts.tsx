import fs from "fs/promises";
import grayMatter from "gray-matter";
import path from "path";
import readingTime from "reading-time";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

const POSTS_DIRECTORY_PATH = path.join(process.cwd(), "src/posts");

export async function getPosts() {
  const filenames = await fs.readdir(POSTS_DIRECTORY_PATH);
  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const post = await getPost(filename);
      return post;
    })
  );
  posts.sort((a, b) => (a.data.date < b.data.date ? -1 : 1));
  return posts;
}

export async function getPost(filename: string) {
  const filePath = path.join(POSTS_DIRECTORY_PATH, filename);
  const content = await fs.readFile(filePath, "utf8");
  const post = grayMatter(content);

  if (!post.data.title || !post.data.date || !post.data.tags || !post.data.tags.length) {
    throw new Error(`Missing metadata in post ${post.content.substring(0, 100)}`);
  }

  return {
    ...post,
    slug: path.parse(filename).name,
    duration: readingTime(content),
  };
}

export async function loadPost(filename: string) {
  const post = await getPost(filename);

  const { value } = await unified()
    .use(remarkParse) // Convert into markdown AST
    .use(remarkRehype) // Transform to HTML AST
    .use(rehypeSanitize) // Sanitize HTML input
    .use(rehypeStringify) // Convert AST into serialized HTML
    .process(post.content);

  return {
    Post: () => <section dangerouslySetInnerHTML={{ __html: `${value}` }} />,
    post,
  };
}
