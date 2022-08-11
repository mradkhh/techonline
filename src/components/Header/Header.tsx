import React, {createRef, FC, memo, useCallback, useContext, useEffect, useState} from 'react';
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
import {useMousedownClickInvisible, useMouseoverClickInvisible} from "hooks/useMousedownClickInvisible";
import styles from './Header.module.scss'
import {ICategories} from "models/index";
import {useFetching} from "hooks/useFetching";
import axios, {AxiosResponse} from "axios";
import {API_URL} from "services/interseptors";
import {fetchCarts, useFetchCartQuery} from "services/CartsService";
import {useAppDispatch} from "hooks/redux";


interface HeaderProps {
    categories?: ICategories[]
}

const Header: FC<HeaderProps> = ({ categories }) => {
    const [ showCart, setShowCart ] = useState<boolean>(false)
    const [ showAvatar, setShowAvatar ] = useState<boolean>(false)
    const [ showMenu, setShowMenu ] = useState<boolean>(false)
    const [ search, setSearch ] = useState<boolean>(false)
    const [ isInMenuArea, setIsInMenuArea ] = useState<boolean>(false)
    const matches = useMediaQuery("(min-width: 992px)")
    const [ showMobileMenu, setShowMobileMenu ] = useState<boolean>(matches)
    const { authStore } = useContext(Context)
    const { isAuth }  = authStore
    const [ catIdData, setCatIdData ] = useState<ICategories>({} as ICategories)

    const handleShowCart = useCallback(() => {
        setShowCart(!showCart)
    }, [showCart])

    const handleAvatar = useCallback(() => {
        setShowAvatar(!showAvatar)
    }, [showAvatar])

    const {data: cartResults} = useFetchCartQuery('')

    const [ fetchCategoryId ] = useFetching(async (id: number) => {
        const res = await axios.get<ICategories>(`${API_URL}categories/${id}`)
        const data = res?.data
        setCatIdData(data)
    })

    const handleShowMenu = useCallback((id: number) => {
        matches && setShowMenu(true)
        fetchCategoryId(id)
    }, [showMenu, matches])

    const avatarRef = createRef<HTMLDivElement>()
    const cartRef = createRef<HTMLDivElement>()
    const menuRef = createRef<HTMLDivElement>()
    const navRef = createRef<HTMLUListElement>()

    useMousedownClickInvisible(avatarRef, () => { setShowAvatar(false) })
    useMousedownClickInvisible(cartRef, () => { setShowCart(false) })
    useMousedownClickInvisible(menuRef, () => { setShowMenu(false)})
    useMouseoverClickInvisible(navRef, () => { setShowMenu(true) })

    useEffect(() => {

        if (matches) {
            setShowMobileMenu(true)
        } else  {
            return
        }
    }, [matches])

    useEffect(() => {
        if (search) {
            window.document.body.style.overflow = 'hidden'
        } else {
            window.document.body.style.overflow = 'unset'
        }
    }, [search])

    return (
            <div className={styles.root}>
                <Head/>
                <div className={styles.header}>
                        <div
                            ref={menuRef}
                            onClick={() => setIsInMenuArea(true)}>
                            {
                                showMenu && <Menu setIsInMenuArea={setIsInMenuArea} data={catIdData}/>
                            }
                        </div>
                    <div className={styles.Root}>
                        <Burger show={showMobileMenu} setShow={setShowMobileMenu}/>
                        <Logo mobileMenuShow={showMobileMenu}/>
                        <div
                            onClick={() => setSearch(false)}
                            className={[styles.searchField, search ? ' searchEffect' : ''].join('')}>
                            <SearchField search={search} />
                        </div>
                        {
                            showMobileMenu &&
                            <nav
                                onClick={() => setShowMobileMenu(!showMobileMenu)}
                                className={styles.Navbar}>
                             <ul ref={navRef} onClick={(e)=> e.stopPropagation()}>
                                {
                                    categories && categories.map((item) =>
                                        <li key={item?.id}>
                                            <button id={`${item?.id}`} className="headerList" onClick={() => handleShowMenu(item.id)}>{item.name}</button>
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
                                    {!((cartResults?.results?.length ? cartResults?.results?.length : 0) <= 0) && <span>{cartResults?.results?.length}</span>}
                                </button>
                                { showCart && <div ref={cartRef} >
                                    <Minicart product={cartResults?.results} />
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
                                                        <div
                                                            style={{cursor: 'pointer'}}
                                                            onClick={() => authStore.setShowModal(true)} >Create Account</div>
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