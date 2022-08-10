import Image from "next/image";
import React, {FC, useContext} from 'react';
import Img from "static/images/catalogs/1.png";
import {EditIcon, GrayXIcon, PayPalButtonIcon} from "static/icons/icon";
import styles from './Minicart.module.scss'
import A from "components/UI/A/A";
import {ICart} from "models/index";
import {Context} from "pages/_app";
import item from "components/UI/Menu/Item";
import {useFetchRemoveFromCartMutation} from "services/CartsService";

interface MinicartProps {
    product?: ICart[]
}


const Minicart: FC<MinicartProps> = ({ product }) => {

    let total_price = 0;
    product?.map(item => {
        total_price += Number(item.product.price)
    })

    const { authStore } = useContext(Context)
    const [removeFromCart, {}] = useFetchRemoveFromCartMutation()


    const handleDelete = (id: number) => {
        removeFromCart(id)
    }
    console.log(total_price)

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
                                    return <div key={id}>
                                        <span>{quantity}X</span>
                                        <Image
                                            width={65}
                                            height={65}
                                            objectFit='cover'
                                            objectPosition='center'
                                            src={product?.product_img?.image ? product?.product_img?.image : Img}
                                            alt="item"
                                        />
                                        <h4>{product?.name}</h4>
                                        <div>
                                            <button onClick={() => handleDelete(id)}>
                                                <GrayXIcon/>
                                            </button>
                                            <button>
                                                <EditIcon/>
                                            </button>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        <div className={styles.footer}>
                            <h3>Subtotal: <span>${total_price}.00</span></h3>
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

export default Minicart;