import { serial, text, pgTable, varchar, pgEnum, boolean, integer } from "drizzle-orm/pg-core";

export const statusEnum = pgEnum('status', ['todo', 'doing', 'done']);

export const taskboardTable = pgTable("taskboard", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  slug: varchar("slug", {length: 256}).notNull(),
});

export const columnsTable = pgTable("columns", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  taskboardId: integer("taskboard_id").references(() => taskboardTable.id).notNull()
})

export const tasksTable = pgTable("tasks", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(), 
  description: text("description"),
  status: statusEnum("status").default("todo").notNull(),
  columnsId: integer("columns_id").references(() => columnsTable.id).notNull()
})

export const subTasksTable = pgTable("subtasks", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  isCompleted: boolean("is_completed").default(false).notNull(),
  tasksId: integer("tasks_id").references(() => tasksTable.id).notNull()
})

