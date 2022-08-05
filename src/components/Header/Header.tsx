import React, {FC, memo, useCallback, useContext, useEffect, useState} from 'react';
import Image from "next/image";
import Logo from "components/UI/Logo/Logo";
import Head from "components/Header/UI/Head";
import Minicart from "components/UI/Cart/Minicart";
import A from "components/UI/A/A";
import Menu from "components/UI/Menu/Menu";
import {AvatarIcon, ShoppingCartIcon} from "static/icons/icon";
import SearchField from "components/UI/Inputs/SearchField";
import Burger from "components/UI/Burger/Burger";
import styles from './Header.module.scss'
import useMediaQuery from "hooks/useMediaQuery";
import {Context} from "pages/_app";
import {useRouter} from "next/router";

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
    const { storeMobx } = useContext(Context)
    const { isAuth }  = storeMobx
    const router = useRouter()

    const handleShowCart = useCallback(() => {
        setShowCart(!showCart)
    }, [showCart])

    const handleAvatar = useCallback(() => {
        setShowAvatar(!showAvatar)
    }, [showAvatar])

    const handleShowMenu = useCallback((id: number) => {
        matches && setShowMenu(!showMenu)
    }, [showMenu])

    useEffect(() => {
        if (matches) {
            setShowMobileMenu(true)
        } else  {
            return
        }
    }, [matches])

    useEffect(() => {
        if(isAuth) {
            router.push({
                pathname: '/'
            })
        }
    }, [isAuth])


    return (
            <div className={styles.root}>
                <Head/>
                <div className={styles.header}>
                    {
                        showMenu && <Menu/>
                    }
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
                                        {
                                            isAuth ?
                                                <Image
                                                    width={36}
                                                    height={36}
                                                    src={'/images/avatar.png'}
                                                    alt='avatar'
                                                />
                                                :
                                                <div className={styles.userAvatar}>
                                                    <AvatarIcon/>
                                                </div>
                                        }
                                    </button>
                                    {
                                        showAvatar && <div>
                                            {
                                                isAuth ?
                                                    <>
                                                        <A href="/dashboard">My Account</A>
                                                        <A href="/dashboard">My Wish List (0)</A>
                                                        <A href="/dashboard">Compare (0)</A>
                                                        <button
                                                            onClick={() => storeMobx.logout()}
                                                            style={{color: 'var(--red)'}}
                                                        >Logout</button>
                                                    </>
                                                    :
                                                    <>
                                                        <A href="/register">My Account</A>
                                                        <A href="/register">My Wish List (0)</A>
                                                        <A href="/register">Compare (0)</A>
                                                        <A href="/register">Create Account</A>
                                                        <A href="/register">Sign in</A>
                                                    </>

                                            }
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