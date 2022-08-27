import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import HomeLayout from "../features/home/Layout";
import ProductInfo from "../features/products/ProductInfo";
import { ProductType } from "../features/products/types/Product";
import { NextPageWithLayout } from "./_app";

const Product: NextPageWithLayout = (): React.ReactElement => {
    const [selectedItem, setselectedItem] = useState<ProductType>({} as ProductType);
    const router = useRouter();
    const { slug } = router.query

    useEffect(() => {
        function fecthApi() {
            fetch(`http://localhost:3004/products?slug=${slug}`).then(res =>
                res.json()
            ).then(json => setselectedItem(json[0]));
        }
        fecthApi();
    }, [slug, setselectedItem])

    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return (<>
        <ProductInfo selectedItem={selectedItem} />
    </>);
}

Product.getLayout = function getLayout(page: ReactElement) {
    return (
        <HomeLayout>
            {page}
        </HomeLayout>
    )
};

export default Product;