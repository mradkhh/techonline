import React, {createRef, FC, useEffect, useRef, useState} from 'react';
import ProductCard from "components/UI/Cards/ProductCard";
import {ICategories, IProduct} from "models/index";
import {useFetchAllBrandsQuery} from "services/BrandsService";
import Image from "next/image";
import {ArrowDown, ArrowRightIcon} from "static/icons/icon";
import {useFetching} from "hooks/useFetching";
import axios from "axios";
import {API_URL} from "services/interseptors";
import styles from './Menu.module.scss'
import Item from "components/UI/Menu/Item";
import {useFetchCategoryByIdQuery} from "services/CategoriesService";

interface MenuProps  {
    data: ICategories,
    setIsInMenuArea: (bool: boolean) => void
}

const Menu: FC<MenuProps> = ({ data, setIsInMenuArea }) => {
    const { data: brands } = useFetchAllBrandsQuery('')
    const [ arrowMotion, setArrowMotion ] = useState<boolean>(false)
    const [ itemData, setItemData ] = useState<ICategories>({} as ICategories)



    const [ fetchCategoryId ] = useFetching(async (id: number) => {
        const res = await axios.get<ICategories>(`${API_URL}categories/${id}`)
        const data = res?.data
        setItemData(data)
    })

    console.log("Item Data: ", itemData)
    console.log("Data: ", data)

    const handleClick = (id: number) => {
        fetchCategoryId(id)
        console.log("Okkk")
        setItemData(data)
    }


    return (
        <div onClick={() => setIsInMenuArea(true)} className={styles.wrapper}>
            <div className={styles.top}>
                <div onClick={(e)=> e.stopPropagation()} className={styles.menu}>
                    {
                        data && data?.childs?.map(item => {
                            return <Item key={item.id}
                                         id={item.id}
                                         item={item}
                                         handleClick={handleClick}
                                         setArrowMotion={setArrowMotion}
                                         arrowMotion={arrowMotion}
                            />
                        })
                    }
                </div>
                <div className={styles.cards}>
                        {
                            data && data?.products?.splice(0, 4)
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