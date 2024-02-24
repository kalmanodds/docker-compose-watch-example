import { db } from "@/db";
import styles from "./page.module.css";
import { post } from "@/schemas/post";

export default async function Home() {
  const posts = await db.select().from(post);

  return <main className={styles.main}>{posts[0].text}</main>;
}
