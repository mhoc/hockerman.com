import { NextRequest } from "next/server";
import { Strava } from "../../../server/Strava";

export async function GET(request: NextRequest) {
  const redirectUri = `${request.nextUrl.origin}/api/strava/authorize/callback`;
  const authUrl = new URL("https://www.strava.com/oauth/authorize");
  authUrl.searchParams.set("client_id", Strava.clientId());
  authUrl.searchParams.set("response_type", "code");
  authUrl.searchParams.set("redirect_uri", redirectUri);
  authUrl.searchParams.set("approval_prompt", "force");
  authUrl.searchParams.set("scope", "read,activity:read_all");
  authUrl.searchParams.set("state", "asdfasdfasdfasdf");
  return Response.redirect(authUrl.toString());
}
