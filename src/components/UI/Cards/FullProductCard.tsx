import React, {FC} from 'react';
import Image from "next/image";
import {FavoriteIcon, MessageIcon, RedCallIcon, ShoppingCartIcon, StatsIcon, SuccessIcon} from "static/icons/icon";
import img from 'static/images/products/1.jpg'
import styles from './styles/FullProductCard.module.scss'

interface FullProductCardProps {
    isInStock: boolean,
    image: string,
    rating?: number,
    title: string,
    price: string,
    discountPrice: number,
    reviews?: number,
    name: string
}


const FullProductCard: FC<FullProductCardProps> = ({name, isInStock, image, rating, discountPrice, price, reviews, title }) => {
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
                <button className={styles.addToCart}>
                    <ShoppingCartIcon/>
                    Add To Cart
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