import {NextPage} from "next";
import React, {useContext, useEffect, useState} from 'react';
import Image from "next/image";
import MainLayout from "layouts/MainLayout";
import {Context} from "pages/_app";
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import Accordion from "components/UI/Accordion/Accordion";
import A from "components/UI/A/A";
import {
    PartnerLogo,
    PayPalButtonIcon
} from "static/icons/icon";
import {
    useFetchCartQuery, useFetchClearCartMutation,
} from "services/CartsService";
import ProductItem from "pages/shoppingcart/components/ProductItem";
import styles from 'styles/pages/shoppingcart.module.scss'

const breadcrumbs = [
    { path: '/', text: 'Home' }
]


const Index: NextPage = () => {
    const { authStore } = useContext(Context)
    const {data: cart_results, isLoading} = useFetchCartQuery('')
    const [ clearCart ] = useFetchClearCartMutation()

    const handleClearCart = () => {
        clearCart('')
    }


    return (
        <MainLayout title={"TechOnline - Cart"} description={"cart"} mainClass={'main_shoppingCart'}>
            <Breadcrumbs array={breadcrumbs} current="Login"/>
            <h1 className={styles.title}>Shopping Cart</h1>
            {
                authStore.isAuth ?
                    <section className={styles.content}>
                        {
                            isLoading ?
                                <h1>Loading...</h1>
                                :
                                <>
                                    <div className={styles.table}>
                                        <div className={styles.tableHead}>
                                            <h5>Item</h5>
                                            <h5>Price</h5>
                                            <h5>Qty</h5>
                                            <h5>Subtotal</h5>
                                        </div>
                                        {
                                            cart_results && cart_results?.results?.map(( {product, quantity, id})=>
                                                <ProductItem isLoading={isLoading} key={id} product={product} quantity={quantity} id={id}/>
                                            )
                                        }
                                        <div className={styles.actionTable}>
                                            <A href="/catalog">Continue Shopping</A>
                                            <button onClick={handleClearCart}>Clear Shopping Cart</button>
                                            <button>Update Shopping Cart</button>
                                        </div>
                                    </div>
                                    <div className={styles.summary}>
                                        <h3>Summary</h3>
                                        <Accordion header="Estimate Shipping and Tax">
                                            <div className={styles.estimate}>
                                                <p>Enter your destination to get a shipping estimate.</p>
                                            </div>
                                        </Accordion>
                                        <Accordion header="Apply Discount Code">
                                            <div className={styles.applyInfo}>
                                                <h6>Subtotal <span>$13,047.00</span></h6>
                                                <h6>Shipping  <span>$21.00</span></h6>
                                                <p>(Standard Rate - Price may vary depending on the item/destination. TECHS Staff will contact you.)</p>
                                                <h6>Tax <span>$1.91</span></h6>
                                                <h6>GST (10%) <span>$1.91</span></h6>
                                                <h6>Order Total <span>$13,068.00</span></h6>
                                            </div>
                                        </Accordion>
                                        <div className={styles.actionBtns}>
                                            <button>Proceed to Checkout</button>
                                            <button>Check out with <PayPalButtonIcon/></button>
                                            <button>Check Out with Multiple Addresses</button>
                                        </div>
                                        <div className={styles.ads}>
                                            <PartnerLogo/>
                                            <h3><span>own</span> it now, up to 6 months interest free  </h3>
                                            <A href='/'> learn more</A>
                                        </div>
                                    </div>
                                </>
                        }
                    </section>
                    :
                    <section className={styles.notAuth}>
                        <h1>Not Found</h1>
                        <A href={'/register'}>Registration</A>
                    </section>
            }
        </MainLayout>
    );
};

export default Index;