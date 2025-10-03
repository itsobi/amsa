import { ADMIN_EMAILS } from '@/emails';
import { mutation } from './_generated/server';

export const verifyResetPasswordRequest = mutation({
  args: {},
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!ADMIN_EMAILS.includes(identity?.email as string)) {
      return {
        success: false,
        message: 'Unauthorized',
      };
    }

    return {
      success: true,
      message: 'User verified successfully',
    };
  },
});
