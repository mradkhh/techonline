import React, {FC} from 'react';
import img1 from "static/images/catalogs/1.png";
import ProductCard from "components/UI/Cards/ProductCard";
import styles from './Menu.module.scss'
import {ICategories, IProduct} from "models/index";
import {useFetchAllBrandsQuery} from "services/BrandsService";
import Image from "next/image";
import {log} from "util";
import {ArrowRightIcon} from "static/icons/icon";

interface MenuProps  {
    data: ICategories,
    setIsInMenuArea: (bool: boolean) => void
}

const Menu: FC<MenuProps> = ({ data, setIsInMenuArea }) => {

    const { data: brands } = useFetchAllBrandsQuery('')

    console.log("Inside data: ", data)
    return (
        <div onClick={() => setIsInMenuArea(true)} className={styles.wrapper}>
            <div className={styles.top}>
                <div onClick={(e)=> e.stopPropagation()} className={styles.menu}>
                    {
                        data && data?.childs?.map(item => {
                            return <div key={item?.id}>
                                <div className={styles.menuItem} >{item?.name}
                                    <div className={styles.arrow}>
                                        <ArrowRightIcon/>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
                    <div className={styles.cards}>
                        {
                            data && data?.products?.splice(0, 2)
                                .map(item => {
                                    return <ProductCard
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
                {
                    brands?.results && brands.results.map((item: any) =>
                            <div key={item?.id} className={styles.brandIcon}>
                                <Image
                                    objectFit='contain'
                                    objectPosition='center'
                                    width={153}
                                    height={80}
                                    src={item?.icon}
                                    alt={item?.name}
                                />
                            </div>
                    )
                }
            </div>
        </div>
    );
};

export default Menu;