import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnection from '../../../shared/utils/DBConnection';
import { signInAction } from '../../../features/users/UsersActions';

interface JwtType {
    secret: string
}
const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: "Email Address", type: "text" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials: Record<"email" | "password", string> | undefined, req) => {
                await dbConnection();
                const user = await signInAction(credentials?.email as string, credentials?.password as string);
                if (Object.keys(user).length > 0 && user.constructor === Object) {
                    return Promise.resolve(user)
                } else {
                    return Promise.resolve(null)
                }
            }
        })
    ],
    // database: process.env.DATABASE_URL,
    // site: process.env.NEXTAUTH_URL || "http://localhost:3000",
    session: {
        maxAge: 1 * 3 * 60 * 60,
        updateAge: 24 * 60 * 60,
    },
    jwt: {
        secret: process.env.NEXT_PUBLIC_JWT_SECRET,
    } as JwtType,
    callbacks: {
        signIn: async () => {
            return Promise.resolve(true)
        },
        redirect: async ({ url, baseUrl }) => {
            return Promise.resolve(baseUrl)
        },
        session: async ({ session, token, user }) => {
            return Promise.resolve(session)
        },
        jwt: async ({ token, user, account, profile, isNewUser }) => {
            return Promise.resolve(token)
        },

    },
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error',
        verifyRequest: '/auth/verify-request',
        newUser: '/auth/new-user'
    },
    debug: process.env.NODE_ENV === "development",
}

const auth = (req: NextApiRequest, res: NextApiResponse): Promise<void> => NextAuth(req, res, options);

export default auth;