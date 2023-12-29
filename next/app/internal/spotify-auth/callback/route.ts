import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const code = new URL(request.url).searchParams.get("code");
  const body = new URLSearchParams();
  body.set("code", code!);
  body.set("grant_type", "authorization_code");
  body.set(
    "redirect_uri",
    "http://localhost:3000/internal/spotify-auth/callback"
  );
  const tokenResp = await fetch("https://accounts.spotify.com/api/token", {
    body: body.toString(),
    headers: {
      Authorization: `Basic ${btoa(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      )}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
  });
  return NextResponse.json(
    { result: JSON.stringify(await tokenResp.json()) },
    { status: 200 }
  );
}
