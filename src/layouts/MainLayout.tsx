import React, {FC, memo, ReactNode} from 'react';
import Head from "next/head";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import {ContactIcon, HearphoneIcon, SaleIcon} from "static/icons/icon";
import styles from "./styles/main.module.scss";

interface MainLayoutProps {
    children: ReactNode,
    title: string,
    description: string,
    mainClass: string,
}

const MainLayout: FC<MainLayoutProps> = memo(({ children, title, description, mainClass}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.png" type="image/png" />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <main className={mainClass}>
                {children}
                <div className={styles.aboutUs} style={{background: mainClass !== 'main_home' ? 'var(--light-blue)' : ''}}>
                    <div className={styles.content}>
                        <div className={styles.aboutItem}>
                            <HearphoneIcon/>
                            <h4>Product Support</h4>
                            <p>Up to 3 years on-site warranty available for your peace of mind.</p>
                        </div>
                        <div className={styles.aboutItem}>
                            <ContactIcon/>
                            <h4> Personal Account</h4>
                            <p>With big discounts, free delivery and a dedicated support specialist. </p>
                        </div>
                        <div className={styles.aboutItem}>
                            <SaleIcon/>
                            <h4>Amazing Savings </h4>
                            <p>Up to 70% off new Products, you can be sure of the best price. </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
});

MainLayout.displayName = 'MainLayout'

export default MainLayout;