import { v } from 'convex/values';
import { mutation } from './_generated/server';

export const createMatches = mutation({
  args: {
    matches: v.array(
      v.object({
        season: v.id('seasons'),
        division: v.id('divisions'),
        date: v.string(),
        homeTeam: v.string(),
        awayTeam: v.string(),
        homeTeamScore: v.string(),
        awayTeamScore: v.string(),
        venue: v.string(),
        type: v.string(),
        time: v.string(),
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
    const result = await Promise.all(
      args.matches.map((match) => ctx.db.insert('matches', match))
    );
    return {
      success: true,
      message: 'Matches created successfully',
    };
  },
});
