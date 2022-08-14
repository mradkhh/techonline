import React, {FC, useState} from 'react';
import Image from "next/image";
import {MSIIcon} from "static/icons/icon";
import SideImg from 'static/images/catalogs/side.png'
import styles from './Sidebar.module.scss'
import {IBrands} from "models/index";
import Accordion from "components/UI/Accordion/Accordion";
import {brandsApi} from "services/BrandsService";
import {useGetAllProductsQuery} from "services/ProductService";
import {categoriesApi, useFetchAllCategoriesQuery, useFetchCategoriesQuery} from "services/CategoriesService";
import BrandItem from "components/UI/Sidebar/components/BrandItem";
import CategoryItem from "components/UI/Sidebar/components/CategoryItem";
import {useFetchColorsQuery} from "services/ColorService";
import ColorItem from "components/UI/Sidebar/components/ColorItem";

interface SidebarProps {
    setBrandId: (id: number | string) => void,
    setCategoryId: (id: number | string) => void,
    setColorId: (args: any) => void,
}

const Sidebar: FC<SidebarProps> = ({ setBrandId, setCategoryId, setColorId }) => {

    const { data: brands } = brandsApi.useFetchAllBrandsQuery('')
    const { data: categories } = useFetchCategoriesQuery('')
    const { data: colors } = useFetchColorsQuery('')


    const handleBrandFilterClear = () => {
        setBrandId('')
    }

    const handleClearFilterClear = () => {
        setCategoryId('')
        setColorId([])
    }


    return (
        <div className={styles.sidebar}>
            <button>‹ Back</button>
            <div className={styles.filter}>
                <div className={styles.filterTop}>
                    <h3>Filters</h3>
                    <button>Clear Filter</button>
                </div>
                <div className={styles.filterCenter}>
                    <Accordion header={'Category'} >
                        <div className={styles.category_filter}>
                            {
                                categories && categories?.results?.map(item =>
                                    <CategoryItem
                                        key={item?.id}
                                        id={item?.id}
                                        name={item?.name}
                                        setCategoryId={setCategoryId}
                                    />
                                )
                            }
                        </div>
                    </Accordion>
                    <Accordion header={'Category'} >
                        <div className={styles.category_filter}>
                            {
                                categories && categories?.results?.map(item =>
                                    <CategoryItem
                                        key={item?.id}
                                        id={item?.id}
                                        name={item?.name}
                                        setCategoryId={setCategoryId}
                                    />
                                )
                            }
                        </div>
                    </Accordion>
                    <Accordion header={'Colors'} >
                        <div className={styles.colors_filter}>
                            {
                                colors && colors?.results?.map(item =>
                                    <ColorItem
                                        name={item?.name}
                                        key={item?.id}
                                        id={item?.id}
                                        setColorId={setColorId}
                                    />
                                )
                            }
                        </div>
                    </Accordion>
                </div>
                <div className={styles.filterBottom}>
                    <button>Apply Filters (2)</button>
                </div>
                <div className={styles.brandsFilter}>
                    <div>
                        <h3>Brands</h3>
                        <button onClick={handleBrandFilterClear}>All Brands</button>
                    </div>
                    <div>
                        {
                            brands && brands?.results?.map(item =>
                                <BrandItem
                                    key={item?.id}
                                    name={item?.name}
                                    id={item?.id}
                                    icon={item?.icon}
                                    setBrandId={setBrandId}
                                />
                            )
                        }
                    </div>
                </div>
                <div className={styles.compare}>
                    <h3>Compare Products</h3>
                    <p>You have no items to compare.</p>
                </div>
                <div className={styles.wishList}>
                    <h3>My Wish List</h3>
                    <p>You have no items in your wish list.</p>
                </div>
                <div>
                    <Image
                        width={235}
                        height={370}
                        objectFit='cover'
                        objectPosition='center'
                        src={SideImg}
                        alt='side'
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;