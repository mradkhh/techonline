import React, {createRef, FC, memo} from 'react';
import Image from "next/image";
import useHover from "hooks/useHover";
import { FavoriteIcon, RedCallIcon, ShoppingCartIcon, StatsIcon, SuccessIcon } from "static/icons/icon";
import styles from './styles/ProductCard.module.scss';


interface ProductCardProps {
    isInStock: boolean,
    image: any,
    rating: number,
    title: string,
    price: number,
    discountPrice: number,
    reviews: number
}


const ProductCard: FC<ProductCardProps> = ({ isInStock, image, rating, discountPrice, price, reviews, title }) => {

    const ref = createRef<HTMLDivElement>()
    const hover = useHover(ref)

    return (
        <div  ref={ref} className={styles.card}>
            { isInStock ?
                <div className={styles.inStock}> <SuccessIcon/> in stock </div>
                :
                <div className={styles.notStock}> <RedCallIcon/> check availability </div> }
            <div className={styles.img}>
                <Image
                    width={150}
                    height={150}
                    objectFit='cover'
                    objectPosition='center'
                    alt={title}
                    src={image}
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
                    <button className={styles.addToCart}>
                        <ShoppingCartIcon/>
                        Add To Cart
                    </button>
                </div>
        </div>
    );
};

export default memo(ProductCard);