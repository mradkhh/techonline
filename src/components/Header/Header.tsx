import dynamic from "next/dynamic";
import React, {createRef, FC, memo, useCallback, useContext, useEffect, useState} from 'react';
import Image from "next/image";
import axios from "axios";
import {Context} from "pages/_app";
import {API_URL} from "services/interseptors";
import {useFetchCartQuery} from "services/CartsService";
import {getRefreshToken, setAccessToken} from "utils/tokenStorage";
import {useFetching} from "hooks/useFetching";
import {useAppDispatch} from "hooks/redux";
import {useMousedownClickInvisible, useMouseoverClickInvisible} from "hooks/useMousedownClickInvisible";
import useMediaQuery from "hooks/useMediaQuery";
import {categoriesSlice} from "store/reducers/categoriesSlice";
import A from "components/UI/A/A";
import {AuthResponse} from "models/response/AuthResponse";
import { AvatarIcon, SearchIcon, ShoppingCartIcon} from "static/icons/icon";
import {brandsSlice} from "store/reducers/brandsSlice";
import {IBrands, ICategories} from "models/index";
import Minicart from "components/UI/Cart/Minicart";
import NavItem from "components/Header/UI/NavItem";
import SearchField from "components/UI/Inputs/SearchField";
import Logo from "components/UI/Logo/Logo";
import Burger from "components/UI/Burger/Burger";
import Menu from "components/UI/Menu/Menu";
import Head from "components/Header/UI/Head";
import styles from './Header.module.scss'

// const Minicart = dynamic(() => import("components/UI/Cart/Minicart"))
// const SearchField = dynamic(() => import("components/UI/Inputs/SearchField"))
// const Burger = dynamic(() => import("components/UI/Burger/Burger"))
// const Menu = dynamic(() => import("components/UI/Menu/Menu"))
// const NavItem = dynamic(() => import("components/Header/UI/NavItem"))
// const Logo = dynamic(() => import("components/UI/Logo/Logo"))
// const Head = dynamic(() => import("components/Header/UI/Head"))

interface HeaderProps {
    categories?: ICategories[]
}

const Header: FC<HeaderProps> = ({ categories }) => {
    const dispatch = useAppDispatch()
    const [ showCart, setShowCart ] = useState<boolean>(false)
    const [ showAvatar, setShowAvatar ] = useState<boolean>(false)
    const [ showMenu, setShowMenu ] = useState<boolean>(false)
    const [ search, setSearch ] = useState<boolean>(false)
    const matches = useMediaQuery("(min-width: 992px)")
    const [ showMobileMenu, setShowMobileMenu ] = useState<boolean>(matches)
    const { authStore } = useContext(Context)
    const { isAuth }  = authStore
    const [ catIdData, setCatIdData ] = useState<ICategories>({} as ICategories)
    const [ brandsData, setBrandsData ] = useState<IBrands>()

    const { fetchingSuccessBrands } = brandsSlice.actions

    const handleShowCart = useCallback(() => {
        setShowCart(!showCart)
    }, [showCart])

    const handleAvatar = useCallback(() => {
        setShowAvatar(!showAvatar)
    }, [showAvatar])

    const {data: cartResults, error, isLoading}: any = useFetchCartQuery('')
    const [ fetchCategoryId ] = useFetching(async (id: number) => {
        const res = await axios.get<ICategories>(`${API_URL}categories/${id}`)
        const data = res?.data
        setCatIdData(data)
    })

    const [ fetchBrandsByCategoryId ] = useFetching(async (id: number) => {
        const res = await axios.get(`${API_URL}brandes/?categorySearch=${id}`)
        const data = res?.data
        setBrandsData(data)
        dispatch(fetchingSuccessBrands(data))
    })

    const handleShowMenu = useCallback((id: number) => {
        matches && setShowMenu(true)
        fetchCategoryId(id)
        fetchBrandsByCategoryId(id)
    }, [matches, fetchCategoryId, fetchBrandsByCategoryId])

    const avatarRef = createRef<HTMLDivElement>()
    const cartRef = createRef<HTMLDivElement>()
    const menuRef = createRef<HTMLDivElement>()
    const navRef = createRef<HTMLUListElement>()

    // =----------------- custom hooks for mouse events ------------------------------=
    useMousedownClickInvisible(avatarRef, () => { setShowAvatar(false) })
    useMousedownClickInvisible(cartRef, () => { setShowCart(false) })
    useMousedownClickInvisible(menuRef, () => { setShowMenu(false)
        dispatch(categoriesSlice.actions.fetchingSuccessCategories({} as ICategories))
    })
    useMouseoverClickInvisible(navRef, () => { setShowMenu(true)})

    useEffect( () => {
        if (error?.status === 401) {
            try {
                axios.post<AuthResponse>(`${API_URL}me/refresh/`, { refresh: getRefreshToken() })
                    .then(res => {
                        setAccessToken(res.data?.access)
                    })
            } catch (e: any) {
                console.log(e.message)
                window.location.reload()
            }
            window.location.reload()
        }
    }, [isLoading, error])

    useEffect(() => { matches && setShowMobileMenu(true) }, [matches])

    useEffect(() => {
        let overflow = window.document.body.style.overflow
        search ? overflow = 'hidden' : overflow = 'unset'
    }, [search])

    return (
            <div className={styles.root}>
                <Head/>
                <header className={styles.header_section}>
                    <div ref={menuRef}>
                        { showMenu && <Menu data={catIdData}/> }
                    </div>
                    <div className={styles.header}>
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
                                 <li>
                                     <A href={"/"}>Bosh sahifa</A>
                                 </li>
                                {
                                    categories && categories.map((item) =>
                                        <NavItem key={item?.id} item={item} handleShowMenu={handleShowMenu}/>
                                    )
                                }
                                 <li>
                                     <A href={"/faq"}>Faq</A>
                                 </li>
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
                </header>
            </div>
    );
};


Header.displayName = 'Header'

export default memo(Header);