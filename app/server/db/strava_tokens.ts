import { pgTable, timestamp, text } from "drizzle-orm/pg-core";

export const strava_tokens = pgTable("strava_tokens", {
  strava_user_id: text().primaryKey(),
  access_token: text(),
  access_token_expires_at: timestamp(),
  refresh_token: text(),
});
