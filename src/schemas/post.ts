import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const post = pgTable("post", {
  id: serial("id"),
  text: text("text"),
  createdAt: timestamp("created_at").default(new Date()),
});
