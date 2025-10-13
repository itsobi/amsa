import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  seasons: defineTable({
    season: v.string(), // for half fall/summer/spring schedules
  }),
  fullSeasons: defineTable({
    season: v.string(), // for full season standings
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
    homeTeamScore: v.optional(v.number()),
    awayTeamScore: v.optional(v.number()),
    venue: v.string(),
    type: v.string(),
    time: v.string(), // HH:MM
    matchStatus: v.optional(
      v.union(
        v.literal('completed'),
        v.literal('postponed'),
        v.literal('forfeit'),
        v.literal('cancelled')
      )
    ),
  }).index('by_season_division', ['season', 'division']),
  standings: defineTable({
    fullSeason: v.id('fullSeasons'),
    division: v.id('divisions'),
    team: v.string(),
    teamCaptain: v.string(),
    color1: v.optional(v.string()),
    color2: v.optional(v.string()),
    gamesPlayed: v.number(),
    gamesWon: v.number(),
    gamesDrawn: v.number(),
    gamesLost: v.number(),
    goalsScored: v.number(),
    goalsAgainst: v.number(),
    goalDifference: v.number(),
    points: v.number(),
    tablePosition: v.optional(v.number()),
  }).index('by_full_season_division', ['fullSeason', 'division']),
  fields: defineTable({
    field: v.string(),
    phone: v.string(),
    status: v.union(v.literal('open'), v.literal('closed'), v.literal('n/a')),
    statusNotes: v.string(),
    updatedAt: v.optional(v.number()),
  }),
});
