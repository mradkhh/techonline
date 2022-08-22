import React, {FC, useState} from 'react';
import axios from "axios";
import Image from "next/image";
import ProductCard from "components/UI/Cards/ProductCard";
import {ICategories} from "models/index";
import {useFetchAllBrandsQuery} from "services/BrandsService";
import {useFetching} from "hooks/useFetching";
import {API_URL} from "services/interseptors";
import Item from "components/UI/Menu/Item";
import styles from './Menu.module.scss'
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { categoriesSlice } from 'store/reducers/categoriesSlice';

interface MenuProps  {
    data: ICategories,
    setIsInMenuArea: (bool: boolean) => void
}

const Menu: FC<MenuProps> = ({ data, setIsInMenuArea }) => {
    const dispatch = useAppDispatch()
    const { categories } = useAppSelector(state => state.categories)
    const { data: brands } = useFetchAllBrandsQuery('')
    const [ arrowMotion, setArrowMotion ] = useState<boolean>(false)

    const [ fetchCategoryId ] = useFetching(async (id: number) => {
        const res = await axios.get<ICategories>(`${API_URL}categories/${id}`)
        const data = res?.data
        // dispatch(fetchingSuccess(data))
    })

    const handleClick = (id: number) => {
        fetchCategoryId(id)
    }

    return (
        <div onClick={() => setIsInMenuArea(true)} className={styles.wrapper}>
            <div className={styles.top}>
                <div onClick={(e)=> e.stopPropagation()} className={styles.menu}>
                    <div>
                        {
                            data && data?.childs?.map(item => {
                                return <Item
                                    key={item.id}
                                    id={item.id}
                                    item={item}
                                    handleClick={handleClick}
                                    setArrowMotion={setArrowMotion}
                                    arrowMotion={arrowMotion}
                                />
                            })
                        }
                    </div>
                </div>
                <div className={styles.cards}>
                    {
                        data && data?.products?.splice(0, 4)
                            .map(item => {
                                return <ProductCard
                                            rating={4}
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