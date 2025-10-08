import { mutation } from './_generated/server';

if (!process.env.ADMIN_EMAILS) {
  throw new Error('ADMIN_EMAILS is not set');
}

const ADMIN_EMAILS = process.env.ADMIN_EMAILS.split(',');

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
