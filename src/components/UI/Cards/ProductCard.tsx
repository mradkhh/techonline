import React, {createRef, FC, memo} from 'react';
import Image from "next/image";
import useHover from "hooks/useHover";
import { FavoriteIcon, RedCallIcon, ShoppingCartIcon, StatsIcon, SuccessIcon } from "static/icons/icon";
import img from 'static/images/products/1.jpg'
import styles from './styles/ProductCard.module.scss';
import useMediaQuery from "hooks/useMediaQuery";
import {API_URL} from "services/interseptors";
import {fetchAddToCart} from "services/CartsService";
import {useAppDispatch} from "hooks/redux";


interface ProductCardProps {
    isInStock: boolean,
    image: string,
    title: string,
    price: string,
    discountPrice: number,
    id: number
}


const ProductCard: FC<ProductCardProps> = ({ id, isInStock, image, discountPrice, price, title }) => {

    const dispatch = useAppDispatch()
    const ref = createRef<HTMLDivElement>()
    const hover = useHover(ref)

    const matches = useMediaQuery("(min-width: 992px)")
    const widthImg = matches ? 150 : 100

    const handleAddToCart = () => {
        dispatch(fetchAddToCart(id, 1))
    }

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
                    alt={'product'}
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
                        <button className={styles.favorite}>
                            <FavoriteIcon/>
                        </button>
                        <button className={styles.stat}>
                            <StatsIcon/>
                        </button>
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