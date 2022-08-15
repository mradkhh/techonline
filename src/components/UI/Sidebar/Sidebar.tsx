import React, {FC, useState} from 'react';
import Image from "next/image";
import SideImg from 'static/images/catalogs/side.png'
import styles from './Sidebar.module.scss'
import Accordion from "components/UI/Accordion/Accordion";
import {brandsApi} from "services/BrandsService";
import { useFetchCategoriesQuery} from "services/CategoriesService";
import BrandItem from "components/UI/Sidebar/components/BrandItem";
import CategoryItem from "components/UI/Sidebar/components/CategoryItem";
import {useFetchColorsQuery} from "services/ColorService";
import ColorItem from "components/UI/Sidebar/components/ColorItem";

interface SidebarProps {
    setBrandId: (args: any) => void,
    setCategoryId: (args: any) => void,
    setColorId: (args: any) => void,
    min_price: any
    max_price: any,
    setApply: (bool: boolean) => void,
    countFilter: number
}

const Sidebar: FC<SidebarProps> = ({ setBrandId, setCategoryId, setColorId, max_price, min_price, setApply, countFilter }) => {

    const [ refresh, setRefresh ] = useState<boolean>(false)
    const { data: brands } = brandsApi.useFetchAllBrandsQuery('')
    const { data: categories } = useFetchCategoriesQuery('')
    const { data: colors } = useFetchColorsQuery('')


    const handleBrandFilterClear = () => {
        brands?.results.forEach(item => {
            setBrandId((state: any) => [...state, item.id])
        })
    }

    const handleClearFilterClear = () => {
        setCategoryId((state: number[]) => state =[])
        setColorId((state: number[]) => state =[])
        setBrandId((state: number[]) => state =[])
        min_price.setValue('')
        max_price.setValue('')
        setRefresh(!refresh)
    }


    return (
        <div className={styles.sidebar}>
            <button>‹ Back</button>
            <div className={styles.filter}>
                <div className={styles.filterTop}>
                    <h3>Filters</h3>
                    <button onClick={handleClearFilterClear}>Clear Filter</button>
                </div>
                <div className={styles.filterCenter}>
                    <Accordion header={'Category'} className={styles.accordion} headerStyle={styles.accordion_header} >
                        <div className={styles.category_filter}>
                            {
                                categories && categories?.results?.map(item =>
                                    <CategoryItem
                                        clear={refresh}
                                        key={item?.id}
                                        id={item?.id}
                                        name={item?.name}
                                        setCategoryId={setCategoryId}
                                    />
                                )
                            }
                        </div>
                    </Accordion>
                    <Accordion header={'Price'} className={styles.accordion} headerStyle={styles.accordion_header} >
                        <div className={styles.price__filter}>
                                <div className={styles.price__filter_item}>
                                    <div>min</div>
                                    <input { ...min_price } type="text"/>
                                </div>
                                <div className={styles.price__filter_item}>
                                    <div>max</div>
                                    <input { ...max_price } type="text"/>
                                </div>
                        </div>
                    </Accordion>
                    <Accordion header={'Colors'} className={styles.accordion} headerStyle={styles.accordion_header} >
                        <div className={styles.colors_filter}>
                            {
                                colors && colors?.results?.map(item =>
                                    <ColorItem
                                        clear={refresh}
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
                <div onClick={() => setApply(true)} className={styles.filterBottom}>
                    <button>Apply Filters ({ countFilter })</button>
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
                                    clear={refresh}
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