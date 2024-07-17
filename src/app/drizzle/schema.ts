import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const taskboard = pgTable("taskboard", {
  id: serial("id"),
  name: text("name"),
});
