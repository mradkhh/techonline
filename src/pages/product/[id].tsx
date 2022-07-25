import Image from "next/image";
import React, { useState} from 'react';
import MainLayout from "layouts/MainLayout";
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import Tab1 from "pages/product/components/Tab1";
import Tab2 from "pages/product/components/Tab2";
import img from "static/images/product/inTab.png"
import {
    DDR4Svg,
    FavoriteIcon, GenSSDSvg,
    GrayArrowDownIcon,
    GrayArrowUpIcon, IntelSvg, LineArrowSvg,
    MessageIcon, NVidiaSvg, PartnerLogo,
    PayPalButtonIcon,
    StatsIcon
} from "static/icons/icon";
import styles from 'styles/pages/product.module.scss'
import A from "components/UI/A/A";


const tabs = [
    { id: 1, title: 'About Product' },
    { id: 2, title: 'Details' }
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
            <section className={styles.mainInfo}>
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
                                        <Tab2/> : null
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
                                <div>
                                    <PartnerLogo/>
                                    <h5>own it now, up to 6 months interest free <A href="/">learn more</A></h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className={styles.competition}>
                <div>
                    <h2>Outplay the Competition</h2>
                    <p>Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.
                        <br/> <br/>
                        *Performance compared to i7-9700. Specs varies by model.</p>
                </div>
            </section>

            <section className={styles.helper}>
                <div>
                    <A href='/'>Product Support
                        <LineArrowSvg/>
                    </A>
                    <A href='/'>FAQ
                        <LineArrowSvg/>
                    </A>
                    <A href='/'>Our Buyer Guide
                        <LineArrowSvg/>
                    </A>
                </div>
            </section>

            <section className={styles.feature}>
                <div>
                    <div>
                        <h2>Features</h2>
                        <p>The MPG series brings out the best in gamers by allowing full expression in color with advanced RGB lighting control and synchronization.</p>
                    </div>
                    <div>
                        <div>
                            <IntelSvg/>
                            <p>Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.</p>
                        </div>
                        <div>
                            <NVidiaSvg/>
                            <p>The new GeForce® RTX SUPER™ Series has more cores and higher clocks for superfast performance compared to previous-gen GPUs.</p>
                        </div>
                        <div>
                            <GenSSDSvg/>
                            <p>Unleash the full potential with the latest SSD technology, the NVM Express. 6 times faster than traditional SATA SSD.</p>
                        </div>
                        <div>
                            <DDR4Svg/>
                            <p>Featuring the latest 10th Gen Intel® Core™ processors, memory can support up to DDR4 2933MHz to delivers an unprecedented gaming experience.</p>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default Product;