import React, {FC, useEffect, useState} from 'react';
import MainLayout from "layouts/MainLayout";
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import styles from 'styles/pages/dashboard.module.scss'
import A from "components/UI/A/A";
import Loading from "components/UI/Loading/Loading";

const breadcrumbs = [
    { path: '/', text: 'Home' }
]

interface DashboardProps {

}


const Dashboard: FC<DashboardProps> = ({  }) => {
    const [ loading, setLoading ] = useState<boolean>(true)

    useEffect(() => {
        setLoading(false)
    }, [])
    return (
       loading ?
            <Loading/>
           :
           <MainLayout title={'Account'} description={'Account'} mainClass={'main_dashboard'}>
               <Breadcrumbs array={breadcrumbs} current='My Dashboard'/>
               <h1 className={styles.title}>My Dashboard</h1>
               <section className={styles.dashboard}>
                   <div className={styles.menu}>
                       <div className={styles.menu__items}>
                           <h6 className={styles.menu__item}>Account Dashboard</h6>
                           <h6 className={styles.menu__item}>Account Information</h6>
                           <h6 className={styles.menu__item}>Address Book</h6>
                           <h6 className={styles.menu__item}>My Orders</h6>
                           <div></div>
                           <h6 className={styles.menu__item}>My Downloadable Products</h6>
                           <h6 className={styles.menu__item}>Stored Payment Methods</h6>
                           <h6 className={styles.menu__item}>Billing Agrements</h6>
                           <h6 className={styles.menu__item}>My Wish List</h6>
                           <div></div>
                           <h6 className={styles.menu__item}>My Product Reviews</h6>
                           <h6 className={styles.menu__item}>Newsletter Subscriptions</h6>
                       </div>
                       <div className={styles.compare}>
                           <h4>Compare Products</h4>
                           <p>You have no items to compare.</p>
                       </div>
                       <div className={styles.wish_list}>
                           <h4>My Wish List</h4>
                           <p>You have no items in your wish list.</p>
                       </div>
                   </div>
                   <div className={styles.content}>
                       <div className={styles.content__item}>
                           <div className={styles.content__item_header}>
                               Account Information
                           </div>
                           <div className={styles.content__item_body}>
                               <div className={styles.content__item_body_item}>
                                   <h5>Contact Information</h5>
                                   <p>Alex Driver
                                       ExampeAdress@gmail.com</p>
                                   <div className={styles.links}>
                                       <A href={"/"}>Edit</A>
                                       <A href={"/"}>Change Password</A>
                                   </div>
                               </div>
                               <div className={styles.content__item_body_item}>
                                   <h5>Newsletters</h5>
                                   <p>You don`t subscribe to our newsletter.</p>
                                   <div className={styles.links}>
                                       <A href={"/"}>Edit</A>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className={styles.content__item}>
                           <div className={styles.content__item_header}>
                               Address Book <A href={"/"}>Menage Addresses</A>
                           </div>
                           <div className={styles.content__item_body}>
                               <div className={styles.content__item_body_item}>
                                   <h5>Default Billing Address</h5>
                                   <p>You have not set a default billing address.</p>
                                   <div className={styles.links}>
                                       <A href={"/"}>Edit Address</A>
                                   </div>
                               </div>
                               <div  className={styles.content__item_body_item}>
                                   <h5>Default Shipping Address</h5>
                                   <p>You have not set a default shipping address.</p>
                                   <div className={styles.links}>
                                       <A href={"/"}>Edit Address</A>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </section>
           </MainLayout>
    );
};

export default Dashboard;