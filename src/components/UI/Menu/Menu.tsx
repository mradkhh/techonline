import dynamic from "next/dynamic";
import React, {FC} from 'react';
import Image from "next/image";
import { useAppSelector } from 'hooks/redux';
import {ICategories} from "models/index";
import {SwiperSlide} from "swiper/react";
import styles from './Menu.module.scss'

const Item = dynamic(() => import("components/UI/Menu/Item"))
const ProductCard = dynamic(() => import("components/UI/Cards/ProductCard"))
const Carousel = dynamic(() => import("components/UI/Carousel/Carousel"))

interface MenuProps  {
    data: ICategories,
}

const Menu: FC<MenuProps> = ({ data }) => {
    const { brands } = useAppSelector(state => state.brands)
    const { categories } = useAppSelector(state => state.categories)

    return (
        <div  className={styles.wrapper}>
            <div className={styles.top}>
                <div onClick={(e)=> e.stopPropagation()} className={styles.menu}>
                    <div>
                        {
                            data && data?.childs?.map(item => {
                                return <Item
                                    key={item.id}
                                    id={item.id}
                                    item={item}
                                />
                            })
                        }
                    </div>
                </div>
                <div className={styles.cards}>
                    {
                        categories && categories?.products && categories?.products?.map(item => {
                            return <ProductCard
                                rating={item?.rating}
                                id={item.id}
                                key={item.id}
                                image={item?.product_img?.image}
                                title={item.short_desc}
                                price={item.price}
                                discountPrice={item.discount}
                                isInStock={item.is_stock}
                            />
                        })
                    }
                </div>
            </div>
            <div className={styles.brands}>
                <Carousel type='brand' autoplay={true} button={false} loop={true} >
                    {
                        brands?.results && brands.results.map((item: any) =>
                            <SwiperSlide key={item.id}>
                                <div className={styles.brandIcon}>
                                    <Image
                                        objectFit='contain'
                                        objectPosition='center'
                                        width={153}
                                        height={80}
                                        src={item?.icon}
                                        alt={item?.name}
                                    />
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Carousel>
                {/*{*/}
                {/*    brands?.results && brands?.results.map((item: any) =>*/}
                {/*            <div key={item?.id} className={styles.brandIcon}>*/}
                {/*                <Image*/}
                {/*                    objectFit='contain'*/}
                {/*                    objectPosition='center'*/}
                {/*                    width={153}*/}
                {/*                    height={80}*/}
                {/*                    src={item?.icon}*/}
                {/*                    alt={item?.name}*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*    )*/}
                {/*}*/}
            </div>
        </div>
    );
};

export default Menu;