import React, {FC} from 'react';
import Image from "next/image";
import {FavoriteIcon, MessageIcon, RedCallIcon, ShoppingCartIcon, StatsIcon, SuccessIcon} from "static/icons/icon";
import img from 'static/images/products/1.jpg'
import styles from './styles/FullProductCard.module.scss'
import {useFetchAddToCartMutation, useFetchCartQuery} from "services/CartsService";

interface FullProductCardProps {
    id: number,
    isInStock: boolean,
    image?: string,
    rating?: number,
    title: string,
    price: string,
    discountPrice: number,
    reviews?: number,
    name: string
}


const FullProductCard: FC<FullProductCardProps> = ({name,
                                                       isInStock,
                                                       image,
                                                       rating,
                                                       discountPrice,
                                                       price,
                                                       reviews,
                                                       title,
                                                       id
}) => {

    const [fetchAddToCart, {}] = useFetchAddToCartMutation()
    const { data: cart_products } = useFetchCartQuery('')
    const is_in_cart = cart_products?.results?.find(item => (item?.product?.id === Number(id)))

    const handleAddToCart = () => {
        !is_in_cart && fetchAddToCart({quantity: 1, product: id})
    }


    return (
        <div className={styles.card}>
            <div className={styles.stock}>
                { isInStock ?
                    <div className={styles.inStock}> <SuccessIcon/> in stock </div>
                    :
                    <div className={styles.notStock}> <RedCallIcon/> check availability </div>
                }
            </div>
            <div className={styles.img}>
                <Image
                    objectFit='cover'
                    objectPosition='center'
                    width={250}
                    height={250}
                    src={image ? image : img}
                    alt={"product"}
                />
            </div>
            <div className={styles.body}>
               <div className={styles.bodyHead}>
                   <div>
                       <h5>{ name }</h5>
                       <h4>{title}</h4>
                       <div>
                           <div>{price} $</div>
                           <div>{discountPrice} $</div>
                       </div>
                   </div>
                   <table className={styles.character}>
                       <tbody>
                           <tr>
                               <td>CPU</td>
                               <td>N/A</td>
                           </tr>
                           <tr>
                               <td>Featured</td>
                               <td>N/A</td>
                           </tr>
                           <tr>
                               <td>I/O Ports</td>
                               <td>N/A</td>
                           </tr>
                       </tbody>
                   </table>
               </div>
            <div className={styles.bodyFooter}>
                <button onClick={handleAddToCart} className={`${is_in_cart ? styles.inCart : styles.addToCart} `}>
                    <ShoppingCartIcon/>
                    {is_in_cart ? 'Added' : 'Add To Cart'}
                </button>
                <div className={styles.availability}>
                    <button>
                        <MessageIcon/>
                    </button>
                    <button>
                        <StatsIcon/>
                    </button>
                    <button>
                        <FavoriteIcon/>
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default FullProductCard;