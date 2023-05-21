import fs from "fs/promises";
import path from "path";
import { ReactNode } from "react";
import readingTime, { ReadTimeResults } from "reading-time";

export interface Post {
  // slug: string;
  // duration: ReadTimeResults;
  // data: {
  //   title: string;
  //   date: string;
  //   tags: string[];
  // };
  content: ReactNode;
  thumbnail: ReactNode;
  metadata: {
    slug: string;
    duration: ReadTimeResults;
    title: string;
    date: string;
    tags: string[];
  };
}

const POSTS_DIRECTORY_PATH = path.join(process.cwd(), "src/posts");

export async function getPosts() {
  const filenames = await fs.readdir(POSTS_DIRECTORY_PATH);
  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const post = await getPost(filename);
      return post;
    })
  );
  posts.sort((a, b) => (a.metadata.date < b.metadata.date ? -1 : 1));
  return posts;
}

export async function getPost(filename: string) {
  const filePath = path.join(POSTS_DIRECTORY_PATH, filename);
  const content = await fs.readFile(filePath, "utf8");
  // const post = grayMatter(content);

  const {
    default: Content,
    Thumbnail,
    metadata,
  } = await import(`../posts/${filename}`);

  // if (
  //   !post.data.title ||
  //   !post.data.date ||
  //   !post.data.tags ||
  //   !post.data.tags.length
  // ) {
  //   throw new Error(
  //     `Missing metadata in post ${post.content.substring(0, 100)}`
  //   );
  // }

  if (
    !metadata.title ||
    !metadata.date ||
    !metadata.tags ||
    !metadata.tags.length
  ) {
    throw new Error(`Missing metadata in post ${content.substring(0, 100)}`);
  }

  return {
    // ...post,
    // content: <Content />,
    // thumbnail: <Thumbnail />,
    metadata: {
      ...metadata,
      slug: path.parse(filename).name,
      duration: readingTime(content),
    },
  } as Post;
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
