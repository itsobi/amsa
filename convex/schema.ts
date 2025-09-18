import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  seasons: defineTable({
    season: v.string(),
  }),
  divisions: defineTable({
    division: v.string(),
  }),
  matches: defineTable({
    season: v.id('seasons'),
    division: v.id('divisions'),
    date: v.string(), // YYYY-MM-DD
    homeTeam: v.string(),
    awayTeam: v.string(),
    homeTeamScore: v.string(),
    awayTeamScore: v.string(),
    venue: v.string(),
    type: v.string(),
    time: v.string(), // HH:MM
  }).index('by_season_division', ['season', 'division']),
});
