import { v } from 'convex/values';
import { query } from './_generated/server';

export const getSchedule = query({
  args: {
    season: v.id('seasons'),
    division: v.id('divisions'),
  },
  handler: async (ctx, args) => {
    const matches = await ctx.db
      .query('matches')
      .withIndex('by_season_division', (q) =>
        q.eq('season', args.season).eq('division', args.division)
      )
      .collect();

    const groupedMatches = matches.reduce((acc, match) => {
      if (!acc[match.date]) {
        acc[match.date] = [];
      }
      acc[match.date].push(match);
      return acc;
    }, {} as Record<string, typeof matches>);

    for (const date in groupedMatches) {
      groupedMatches[date].sort((a, b) => {
        return a.time.localeCompare(b.time);
      });
    }

    return groupedMatches;
  },
});

export const getTeamSchedule = query({
  args: {
    teamName: v.string(),
    season: v.id('seasons'),
  },
  handler: async (ctx, args) => {
    const matches = await ctx.db
      .query('matches')
      .withIndex('by_season_division', (q) => q.eq('season', args.season))
      .filter((q) =>
        q.or(
          q.eq(q.field('homeTeam'), args.teamName),
          q.eq(q.field('awayTeam'), args.teamName)
        )
      )
      .collect();

    return matches;
  },
});
