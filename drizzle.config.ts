import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schemas/*.ts",
  out: "./src/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL!,
  },
} satisfies Config;
