import { FaRunning } from "react-icons/fa";
import { Badge } from "@/app/components/Badge";
import { db } from "@/app/server/db";
import { strava_activities } from "@/app/server/db/strava_activities";
import { sql, and, gte, lte } from "drizzle-orm";

export const StravaMonthlyDistanceBadge = async () => {
  try {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);

    const result = await db
      .select({
        totalDistance: sql<number>`COALESCE(SUM(${strava_activities.distance}), 0)`,
      })
      .from(strava_activities)
      .where(and(gte(strava_activities.start_date, startOfMonth), lte(strava_activities.start_date, endOfMonth)));

    const totalDistance = result[0]?.totalDistance || 0;
    const distanceKm = (totalDistance / 1000).toFixed(1);

    return (
      <Badge color="text-orange-300" Icon={FaRunning}>
        {distanceKm}km this month
      </Badge>
    );
  } catch (error) {
    console.error("Error fetching Strava monthly distance:", error);
    return null;
  }
};
