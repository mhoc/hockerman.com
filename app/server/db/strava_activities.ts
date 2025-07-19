import { integer, pgTable, timestamp, text } from "drizzle-orm/pg-core";

export const strava_activities = pgTable("strava_activities", {
  id: text().primaryKey(),
  average_speed: integer(),
  distance: integer(),
  elapsed_time: integer(),
  moving_time: integer(),
  name: text(),
  sport_type: text(),
  start_date: timestamp(),
  strava_user_id: text(),
  timezone: text(),
});
