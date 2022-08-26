import Checkout from "../../features/checkout/Checkout"
import HomeLayout from "../../features/home/Layout";
import { NextPageWithLayout } from "../_app";

const CheckoutPage: NextPageWithLayout = (): React.ReactElement => {
    return (<Checkout />)
};

CheckoutPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <HomeLayout>
            {page}
        </HomeLayout>
    )
}

export default CheckoutPage;