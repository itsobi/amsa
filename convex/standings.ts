import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const createStandings = mutation({
  args: {
    standings: v.array(
      v.object({
        season: v.id('fullSeasons'),
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
      })
    ),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      return {
        success: false,
        message: 'Unauthorized',
      };
    }
    await Promise.all(
      args.standings.map((standing) => ctx.db.insert('standings', standing))
    );
    return {
      success: true,
      message: 'Standings created successfully',
    };
  },
});

export const getStandings = query({
  args: {
    fullSeason: v.id('fullSeasons'),
    division: v.id('divisions'),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('standings')
      .withIndex('by_season_division', (q) =>
        q.eq('season', args.fullSeason).eq('division', args.division)
      )
      .collect();
  },
});
