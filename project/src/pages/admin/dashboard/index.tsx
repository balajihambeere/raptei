import React from "react";
import { NextPageWithLayout } from "../../_app";
import Dashboard from "../../../features/dashboard";
import DashboardLayout from "../../../features/dashboard/Layout";

const DashboardPage: NextPageWithLayout = (): React.ReactElement => {
    return (<Dashboard />)
}

DashboardPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}

export default DashboardPage;