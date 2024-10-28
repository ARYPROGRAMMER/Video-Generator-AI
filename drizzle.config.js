/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: "postgresql",
    dbCredentials: {
        url: "postgresql://video-app-db_owner:MI9jTZCsxae1@ep-delicate-night-a8ocfy5m.eastus2.azure.neon.tech/video-app-db?sslmode=require",
    }
};