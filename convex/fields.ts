import { query, mutation } from './_generated/server';
import { v } from 'convex/values';

if (!process.env.ADMIN_EMAILS) {
  throw new Error('ADMIN_EMAILS is not set');
}

const ADMIN_EMAILS = process.env.ADMIN_EMAILS.split(',');

export const getFields = query({
  handler: async (ctx, args) => {
    return await ctx.db.query('fields').collect();
  },
});

export const updateFieldStatus = mutation({
  args: {
    fieldId: v.id('fields'),
    values: v.object({
      status: v.optional(
        v.union(v.literal('open'), v.literal('closed'), v.literal('n/a'))
      ),
      phone: v.optional(v.string()),
      statusNotes: v.optional(v.string()),
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

    const fieldsToUpdate = {
      ...args.values,
      updatedAt: Date.now(),
    };

    try {
      await ctx.db.patch(args.fieldId, fieldsToUpdate);
      return {
        success: true,
        message: 'Field updated successfully',
      };
    } catch (error) {
      console.error('Error updating field status:', error);
      return {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : 'Failed to update field status',
      };
    }
  },
});
