import postgres from "postgres";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { drizzle } from "drizzle-orm/postgres-js";
import dotenv from "dotenv";

dotenv.config();

(async () => {
  const connectionString = process.env.POSTGRES_URL!;

  const migrationsClient = postgres(connectionString, { max: 1 });
  const db = drizzle(migrationsClient);

  await migrate(db, { migrationsFolder: "./src/migrations" });

  await migrationsClient.end();
})();
