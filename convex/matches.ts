import { v } from 'convex/values';
import { mutation } from './_generated/server';
import { ADMIN_EMAILS } from '@/emails';

export const createMatches = mutation({
  args: {
    matches: v.array(
      v.object({
        season: v.id('seasons'),
        division: v.id('divisions'),
        date: v.string(),
        homeTeam: v.string(),
        awayTeam: v.string(),
        homeTeamScore: v.number(),
        awayTeamScore: v.number(),
        venue: v.string(),
        type: v.string(),
        time: v.string(),
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
      args.matches.map((match) => ctx.db.insert('matches', match))
    );
    return {
      success: true,
      message: 'Matches created successfully',
    };
  },
});

export const updateMatch = mutation({
  args: {
    match: v.object({
      _id: v.id('matches'),
      homeTeamScore: v.optional(v.number()),
      awayTeamScore: v.optional(v.number()),
      matchStatus: v.optional(
        v.union(
          v.literal('completed'),
          v.literal('postponed'),
          v.literal('forfeit'),
          v.literal('cancelled')
        )
      ),
      time: v.optional(v.string()),
      venue: v.optional(v.string()),
    }),
  },
  handler: async (ctx, args) => {
    try {
      const identity = await ctx.auth.getUserIdentity();

      if (!ADMIN_EMAILS.includes(identity?.email as string)) {
        return {
          success: false,
          message: 'Unauthorized',
        };
      }
      await ctx.db.patch(args.match._id, {
        ...args.match,
      });
      return {
        success: true,
        message: 'Match updated successfully',
      };
    } catch (error) {
      console.error('Error updating match:', error);
      return {
        success: false,
        message:
          error instanceof Error ? error.message : 'An unknown error occurred',
      };
    }
  },
});

export const deleteMatch = mutation({
  args: {
    matchId: v.id('matches'),
  },
  handler: async (ctx, args) => {
    try {
      const identity = await ctx.auth.getUserIdentity();
      if (!ADMIN_EMAILS.includes(identity?.email as string)) {
        throw new Error('Unauthorized');
      }
      await ctx.db.delete(args.matchId);
      return {
        success: true,
        message: 'Match deleted successfully',
      };
    } catch (error) {
      console.error('Error deleting match:', error);
      return {
        success: false,
        message:
          error instanceof Error ? error.message : 'Unable to delete match',
      };
    }
  },
});
