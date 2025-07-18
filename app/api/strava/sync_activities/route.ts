import { NextRequest } from "next/server";
import { Strava } from "@/app/server/Strava";
import { db } from "@/app/server/db";
import { strava_activities } from "@/app/server/db/strava_activities";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }
  try {
    const activities = await Strava.activities();

    if (!Array.isArray(activities)) {
      return Response.json({ error: "Invalid activities response" }, { status: 500 });
    }

    let insertedCount = 0;

    for (const activity of activities) {
      try {
        await db
          .insert(strava_activities)
          .values({
            id: activity.id.toString(),
            average_speed: activity.average_speed ? Math.round(activity.average_speed * 100) : null,
            distance: activity.distance ? Math.round(activity.distance) : null,
            elapsed_time: activity.elapsed_time || null,
            moving_time: activity.moving_time || null,
            name: activity.name || null,
            sport_type: activity.sport_type || activity.type || null,
            start_date: activity.start_date ? new Date(activity.start_date) : null,
            strava_user_id: activity.athlete?.id?.toString() || null,
            timezone: activity.timezone || null,
          })
          .onConflictDoUpdate({
            target: strava_activities.id,
            set: {
              average_speed: activity.average_speed ? Math.round(activity.average_speed * 100) : null,
              distance: activity.distance ? Math.round(activity.distance) : null,
              elapsed_time: activity.elapsed_time || null,
              moving_time: activity.moving_time || null,
              name: activity.name || null,
              sport_type: activity.sport_type || activity.type || null,
              start_date: activity.start_date ? new Date(activity.start_date) : null,
              strava_user_id: activity.athlete?.id?.toString() || null,
              timezone: activity.timezone || null,
            },
          });

        insertedCount++;
      } catch (error) {
        console.error(`Failed to sync activity ${activity.id}:`, error);
      }
    }

    return Response.json({
      success: true,
      message: `Synced ${insertedCount} activities`,
      totalActivities: activities.length,
      processed: insertedCount,
    });
  } catch (error) {
    console.error("Sync activities error:", error);
    return Response.json({ error: "Failed to sync activities" }, { status: 500 });
  }
}
