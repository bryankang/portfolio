import fs from "fs/promises";
import path from "path";
import readingTime, { ReadTimeResults } from "reading-time";

export interface PostMetadata {
  slug: string;
  duration: ReadTimeResults;
  title: string;
  company?: string;
  roles: string[];
  date: string;
  tags: string[];
}

const POSTS_DIRECTORY_PATH = path.join(process.cwd(), "src/posts");

export async function getPostsMetadata() {
  const filenames = await fs.readdir(POSTS_DIRECTORY_PATH);
  const postsMetadata = await Promise.all(
    filenames.map(async (filename) => {
      const post = await getPostMetadata(filename);
      return post;
    })
  );
  postsMetadata.sort((a, b) => (a.date < b.date ? 1 : -1));
  return postsMetadata;
}

export async function getPostMetadata(filename: string) {
  const filePath = path.join(POSTS_DIRECTORY_PATH, filename);
  const content = await fs.readFile(filePath, "utf8");

  const { metadata } = await import(`../posts/${filename}`);

  if (
    !metadata.title ||
    !metadata.date ||
    !metadata.roles ||
    !metadata.tags ||
    !metadata.tags.length
  ) {
    throw new Error(`Missing metadata in post ${content.substring(0, 100)}`);
  }

  return {
    ...metadata,
    slug: path.parse(filename).name,
    duration: readingTime(content),
  } as PostMetadata;
}

export async function loadPost(filename: string) {
  const { default: Content } = await import(`../posts/${filename}`);
  const metadata = await getPostMetadata(filename);

  return {
    Content,
    metadata,
  };
}

// export async function loadPost(filename: string) {
//   const post = await getPost(filename);

//   const { value } = await unified()
//     .use(remarkParse) // Convert into markdown AST
//     .use(remarkRehype) // Transform to HTML AST
//     .use(rehypeSanitize) // Sanitize HTML input
//     .use(rehypeStringify) // Convert AST into serialized HTML
//     .process(post.content);

//   return {
//     Post: () => <section dangerouslySetInnerHTML={{ __html: `${value}` }} />,
//     post,
//   };
// }
