import React, {createRef, FC, memo, RefAttributes, useCallback, useContext, useEffect, useState} from 'react';
import Image from "next/image";
import Logo from "components/UI/Logo/Logo";
import Head from "components/Header/UI/Head";
import Minicart from "components/UI/Cart/Minicart";
import A from "components/UI/A/A";
import Menu from "components/UI/Menu/Menu";
import {AvatarIcon, SearchIcon, ShoppingCartIcon} from "static/icons/icon";
import SearchField from "components/UI/Inputs/SearchField";
import Burger from "components/UI/Burger/Burger";
import useMediaQuery from "hooks/useMediaQuery";
import {Context} from "pages/_app";
import {useMousedownClickInvisible} from "hooks/useMousedownClickInvisible";
import styles from './Header.module.scss'



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
    const [ search, setSearch ] = useState<boolean>(false)
    const matches = useMediaQuery("(min-width: 992px)")
    const [ showMobileMenu, setShowMobileMenu ] = useState<boolean>(matches)
    const { authStore } = useContext(Context)
    const { isAuth }  = authStore

    const handleShowCart = useCallback(() => {
        setShowCart(!showCart)
    }, [showCart])

    const handleAvatar = useCallback(() => {
        setShowAvatar(!showAvatar)
    }, [showAvatar])


    const handleShowMenu = useCallback((id: number) => {
        matches && setShowMenu(!showMenu)
    }, [showMenu, matches])

    const avatarRef = createRef<HTMLDivElement>()
    const cartRef = createRef<HTMLDivElement>()

    useMousedownClickInvisible(avatarRef, () => { setShowAvatar(false) })
    useMousedownClickInvisible(cartRef, () => { setShowCart(false) })

    useEffect(() => {
        if (matches) {
            setShowMobileMenu(true)
        } else  {
            return
        }
    }, [matches])

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
                        <div
                            onClick={() => setSearch(false)}
                            className={[styles.searchField, search ? ' searchEffect' : ''].join('')}>
                            <SearchField search={search} />
                        </div>
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
                        {
                            !search && <button
                                            onClick={() => setSearch(!search)}
                                            className={styles.searchIcon}>
                                            <SearchIcon/>
                                        </button>
                        }
                            <div className={styles.Basket}>
                                <button
                                    onClick={handleShowCart}
                                    >
                                    <ShoppingCartIcon/>
                                    <span>3</span>
                                </button>
                                { showCart && <div ref={cartRef} >
                                    <Minicart/>
                                </div> }
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
                                        showAvatar && <div ref={avatarRef}>
                                            {
                                                isAuth ?
                                                    <>
                                                        <A href="/dashboard">My Account</A>
                                                        <A href="/dashboard">My Wish List (0)</A>
                                                        <A href="/dashboard">Compare (0)</A>
                                                        <button
                                                            onClick={() => {
                                                                authStore.logout()
                                                                window.location.reload()
                                                            }}
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