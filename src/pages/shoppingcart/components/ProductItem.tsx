import React, {FC, useEffect, useState} from 'react';
import Image from "next/image";
import {useFetchAddToCartMutation, useFetchRemoveFromCartMutation} from "services/CartsService";
import {EditIcon, GrayArrowDownIcon, GrayArrowUpIcon, GrayXIcon} from "static/icons/icon";
import {IProduct, IProductId} from "models/index";
import img1 from "static/images/products/1.jpg";
import styles from './ProductItem.module.scss'

interface ProductItemProps {
    product: IProduct,
    quantity: number,
    id: number,
    isLoading: boolean
}


const ProductItem: FC<ProductItemProps> = ({ product ,  quantity, id, isLoading }) => {

    const [ deleteFromCart ] = useFetchRemoveFromCartMutation()
    const [ addToCart ] = useFetchAddToCartMutation()
    const storageQuantity = product?.quantity ? product?.quantity : 0
    console.log(storageQuantity)
    const [ amount, setAmount ] = useState<number>(quantity)

    const handleDelete = () => {
        deleteFromCart(id)
    }

    const handleIncrement = () => {
        if ( (amount) < storageQuantity ) {
            setAmount(state => state + 1)
            addToCart({ quantity: amount + 1, product: Number(id) })
        }
    }

    const handleDecrement = () => {
        const MIN_QUANTITY = 1
        if ( (amount) > MIN_QUANTITY ) {
            setAmount(state => state - 1)
            addToCart({ quantity: amount - 1, product: Number(id) })
        } else if ((amount === MIN_QUANTITY))  {
            setAmount(state => state - 1)
            deleteFromCart(id)
        }
    }

    useEffect(() => {
        if (!isLoading) {
            setAmount(quantity)
        }
    }, [isLoading, quantity])


    return (
        isLoading ?
            <h1>Loading...</h1>
            :
            <div key={id} className={styles.tableBody}>
                <div className={styles.tableImgCell}>
                    <div className={styles.tableImg}>
                        <Image
                            width={120}
                            height={120}
                            objectFit='cover'
                            objectPosition='center'
                            src={product?.product_img?.image ? product?.product_img?.image : img1 }
                            alt="feature"
                        />
                    </div>
                    <div className={styles.tableTitle}>
                        { product?.short_desc }
                    </div>
                </div>
                <div className={styles.tableInfo}>
                    <div className={styles.price}>
                        ${ product?.price }
                    </div>
                    <div className={styles.counter}>
                        <span>{amount}</span>
                        <div>
                            <button onClick={handleIncrement}>
                                <GrayArrowUpIcon/>
                            </button>
                            <button  onClick={handleDecrement}>
                                <GrayArrowDownIcon/>
                            </button>
                        </div>
                    </div>
                    <div className={styles.subtotal}>
                        ${Number(product?.price) * amount}.00
                    </div>
                    <div className={styles.tableBtn}>
                        <button onClick={handleDelete} >
                            <GrayXIcon/>
                        </button>
                        <button>
                            <EditIcon/>
                        </button>
                    </div>
                </div>
            </div>
    );
};

export default ProductItem;