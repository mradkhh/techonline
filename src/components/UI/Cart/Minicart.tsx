import React, {FC, memo, useContext} from 'react';
import {PayPalButtonIcon} from "static/icons/icon";
import A from "components/UI/A/A";
import MiniCartProductsItem from "components/UI/Cart/MiniCartProductsItem";
import {ICart} from "models/index";
import {Context} from "pages/_app";
import styles from './Minicart.module.scss'

interface MinicartProps {
    product?: ICart[]
}

const Minicart: FC<MinicartProps> = ({ product }) => {

    let total_price = 0;
    product?.map(item => {
        total_price += (Number(item.product.price) * item.quantity)
    })
    const { authStore } = useContext(Context)

        return (
            <div className={styles.cart}>
                <div className={styles.header}>
                    <h4>My Cart</h4>
                    <p>{product?.length} item in cart</p>
                    <A href="/shoppingcart" isBtn={true}>View or Edit Your Cart</A>
                </div>
                {
                    authStore.isAuth &&
                    <>
                        <div className={styles.body}>
                            {
                                product && product?.map(({ id, quantity, product }) => {
                                    return <MiniCartProductsItem
                                        key={id}
                                        id={id}
                                        quantity={quantity}
                                        product={product}
                                    />
                                })
                            }
                        </div>
                        <div className={styles.footer}>
                            <h3>Subtotal: <span>${total_price }.00</span></h3>
                            <div>
                                <A isBtn={true} href={'/checkout'}>Go to Checkout</A>
                                <button>Check out with
                                    <PayPalButtonIcon/>
                                </button>
                            </div>
                        </div>
                    </>
                }
            </div>)
};

export default memo(Minicart);