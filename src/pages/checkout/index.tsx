import {NextPage} from "next";
import React, {FC} from 'react';
import MainLayout from "layouts/MainLayout";
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import {CheckoutIcon} from "static/icons/icon";
import TextInput from "components/UI/Inputs/TextInput";
import styles from 'styles/pages/checkout.module.scss'


const breadcrumbs = [
    { path: '/', text: 'Home' },
    { path: '/', text: 'Shopping Cart' }
]

const CheckOut: NextPage = () => {
    return (
        <MainLayout title={"TechOnline - Checkout"} description={"checkout"} mainClass={"main_checkout"}>
            <Breadcrumbs array={breadcrumbs} current="Checkout progress"/>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <h1>Checkout</h1>
                    <button>Sign In</button>
                </div>
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

            <div className={styles.content}>
                <form className={styles.formField}>
                    <div className={styles.contentTitle}>
                        <h2>Shipping Address</h2>
                    </div>
                    <div className={styles.form}>
                        <TextInput label={"Email Address"} placeholder={"Email Address"} type={"email"} require={true}/>
                        <p>You can create an account after checkout.</p>
                        <div className={styles.mainForm}>
                            <TextInput label={"First Name"} placeholder={"First Name"} type={"text"} require={true}/>
                            <TextInput label={"Last Name"} placeholder={"Last Name"} type={"text"} require={true}/>
                            <TextInput label={"Company"} placeholder={"Company"} type={"text"}/>
                            <TextInput label={"Street Address"} placeholder={"Street Address"} type={"text"} require={true}/>
                            <div className={styles.marginNot}>
                                <TextInput label={""} placeholder={""} type={"text"} require={false}/>
                            </div>
                            <TextInput label={"City"} placeholder={"City"} type={"text"}/>
                            <TextInput label={"State/Province"} placeholder={"State/Province"} type={"text"}/>
                            <TextInput label={"Zip/Postal Code"} placeholder={"Zip/Postal Code"} type={"text"}/>
                            <TextInput label={"Country"} placeholder={"Country *"} type={"text"}/>
                            <TextInput label={"Phone Number"} placeholder={"Phone Number"} type={"text"}/>
                        </div>
                    </div>
                    <div className={styles.radioWrapper}>
                        <div className={styles.radio}>
                            <label htmlFor="radio1">Standard Rate</label>
                            <div>
                                <input type="radio" name={'price'} id={"radio1"} value={1}/>
                                <div><h4>Price may vary depending on the item/destination. Shop Staff will contact you. $21.00</h4> <span>	$21.00</span></div>
                            </div>
                        </div>
                        <div className={styles.radio}>
                            <label htmlFor="radio2">Pickup from store</label>
                            <div>
                                <input type="radio" name={'price'} id={"radio2"} value={1}/>
                                <div><h4>1234 Street Address City Address, 1234</h4> <span>	$21.00</span></div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className={styles.summary}>
                    <h2>Order Summary</h2>
                </div>
            </div>
        </MainLayout>
    );
};

export default CheckOut;