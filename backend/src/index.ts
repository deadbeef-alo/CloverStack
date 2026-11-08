import { drizzle } from "drizzle-orm/better-sqlite3";
async function main() {
  const db = drizzle("data/cloverstack.db");
  const result = await db.all("select 1");
  console.log(result);
}
main();
