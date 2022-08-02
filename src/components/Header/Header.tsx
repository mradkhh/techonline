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

const navList = [
    {
        path: '/',
        id: 1,
        title: "Laptops"
    },
    {
        path: '/',
        id: 2,
        title: "Desktop PCs"
    },
    {
        path: '/',
        id: 3,
        title: "Networking Devices"
    },
    {
        path: '/',
        id: 4,
        title: "Printers & Scanners"
    },
    {
        path: '/',
        id: 5,
        title: "PC Parts"
    },
    {
        path: '/',
        id: 6,
        title: "All Other Products"
    },
    {
        path: '/',
        id: 7,
        title: "Repairs"
    },


]

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

    const handleShowMenu = useCallback((id: number) => {
        matches && setShowMenu(!showMenu)
        console.log(id)
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
                                    {
                                        navList && navList.map((item) =>
                                            <li key={item.id}>
                                                <button onClick={() => handleShowMenu(item.id)}>{item.title}</button>
                                            </li>
                                        )
                                    }
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