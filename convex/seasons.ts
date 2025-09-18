import { query } from './_generated/server';

export const getSeasons = query({
  handler: async (ctx, args) => {
    return await ctx.db.query('seasons').collect();
  },
});
