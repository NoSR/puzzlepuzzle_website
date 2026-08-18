import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import GoogleProvider from "next-auth/providers/google";
import * as schema from "@workspace/db/schema"; // Assuming workspace alias or adapt as needed

// NextAuth configuration
export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: { strategy: "jwt" as const },
  callbacks: {
    signIn({ user }) {
      const whitelist = process.env.ADMIN_WHITELIST?.split(',') || ['admin@example.com'];
      if (user.email && whitelist.includes(user.email)) {
        return true;
      }
      return false; // Unauthorized
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
