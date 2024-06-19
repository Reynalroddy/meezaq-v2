import { AuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./db";
import NextAuth from "next-auth";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log(credentials);
        if (!credentials?.email || !credentials?.password) {
          throw new Error("invalid credentials");
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });
        if (!user || !user?.password) {
          throw new Error("invalid credentials");
        }
        const isCorrect = await bcrypt.compare(
          credentials?.password,
          user.password
        );
        if (!isCorrect) {
          throw new Error("invalid credentials");
        }
        return user;
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/auth/login",
    signOut: "/",
  },
  callbacks: {
    async jwt({ token, user }: any) {
      const prismaUser = await prisma.user.findUnique({
        where: {
          email: token.email,
        },
      });

      if (!prismaUser) {
        token.id = user.id;
        return token;
      }

      return { ...prismaUser };
    },

    async session({ token, session }: { session: Session; token: any }) {
      if (token) {
        // session.user.id = token.id;
        // session.user.email = token.email;
        // session.user.role = token.role;
        // session.user.username = token.username;
      }

      return session;
    },
  },
};
export default NextAuth(authOptions);
