# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (uses Turbopack for faster builds)
- **Build**: `npm run build`
- **Production start**: `npm start`
- **Linting**: `npm run lint`

## Project Architecture

This is a Next.js 15 personal website for Mike Hockerman that integrates with Spotify and Strava APIs to display real-time music and fitness data.

### Core Technology Stack
- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS 4
- **Database**: PostgreSQL with Drizzle ORM
- **Deployment**: Vercel (with cron jobs)

### Key Architectural Patterns

**Server-Side API Classes**: The project uses abstract static classes for external API integrations:
- `app/server/Spotify.ts`: Spotify API integration with OAuth refresh token flow
- `app/server/Strava.ts`: Strava API integration with OAuth refresh token flow
- Both use `MemoryCache.ts` for access token caching to avoid excessive API calls

**Component Structure**: 
- Page components in `app/` follow Next.js App Router conventions
- Reusable UI components in `app/components/` with module CSS
- Music page (`app/music/`) contains Spotify-specific display components

**External Dependencies**:
- Spotify integration relies on external bridge service at `spotify-bridge.hockerman.com`
- Strava uses direct API calls to `www.strava.com/api/v3/`

### Environment Variables Required
- `SPOTIFY_REFRESH_TOKEN`, `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`
- `STRAVA_CLIENT_ID`, `STRAVA_CLIENT_SECRET`, `STRAVA_PERSONAL_REFRESH_TOKEN`

### Database Schema
- `app/server/db/StravaTokens.ts`: Drizzle schema for Strava OAuth tokens

### Deployment Configuration
- `vercel.json`: Configures daily cron job for Strava activity sync (`/api/strava/sync_activities`)
- `next.config.ts`: Allows Spotify CDN images from `i.scdn.co`

### Key Files
- `app/page.tsx`: Main landing page with contact badges and Spotify integration
- `app/music/page.tsx`: Spotify dashboard with multiple data visualizations
- `app/layout.tsx`: Root layout with custom fonts and dark theme
