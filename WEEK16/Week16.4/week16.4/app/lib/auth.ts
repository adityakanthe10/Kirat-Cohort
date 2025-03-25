/* eslint-disable @typescript-eslint/no-unused-vars */
import CredentialsProvider from "next-auth/providers/credentials";

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: {
          label: "Password",
          type: "Password",
          placeholder: "Password",
        },
      },

      async authorize(credentials: unknown) {
        console.log(credentials);
        return {
          id: "1",
          name: "harkirat Singh",
          email: "password@gmail.com",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jwt: async ({ user, token }: any) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    session: ({ session, token, user }: any) => {
      console.log(session);
      if (session.user && session) {
        session.accessToken = token.accessToken;
        session.user.id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
};
