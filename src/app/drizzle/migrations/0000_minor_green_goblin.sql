DO $$ BEGIN
 CREATE TYPE "public"."status" AS ENUM('ToDo', 'Doing', 'Done');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "columns" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"taskboardId" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "subtasks" (
	"id" serial PRIMARY KEY NOT NULL,
	"isCompleted" boolean DEFAULT false NOT NULL,
	"tasksId" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "taskboard" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tasks" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256) NOT NULL,
	"name" text,
	"status" "status" DEFAULT 'ToDo' NOT NULL,
	"columnsId" integer NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "columns" ADD CONSTRAINT "columns_taskboardId_taskboard_id_fk" FOREIGN KEY ("taskboardId") REFERENCES "public"."taskboard"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "subtasks" ADD CONSTRAINT "subtasks_tasksId_tasks_id_fk" FOREIGN KEY ("tasksId") REFERENCES "public"."tasks"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tasks" ADD CONSTRAINT "tasks_columnsId_columns_id_fk" FOREIGN KEY ("columnsId") REFERENCES "public"."columns"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
