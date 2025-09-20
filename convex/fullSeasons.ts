import { query } from './_generated/server';

export const getFullSeasons = query({
  handler: async (ctx, args) => {
    return await ctx.db.query('fullSeasons').collect();
  },
});
