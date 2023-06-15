// import NextAuth, { NextAuthOptions } from "next-auth";
// import GithubProvider from "next-auth/providers/github";


// const handler: NextAuthOptions = NextAuth({
//     providers: [
//         GithubProvider({
//             clientId: process.env.GITHUB_CLIENT_ID,
//             clientSecret: process.env.GITHUB_CLIENT_SECRET,
//         })
//     ]
// })

// export { handler as GET, handler as POST };

import { authOptions } from "@/utils/authOptions";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
