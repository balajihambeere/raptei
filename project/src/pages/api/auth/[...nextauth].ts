import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnection from '../../../shared/utils/DBConnection';
import { UserType } from '../../../features/users/types/User';
import User from '../../../features/users/models/User';
import bcrypt from 'bcrypt';

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
                const userFound: UserType | null = await User.findOne({ email: credentials?.email });
                if (userFound) {
                    return JSON.parse(JSON.stringify(userFound));
                }
                const newUser = new User({ email: credentials?.email, password: credentials?.password });
                const password = credentials?.password as string;
                newUser.password = bcrypt.hashSync(password, 10);
                const user: UserType = await newUser.save();
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
        redirect: async ({ baseUrl }) => {
            return Promise.resolve(baseUrl)
        },
        session: async ({ session }) => {
            return Promise.resolve(session)
        },
        jwt: async ({ token }) => {
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