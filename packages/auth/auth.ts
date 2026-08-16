import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import * as schema from "@workspace/db/schema"; // Assuming workspace alias or adapt as needed

// NextAuth configuration
// Note: You must pass the D1 database instance to the adapter in the handler where it is available (e.g., in Next.js API route or middleware).
// Here we define the NextAuth core configuration.
export const authConfig = {
  providers: [],
  session: { strategy: "jwt" },
  // adapter: DrizzleAdapter(db, { ...schema }) // To be instantiated with the bound db
};

// If this environment allows instantiating auth directly:
// export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
