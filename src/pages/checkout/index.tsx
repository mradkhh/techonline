import React, {FC} from 'react';
import MainLayout from "layouts/MainLayout";
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import {CheckoutIcon} from "static/icons/icon";
import styles from 'styles/pages/checkout.module.scss'
import TextInput from "components/UI/Inputs/TextInput";


const breadcrumbs = [
    { path: '/', text: 'Home' },
    { path: '/', text: 'Shopping Cart' }
]

const CheckOut: FC = () => {
    return (
        <MainLayout title={"TechOnline - Checkout"} description={"checkout"} mainClass={"main_checkout"}>
            <Breadcrumbs array={breadcrumbs} current="Checkout progress"/>
            <div className={styles.header}>
                <h1>Checkout</h1>
                <button>Sign In</button>
                <div className={styles.checkoutSteps}>
                    <div>
                        <span>
                            <CheckoutIcon/>
                        </span>
                        <h5>Shipping</h5>
                    </div>
                    <div>
                        <span>2</span>
                        <h5>Review & Payments</h5>
                    </div>
                </div>
            </div>
            <h2 className={styles.contentTitle}>Shipping Address</h2>
            <div className={styles.content}>
                <div className={styles.formField}>
                    <TextInput label={"Email Address"} placeholder={"Email Address"} type={"email"} require={true}/>
                    <p>You can create an account after checkout.</p>
                    <div className={styles.mainForm}>
                        <TextInput label={"First Name"} placeholder={"First Name"} type={"text"} require={true}/>
                        <TextInput label={"Last Name"} placeholder={"Last Name"} type={"text"} require={true}/>
                        <TextInput label={"Company"} placeholder={"Company"} type={"text"}/>
                        <TextInput label={"Street Address *"} placeholder={"Street Address *"} type={"text"} require={true}/>
                        <TextInput label={""} placeholder={""} type={"text"} require={false}/>
                        <TextInput label={"City"} placeholder={"City"} type={"text"}/>
                        <TextInput label={"State/Province"} placeholder={"State/Province"} type={"text"}/>
                        <TextInput label={"Zip/Postal Code"} placeholder={"Zip/Postal Code"} type={"text"}/>
                        <TextInput label={"Country"} placeholder={"Country *"} type={"text"}/>
                        <TextInput label={"Phone Number"} placeholder={"Phone Number"} type={"text"}/>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default CheckOut;