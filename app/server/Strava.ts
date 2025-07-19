import { eq } from "drizzle-orm";
import { MemoryCache } from "./MemoryCache";
import { db } from "./db";
import { strava_tokens } from "./db/strava_tokens";

export abstract class Strava {
  private static _accessToken = new MemoryCache<string>(10000);

  static async accessToken(stravaUserId?: string): Promise<string> {
    const cachedAccessToken = Strava._accessToken.get();
    if (cachedAccessToken) {
      return cachedAccessToken;
    }

    // Get tokens from database
    const tokenRecord = await Strava.getValidTokens(stravaUserId);
    if (!tokenRecord) {
      throw new Error("No valid Strava tokens found. Please re-authorize.");
    }

    // Check if access token is still valid (expires in next 5 minutes)
    const now = new Date();
    const expiresAt = tokenRecord.access_token_expires_at;

    if (expiresAt && expiresAt > new Date(now.getTime() + 5 * 60 * 1000)) {
      // Token is still valid
      Strava._accessToken.set(tokenRecord.access_token!);
      return tokenRecord.access_token!;
    }

    // Refresh the token
    const authBody = new URLSearchParams({
      client_id: Strava.clientId(),
      client_secret: Strava.clientSecret(),
      grant_type: "refresh_token",
      refresh_token: tokenRecord.refresh_token!,
    });

    const response = await fetch(`https://www.strava.com/api/v3/oauth/token`, {
      body: authBody,
      method: "POST",
    });

    if (!response.ok) {
      throw new Error(`Token refresh failed: ${response.status} ${response.statusText}`);
    }

    const responseBody = await response.json();

    // Update tokens in database
    await db
      .update(strava_tokens)
      .set({
        access_token: responseBody.access_token,
        access_token_expires_at: new Date(responseBody.expires_at * 1000),
        refresh_token: responseBody.refresh_token,
      })
      .where(eq(strava_tokens.strava_user_id, tokenRecord.strava_user_id));

    Strava._accessToken.set(responseBody.access_token);
    return responseBody.access_token;
  }

  static async getValidTokens(stravaUserId?: string) {
    if (stravaUserId) {
      // Get tokens for specific user
      const result = await db
        .select()
        .from(strava_tokens)
        .where(eq(strava_tokens.strava_user_id, stravaUserId))
        .limit(1);
      return result[0] || null;
    } else {
      // Get any valid tokens (for backward compatibility)
      const result = await db.select().from(strava_tokens).limit(1);
      return result[0] || null;
    }
  }

  static async activities() {
    const response = await fetch(`https://www.strava.com/api/v3/athlete/activities`, {
      headers: {
        Authorization: `Bearer ${await Strava.accessToken()}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Strava API error: ${response.status} ${response.statusText}`);
    }

    const responseBody = await response.json();

    if (!Array.isArray(responseBody)) {
      throw new Error(`Expected activities array, got: ${typeof responseBody}`);
    }

    return responseBody;
  }

  static clientId(): string {
    if (process.env.STRAVA_CLIENT_ID) {
      return process.env.STRAVA_CLIENT_ID;
    }
    throw new Error("STRAVA_CLIENT_ID not defined");
  }

  static clientSecret(): string {
    if (process.env.STRAVA_CLIENT_SECRET) {
      return process.env.STRAVA_CLIENT_SECRET;
    }
    throw new Error("STRAVA_CLIENT_SECRET not defined");
  }
}
