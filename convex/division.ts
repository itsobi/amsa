import { query } from './_generated/server';

export const getDivisions = query({
  handler: async (ctx, args) => {
    return await ctx.db.query('divisions').collect();
  },
});
