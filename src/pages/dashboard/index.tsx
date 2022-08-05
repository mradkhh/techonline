import React, {FC} from 'react';
import styles from 'styles/pages/dashboard.module.scss'
import MainLayout from "layouts/MainLayout";
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";

const breadcrumbs = [
    { path: '/', text: 'Home' }
]

interface DashboardProps {

}


const Dashboard: FC<DashboardProps> = ({  }) => {
    return (
        <MainLayout title={'Account'} description={'Account'} mainClass={'main_account'}>
            <Breadcrumbs array={breadcrumbs} current='My Dashboard'/>
            <h1 className={styles.title}>My Dashboard</h1>
            <div className={styles.account}>

            </div>
        </MainLayout>
    );
};

export default Dashboard;