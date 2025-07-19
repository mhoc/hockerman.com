import { NextRequest } from "next/server";
import { Strava } from "@/app/server/Strava";
import { db } from "@/app/server/db";
import { strava_tokens } from "@/app/server/db/strava_tokens";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const error = searchParams.get("error");

  if (error) {
    return Response.json({ error: `Authorization failed: ${error}` }, { status: 400 });
  }

  if (!code || !state) {
    return Response.json({ error: "Missing authorization code or user_id" }, { status: 400 });
  }

  try {
    // Exchange authorization code for access token
    const tokenBody = new URLSearchParams({
      client_id: Strava.clientId(),
      client_secret: Strava.clientSecret(),
      code: code,
      grant_type: "authorization_code",
    });

    const tokenResponse = await fetch("https://www.strava.com/api/v3/oauth/token", {
      method: "POST",
      body: tokenBody,
    });

    if (!tokenResponse.ok) {
      throw new Error(`Token exchange failed: ${tokenResponse.statusText}`);
    }

    const tokenData = await tokenResponse.json();

    // Store tokens in database
    await db
      .insert(strava_tokens)
      .values({
        strava_user_id: tokenData.athlete.id.toString(),
        access_token: tokenData.access_token,
        access_token_expires_at: new Date(tokenData.expires_at * 1000),
        refresh_token: tokenData.refresh_token,
      })
      .onConflictDoUpdate({
        target: strava_tokens.strava_user_id,
        set: {
          access_token: tokenData.access_token,
          access_token_expires_at: new Date(tokenData.expires_at * 1000),
          refresh_token: tokenData.refresh_token,
        },
      });

    return Response.json({
      success: true,
      message: "Strava authorization successful",
      athlete: tokenData.athlete,
    });
  } catch {
    return Response.json(
      {
        error: "Failed to complete authorization",
      },
      { status: 500 }
    );
  }
}
