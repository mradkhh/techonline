import React, {FC} from 'react';
import Image from "next/image";
import {MSIIcon} from "static/icons/icon";
import SideImg from 'static/images/catalogs/side.png'
import styles from './Sidebar.module.scss'

interface SidebarProps {

}


const Sidebar: FC<SidebarProps> = ({  }) => {
    return (
        <div className={styles.sidebar}>
            <button>‹ Back</button>
            <div className={styles.filter}>
                <div className={styles.filterTop}>
                    <h3>Filters</h3>
                    <button>Clear Filter</button>
                </div>
                <div className={styles.filterCenter}>

                </div>
                <div className={styles.filterBottom}>
                    <button>Apply Filters (2)</button>
                </div>
                <div className={styles.brandsFilter}>
                    <div>
                        <h3>Brands</h3>
                        <button>All Brands</button>
                    </div>
                    <div>
                        <MSIIcon/>
                        <MSIIcon/>
                        <MSIIcon/>
                        <MSIIcon/>
                        <MSIIcon/>
                        <MSIIcon/>
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