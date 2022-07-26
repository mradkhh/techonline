import React, {FC, memo, useState} from 'react';
import Image from "next/image";
import Logo from "components/UI/Logo/Logo";
import Head from "components/Header/UI/Head";
import Minicart from "components/UI/Cart/Minicart";
import A from "components/UI/A/A";
import {SearchIcon, ShoppingCartIcon} from "static/icons/icon";
import styles from './Header.module.scss'

const Header: FC = () => {

    const [ showCart, setShowCart ] = useState<boolean>(false)

    const handleShowCart = () => {
        setShowCart(!showCart)
    }
    return (
            <div className={styles.root}>
                <Head/>
                <div className={styles.header}>
                    <div className={styles.Root}>
                        <Logo/>
                        {/*<SearchField/>*/}
                        <nav className={styles.Navbar}>
                            <ul>
                                <li>
                                    <A href='/laptops'>Laptops</A>
                                </li>
                                <li>
                                    <A href='/desktop'>Desktop PCs</A>
                                </li>
                                <li>
                                    <A href='/printers'>Printers & Scanners</A>
                                </li>
                                <li>
                                    <A href='/parts'>PC Parts</A>
                                </li>
                                <li>
                                    <A href='/products'>All Other Products</A>
                                </li>
                                <li>
                                    <A href='/repairs'>Repairs</A>
                                </li>
                                <button>Our Deals</button>
                            </ul>
                        </nav>
                        <SearchIcon/>
                            <div className={styles.Basket}>
                                <button
                                    onClick={handleShowCart}
                                    >
                                    <ShoppingCartIcon/>
                                    <span>3</span>
                                </button>
                                <Minicart show={showCart}/>
                            </div>
                        <div className={styles.Avatar}>
                            <Image
                                width={36}
                                height={36}
                                src={'/images/avatar.png'}
                                alt='avatar'
                            />
                        </div>
                    </div>
                </div>
            </div>
    );
};


Header.displayName = 'Header'

export default memo(Header);