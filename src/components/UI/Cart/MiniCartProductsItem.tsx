import React, {FC, memo} from 'react';
import Image from "next/image";
import Img from "static/images/catalogs/1.png";
import {EditIcon, GrayXIcon} from "static/icons/icon";
import {IProduct} from "models/index";
import {useFetchRemoveFromCartMutation} from "services/CartsService";
import A from "components/UI/A/A";
import styles from './Minicart.module.scss'

interface MiniCartProductsItemProps {
    id: number,
    quantity: number,
    product: IProduct
}

const MiniCartProductsItem: FC<MiniCartProductsItemProps> = ({ id, quantity, product }) => {

    const [removeFromCart, { isLoading: deleteLoading, isSuccess: deleteSuccess } ] = useFetchRemoveFromCartMutation()

    const handleDelete = () => {
        removeFromCart(id)
    }

    return (
        <div style={{transform: deleteLoading ? 'scale(0.9)' : deleteSuccess ? 'translateX(-10000px)' : '', transition: 'all 200ms'}}>
            <span>{quantity}X</span>
            <Image
                width={65}
                height={65}
                objectFit='cover'
                objectPosition='center'
                src={product?.product_img?.image ? product?.product_img?.image : Img}
                alt="item"
            />
            <div className={styles.product_link}>
                <A href={`/product/${product?.id}`}>{product?.short_desc}</A>
            </div>
            <div>
                <button onClick={handleDelete}>
                    <GrayXIcon/>
                </button>
                <button>
                    <EditIcon/>
                </button>
            </div>
        </div>
    );
};

export default memo(MiniCartProductsItem);