import { v } from 'convex/values';
import { query } from './_generated/server';

export const getSchedule = query({
  args: {
    season: v.id('seasons'),
    division: v.id('divisions'),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('matches')
      .withIndex('by_season_division', (q) =>
        q.eq('season', args.season).eq('division', args.division)
      )
      .collect();
  },
});
