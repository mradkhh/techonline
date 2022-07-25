import Image from "next/image";
import React, { useState} from 'react';
import MainLayout from "layouts/MainLayout";
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import Tab1 from "pages/product/components/Tab1";
import Tab2 from "pages/product/components/Tab2";
import Tab3 from "pages/product/components/Tab3";
import img from "static/images/product/inTab.png"
import {
    FavoriteIcon,
    GrayArrowDownIcon,
    GrayArrowUpIcon,
    MessageIcon,
    PayPalButtonIcon,
    StatsIcon
} from "static/icons/icon";
import styles from 'styles/pages/product.module.scss'


const tabs = [
    { id: 1, title: 'About Product' },
    { id: 2, title: 'Details' },
    { id: 3, title: 'Specs' }
]

const breadcrumbs = [
    { path: '/', text: 'Home' },
    { path: '/laptops', text: 'Laptops' }
]


const Product = () => {
    const [ tabNumber, setTabNumber ] = useState<number>(1)
    const [ amount, setAmount ] = useState<number>(1)


    const handleSwitch = (id: number): void => {
        setTabNumber(id)
    }

    const handleIncrement = () => {
        setAmount(amount + 1)
    }

    const handleDecrement = () => {
        if ( amount > 0 ) {
            setAmount(amount - 1)
        }
    }
    return (
        <MainLayout title="Product - id" description="MSI" mainClass="main_product">
            <div className={styles.mainInfo}>
                <div className={styles.mainInfo__header}>
                    <div>
                        <div className={styles.header_tabs}>
                            {
                                tabs && tabs.map(tab =>
                                    <h4 style={{borderBottom: tabNumber === tab.id ? '2px solid #0156FF' : '2px solid transparent',
                                        color: tabNumber === tab.id ? 'var(--black)' : 'var(--gray)'
                                    } } key={tab.id} onClick={() => handleSwitch(tab.id)}>{tab.title}</h4>
                                )
                            }
                        </div>
                        <div className={styles.payment}>
                            <div>On Sale from <span>$3,299.00</span></div>
                            <div className={styles.counter}>
                                <span>{amount}</span>
                                <div>
                                    <button onClick={handleIncrement}>
                                        <GrayArrowUpIcon/>
                                    </button>
                                    <button onClick={handleDecrement}>
                                        <GrayArrowDownIcon/>
                                    </button>
                                </div>
                            </div>
                            <button>Add to Cart</button>
                            <button>
                                <PayPalButtonIcon/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.mainInfo__content}>
                    <div>
                        <div className={styles.mainInfo__content_left}>
                            <Breadcrumbs array={breadcrumbs} current=" MSI WS Series"/>
                            {
                                tabNumber === 1 ?
                                    <Tab1/> :
                                    tabNumber === 2 ?
                                        <Tab2/> :
                                        tabNumber === 3 ?
                                            <Tab3/> : null
                            }
                            <h6>+ More information</h6>
                        </div>
                        <div className={styles.mainInfo__content_right}>
                            <div className={styles.img}>
                                <div className={styles.availability}>
                                    <button>
                                        <FavoriteIcon/>
                                    </button>
                                    <button>
                                        <StatsIcon/>
                                    </button>
                                    <button>
                                        <MessageIcon/>
                                    </button>
                                </div>
                                <Image
                                    width={255}
                                    height={444}
                                    objectFit='cover'
                                    objectPosition='center'
                                    src={img}
                                    alt="img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Product;