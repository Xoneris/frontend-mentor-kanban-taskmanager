import { serial, text, pgTable, varchar, pgEnum, boolean, integer } from "drizzle-orm/pg-core";

export const statusEnum = pgEnum('status', ['ToDo', 'Doing', 'Done']);

export const taskboardTable = pgTable("taskboard", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  slug: varchar("slug", {length: 256}).notNull(),
});

export const columnsTable = pgTable("columns", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  taskboardId: integer("taskboardid").references(() => taskboardTable.id).notNull()
})

export const tasksTable = pgTable("tasks", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(), 
  description: text("description"),
  status: statusEnum("status").default("ToDo").notNull(),
  columnsId: integer("columnsid").references(() => columnsTable.id).notNull()
})

export const subTasksTable = pgTable("subtasks", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  isCompleted: boolean("isCompleted").default(false).notNull(),
  tasksId: integer("tasksid").references(() => tasksTable.id).notNull()
})

