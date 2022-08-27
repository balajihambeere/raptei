import type { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../features/users/models/User';
import { UserType } from '../../../features/users/types/User';
import dbConnection from '../../../shared/utils/DBConnection';
import bcrypt from 'bcrypt';
import { HttpMethods } from '../../../shared/constants';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
    const { body, method, } = req;

    await dbConnection();

    switch (method) {
        case HttpMethods[HttpMethods.POST]:
            const { firstName, lastName, email, password } = body
            try {
                const userFound: UserType | null = await User.findOne({ email });
                if (userFound) {
                    return JSON.parse(JSON.stringify(userFound));
                }
                const newUser = new User({ firstName, lastName, email, password });
                newUser.password = bcrypt.hashSync(password, 10);
                const user: UserType = await newUser.save();
                user.password = null;
                return res.status(200).send({ status: 'success' })
            } catch (err) {
                return res.status(404).send({ error: err });
            }
        default:
            res.setHeader("Allow", [
                HttpMethods[HttpMethods.POST],
            ]);
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
}