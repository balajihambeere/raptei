import type { NextApiRequest, NextApiResponse } from 'next';
import { registerAction } from '../../../features/auth/AuthActions';
import { HttpMethods } from '../../../shared/utils/AppConstants';
import dbConnection from '../../../shared/utils/DBConnection';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
    const { body, method, } = req;

    await dbConnection();

    switch (method) {
        case HttpMethods[HttpMethods.POST]:
            const { firstName, lastName, email, password } = body
            try {
                await registerAction(firstName, lastName, email, password);
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