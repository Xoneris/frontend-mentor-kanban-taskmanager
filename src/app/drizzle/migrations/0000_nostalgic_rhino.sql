DO $$ BEGIN
 CREATE TYPE "public"."status" AS ENUM('todo', 'doing', 'done');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "columns" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"taskboard_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "subtasks" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256) NOT NULL,
	"is_completed" boolean DEFAULT false NOT NULL,
	"tasks_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "taskboard" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"slug" varchar(256) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tasks" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256) NOT NULL,
	"description" text,
	"status" "status" DEFAULT 'todo' NOT NULL,
	"columns_id" integer NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "columns" ADD CONSTRAINT "columns_taskboard_id_taskboard_id_fk" FOREIGN KEY ("taskboard_id") REFERENCES "public"."taskboard"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "subtasks" ADD CONSTRAINT "subtasks_tasks_id_tasks_id_fk" FOREIGN KEY ("tasks_id") REFERENCES "public"."tasks"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tasks" ADD CONSTRAINT "tasks_columns_id_columns_id_fk" FOREIGN KEY ("columns_id") REFERENCES "public"."columns"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
