import React, {createRef, FC, memo, useContext} from 'react';
import Image from "next/image";
import {
    FavoriteIcon,
    RedCallIcon,
    ShoppingCartIcon,
    StarIcon,
    StarIconGray,
    StatsIcon,
    SuccessIcon
} from "static/icons/icon";
import img from 'static/images/products/1.jpg'
import styles from './styles/ProductCard.module.scss';
import useMediaQuery from "hooks/useMediaQuery";
import {useFetchAddToCartMutation, useFetchCartQuery} from "services/CartsService";
import A from "components/UI/A/A";
import {Context} from "pages/_app";


interface ProductCardProps {
    isInStock: boolean,
    image?: string,
    title: string,
    price: string,
    discountPrice: number,
    id: number,
    rating?: number,
    reviews?: number
}

interface StarProps {
    rating: number
}

const Star: FC<StarProps> = ({ rating }) => {
    const arr = []
    for (let i = 0; i < rating; i++) {
        arr.push(i)
    }

    return (
        <>
            {
                arr.length === 0 ?
                    <>
                        <StarIconGray/>
                        <StarIconGray/>
                        <StarIconGray/>
                        <StarIconGray/>
                        <StarIconGray/>
                    </> :
                    arr.length === 1 ?
                        <>
                            <StarIcon/>
                            <StarIconGray/>
                            <StarIconGray/>
                            <StarIconGray/>
                            <StarIconGray/>
                        </> :
                        arr.length === 2 ?
                            <>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIconGray/>
                                <StarIconGray/>
                                <StarIconGray/>
                            </> :
                            arr.length === 3 ?
                                <>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIconGray/>
                                    <StarIconGray/>
                                </> :
                                arr.length === 4 ?
                                    <>
                                        <StarIcon/>
                                        <StarIcon/>
                                        <StarIcon/>
                                        <StarIcon/>
                                        <StarIconGray/>
                                    </> :
                                    arr.length === 5 ?
                                        <>
                                            <StarIcon/>
                                            <StarIcon/>
                                            <StarIcon/>
                                            <StarIcon/>
                                            <StarIcon/>
                                        </> :
                                        <>
                                            <StarIconGray/>
                                            <StarIconGray/>
                                            <StarIconGray/>
                                            <StarIconGray/>
                                            <StarIconGray/>
                                        </>

            }
        </>
    )
}


const ProductCard: FC<ProductCardProps> = ({ id,
                                               isInStock,
                                               image,
                                               discountPrice,
                                               price,
                                               title ,
                                               rating, reviews}) => {

    const [fetchAddToCart, {}] = useFetchAddToCartMutation()
    const matches = useMediaQuery("(min-width: 992px)")
    const { authStore } = useContext(Context)
    const widthImg = matches ? 150 : 100
    const { data: cart_products } = useFetchCartQuery('')
    const is_in_cart = cart_products?.results?.find(item => (item?.product?.id === Number(id)))



    const handleAddToCart = () => {
         if (authStore.isAuth) {
             !is_in_cart && fetchAddToCart({quantity: 1, product: id})
         } else {
             authStore.setShowModal(true)
         }
    }


    return (
            <div className={styles.card}>
                { isInStock ?
                    <div className={styles.inStock}> <SuccessIcon/> in stock </div>
                    :
                    <div className={styles.notStock}> <RedCallIcon/> check availability </div> }
                <A href={`/product/${id}`}>
                <div className={styles.img}>
                    <Image
                        width={widthImg ? widthImg : 150}
                        height={widthImg ? widthImg : 150}
                        objectFit='cover'
                        objectPosition='center'
                        placeholder='blur'
                        blurDataURL={'static/images/products/1.jpg'}
                        alt={'product'}
                        src={image ? image : img}
                    />
                </div>
                    <div  className={styles.body}>
                        <div className={styles.rating}>
                            <div className={styles.star}>
                                <Star rating={rating ? rating : 0} />
                            </div>
                            <span>Reviews ({reviews ? reviews : 0})</span>
                        </div>
                        <h4>{title}</h4>
                        <div>{price} $</div>
                        <div>{discountPrice} $</div>
                    </div>
                </A>
                <div className={styles.hover}>
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
                        className={`${is_in_cart ? styles.inCart : styles.addToCart} ${styles.cartButton}`}>
                        <ShoppingCartIcon/>
                        {is_in_cart ? 'Added' : 'Add To Cart'}
                    </button>
                </div>
            </div>
    );
};

export default memo(ProductCard);