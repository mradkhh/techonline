import React, {createRef, FC, memo} from 'react';
import Image from "next/image";
import useHover from "hooks/useHover";
import { FavoriteIcon, RedCallIcon, ShoppingCartIcon, StatsIcon, SuccessIcon } from "static/icons/icon";
import img from 'static/images/products/1.jpg'
import styles from './styles/ProductCard.module.scss';
import useMediaQuery from "hooks/useMediaQuery";
import {API_URL} from "services/interseptors";


interface ProductCardProps {
    isInStock: boolean,
    image?: string,
    title: string,
    price: string,
    discountPrice: number,
    handleAddToCart: () => void
}


const ProductCard: FC<ProductCardProps> = ({ isInStock, image, discountPrice, price, title, handleAddToCart }) => {

    const ref = createRef<HTMLDivElement>()
    const hover = useHover(ref)

    const matches = useMediaQuery("(min-width: 992px)")
    const widthImg = matches ? 150 : 100

    return (
        <div  ref={ref} className={styles.card}>
            { isInStock ?
                <div className={styles.inStock}> <SuccessIcon/> in stock </div>
                :
                <div className={styles.notStock}> <RedCallIcon/> check availability </div> }
            <div className={styles.img}>
                <Image
                    width={widthImg ? widthImg : 150}
                    height={widthImg ? widthImg : 150}
                    objectFit='cover'
                    objectPosition='center'
                    alt={title}
                    src={image ? `${API_URL}+${image}` : img}
                />
            </div>
            <div className={styles.body}>
                <h4>{title}</h4>
                <div>{price} $</div>
                <div>{discountPrice} $</div>
            </div>
            <div  className={styles.hover} >
                    <div className={styles.icon}>
                        <FavoriteIcon/>
                        <StatsIcon/>
                    </div>
                    <button
                        onClick={handleAddToCart}
                        className={styles.addToCart}>
                        <ShoppingCartIcon/>
                        Add To Cart
                    </button>
                </div>
        </div>
    );
};

export default memo(ProductCard);