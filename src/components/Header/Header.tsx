import React, {FC, memo, useCallback, useEffect, useState} from 'react';
import Image from "next/image";
import Logo from "components/UI/Logo/Logo";
import Head from "components/Header/UI/Head";
import Minicart from "components/UI/Cart/Minicart";
import A from "components/UI/A/A";
import Menu from "components/UI/Menu/Menu";
import { ShoppingCartIcon} from "static/icons/icon";
import SearchField from "components/UI/Inputs/SearchField";
import Burger from "components/UI/Burger/Burger";
import styles from './Header.module.scss'
import useMediaQuery from "hooks/useMediaQuery";

const Header: FC = () => {

    const [ showCart, setShowCart ] = useState<boolean>(false)
    const [ showAvatar, setShowAvatar ] = useState<boolean>(false)
    const [ showMenu, setShowMenu ] = useState<boolean>(false)
    const matches = useMediaQuery("(min-width: 992px)")
    const [ showMobileMenu, setShowMobileMenu ] = useState<boolean>(matches)


    const handleShowCart = useCallback(() => {
        setShowCart(!showCart)
    }, [showCart])

    const handleAvatar = useCallback(() => {
        setShowAvatar(!showAvatar)
    }, [showAvatar])

    const handleShowMenu = useCallback(() => {
        matches && setShowMenu(!showMenu)
    }, [showMenu])

    useEffect(() => {
        if (matches) {
            setShowMobileMenu(true)
        } else  {
            return
        }
    })
    return (
            <div className={styles.root}>
                <Head/>
                <div className={styles.header}>
                    <div className={styles.Root}>
                        <Burger show={showMobileMenu} setShow={setShowMobileMenu}/>
                        <Logo mobileMenuShow={showMobileMenu}/>
                        <SearchField/>
                        {
                            showMobileMenu && <nav
                                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                                            className={styles.Navbar}>
                                <ul onClick={(e)=> e.stopPropagation()}>
                                    <li>
                                        <button onClick={handleShowMenu}>Laptops</button>
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
                                {
                                    showMenu && <Menu/>
                                }
                            </nav>
                        }
                        {/*<SearchIcon/>*/}
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
                            <button
                                onClick={handleAvatar}
                            >
                                <Image
                                    width={36}
                                    height={36}
                                    src={'/images/avatar.png'}
                                    alt='avatar'
                                />
                            </button>
                            {
                                showAvatar && <div>
                                    <A href="/">My Account</A>
                                    <A href="/">My Wish List (0)</A>
                                    <A href="/">Compare (0)</A>
                                    <A href="/">Create Account</A>
                                    <A href="/">Sign In</A>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
    );
};


Header.displayName = 'Header'

export default memo(Header);