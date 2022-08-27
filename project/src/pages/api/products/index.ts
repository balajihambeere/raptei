
import type { NextApiRequest, NextApiResponse } from 'next';
import Product from '../../../features/products/models/Product';
import { HttpMethods } from '../../../shared/constants';
import dbConnection from '../../../shared/utils/DBConnection';

export default async function categoryHandler(req: NextApiRequest, res: NextApiResponse): Promise<void> {

    const { method } = req;

    await dbConnection();

    switch (method) {
        case HttpMethods[HttpMethods.GET]:
            try {
                const products = await Product.find({});
                return res.status(200).json({
                    success: true,
                    data: products,
                });
            } catch (error) {
                return res.status(404).json({
                    success: false,
                });
            }
            break
        default:
            res.setHeader("Allow", [
                HttpMethods[HttpMethods.GET],
            ]);
            res.status(405).end(`Method ${method} Not Allowed`);
            break
    }
}