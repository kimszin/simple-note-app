import Link from "next/link";
import Post from "./_components/Post";
import styles from "./page.module.css";
import prisma from "@/lib/prisma";
import { unstable_noStore as noStore } from "next/cache";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts;
}

export default async function Home() {
  noStore();
  const posts = await getPosts();
  return (
    <main className={styles.main}>
      <Link href={"/add-post"}>Add Post</Link>
      <h1>Feed</h1>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            authorName={post.author.name}
          />
        );
      })}
    </main>
  );
}
