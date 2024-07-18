import { defineConfig } from "drizzle-kit"

export default defineConfig ({
    schema: "./src/app/drizzle/schema.ts",
    out: "./src/app/drizzle/migrations",
    dialect: "postgresql",
    // driver: "pg",
    dbCredentials: {
        url: process.env.DATABASE_URL as string
    },
    verbose: true,
    strict: true,
})