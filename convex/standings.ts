import { v } from 'convex/values';
import { mutation, query } from './_generated/server';
import { ADMIN_EMAILS } from '@/emails';

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
    if (!ADMIN_EMAILS.includes(identity?.email as string)) {
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
    const standings = await ctx.db
      .query('standings')
      .withIndex('by_season_division', (q) =>
        q.eq('season', args.fullSeason).eq('division', args.division)
      )
      .collect();

    const sortedStandings = standings.sort((a, b) => {
      if (!a.tablePosition) return 1;
      if (!b.tablePosition) return -1;
      return a.tablePosition - b.tablePosition;
    });

    return sortedStandings;
  },
});

export const updateStandings = mutation({
  args: {
    tableUpdates: v.array(
      v.object({
        id: v.id('standings'),
        tablePosition: v.number(),
      })
    ),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!ADMIN_EMAILS.includes(identity?.email as string)) {
      return {
        success: false,
        message: 'Unauthorized',
      };
    }
    try {
      Promise.all(
        args.tableUpdates.map((update) =>
          ctx.db.patch(update.id, { tablePosition: update.tablePosition })
        )
      );
      return {
        success: true,
        message: 'Standings updated successfully',
      };
    } catch (error) {
      console.error('Error updating standings:', error);
      return {
        success: false,
        message:
          error instanceof Error ? error.message : 'Failed to update standings',
      };
    }
  },
});

export const updateStandingsStats = mutation({
  args: {
    id: v.id('standings'),
    team: v.string(),
    values: v.object({
      gamesPlayed: v.optional(v.number()),
      gamesWon: v.optional(v.number()),
      gamesDrawn: v.optional(v.number()),
      gamesLost: v.optional(v.number()),
      goalsScored: v.optional(v.number()),
      goalsAgainst: v.optional(v.number()),
      goalDifference: v.optional(v.number()),
      points: v.optional(v.number()),
    }),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!ADMIN_EMAILS.includes(identity?.email as string)) {
      return {
        success: false,
        message: 'Unauthorized',
      };
    }

    try {
      await ctx.db.patch(args.id, args.values);
      return {
        success: true,
        message: `Stats updated successfully for ${args.team}`,
      };
    } catch (error) {
      console.error('Error updating stats:', error);
      return {
        success: false,
        message:
          error instanceof Error ? error.message : 'Failed to update stats',
      };
    }
  },
});
