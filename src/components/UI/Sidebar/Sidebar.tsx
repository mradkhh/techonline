import React, {FC, useState} from 'react';
import Image from "next/image";
import {MSIIcon} from "static/icons/icon";
import SideImg from 'static/images/catalogs/side.png'
import styles from './Sidebar.module.scss'
import {IBrands} from "models/index";
import Accordion from "components/UI/Accordion/Accordion";
import {brandsApi} from "services/BrandsService";
import {useGetAllProductsQuery} from "services/ProductService";

interface SidebarProps {
    setBrandId: (id: number | string) => void,
}

const Sidebar: FC<SidebarProps> = ({ setBrandId }) => {

    const { data: brands } = brandsApi.useFetchAllBrandsQuery('')

    const handleChoiceBrand = (id: number) => {
        setBrandId(id)
    }

    const handleBrandFilterClear = () => {
        setBrandId('')
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
                                <div
                                    onClick={(event) => handleChoiceBrand(item.id)}
                                    key={item?.id}
                                    className={styles.brandIcon}>
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