import {NextPage} from "next";
import React, {useContext, useEffect, useState} from 'react';
import Image from "next/image";
import MainLayout from "layouts/MainLayout";
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import Accordion from "components/UI/Accordion/Accordion";
import A from "components/UI/A/A";
import {
    EditIcon,
    GrayArrowDownIcon,
    GrayArrowUpIcon,
    GrayXIcon,
    PartnerLogo,
    PayPalButtonIcon
} from "static/icons/icon";
import img1 from "static/images/products/1.jpg"
import img2 from "static/images/products/2.jpg"
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {fetchCarts, fetchRemoveFromToCart} from "services/CartsService";
import styles from 'styles/pages/shoppingcart.module.scss'
import {Context} from "pages/_app";

const breadcrumbs = [
    { path: '/', text: 'Home' }
]

const items = [
    {
        id: 1,
        img: img1,
        title: "MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty",
        price: 4349,
        quantity: 1,
        subtotal: 13400
    },
    {
        id: 2,
        img: img2,
        title: "MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty",
        price: 4349,
        quantity: 1,
        subtotal: 13400
    },
    {
        id: 2,
        img: img2,
        title: "MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty",
        price: 4349,
        quantity: 1,
        subtotal: 13400
    },
    {
        id: 2,
        img: img2,
        title: "MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty",
        price: 4349,
        quantity: 1,
        subtotal: 13400
    }
]

const Index: NextPage = () => {
    const [ amount, setAmount ] = useState<number>(1)
    const { product } = useAppSelector(state => state.carts)
    const [ refresh, setRefresh ] = useState<boolean>(false)
    const dispatch = useAppDispatch()

    const { authStore } = useContext(Context)

    console.log(product)

    const handleIncrement = (id: number) => {
        const newObj = items.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
            } else {
                return item
            }
        })
    }

    const handleDecrement = (id: number) => {
        if ( amount > 0 ) {
            setAmount(amount - 1)
        }
    }

    const handleDelete = (id: number) => {
        dispatch(fetchRemoveFromToCart(id))
        setRefresh(false)
    }

    useEffect(() => {
        dispatch(fetchCarts())
    }, [refresh])


    return (
        <MainLayout title={"TechOnline - Cart"} description={"cart"} mainClass={'main_shoppingCart'}>
            <Breadcrumbs array={breadcrumbs} current="Login"/>
            <h1 className={styles.title}>Shopping Cart</h1>
            {
                authStore.isAuth ?
                    <section className={styles.content}>
                        <div className={styles.table}>
                            <div className={styles.tableHead}>
                                <h5>Item</h5>
                                <h5>Price</h5>
                                <h5>Qty</h5>
                                <h5>Subtotal</h5>
                            </div>
                            {
                                product && product?.map(( {product, quantity, id})=>
                                    <div key={id} className={styles.tableBody}>
                                        <div className={styles.tableImgCell}>
                                            <div className={styles.tableImg}>
                                                <Image
                                                    width={120}
                                                    height={120}
                                                    objectFit='cover'
                                                    objectPosition='center'
                                                    src={product?.product_img?.image ? product?.product_img?.image : img1 }
                                                    alt="feature"
                                                />
                                            </div>
                                            <div className={styles.tableTitle}>
                                                { product?.short_desc }
                                            </div>
                                        </div>
                                        <div className={styles.tableInfo}>
                                            <div className={styles.price}>
                                                ${ product?.price }
                                            </div>
                                            <div className={styles.counter}>
                                                <span>{quantity}</span>
                                                <div>
                                                    <button onClick={() => handleIncrement(product.id)}>
                                                        <GrayArrowUpIcon/>
                                                    </button>
                                                    <button onClick={() => handleDecrement(product.id)}>
                                                        <GrayArrowDownIcon/>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={styles.subtotal}>
                                                ${ product?.price * quantity }.00
                                            </div>
                                            <div className={styles.tableBtn}>
                                                <button onClick={() => handleDelete(id)} >
                                                    <GrayXIcon/>
                                                </button>
                                                <button>
                                                    <EditIcon/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            <div className={styles.actionTable}>
                                <A href="/catalog">Continue Shopping</A>
                                <button>Clear Shopping Cart</button>
                                <button>Update Shopping Cart</button>
                            </div>
                        </div>
                        <div className={styles.summary}>
                            <h3>Summary</h3>
                            <Accordion header="Estimate Shipping and Tax">
                                <div className={styles.estimate}>
                                    <p>Enter your destination to get a shipping estimate.</p>
                                </div>
                            </Accordion>
                            <Accordion header="Apply Discount Code">
                                <div className={styles.applyInfo}>
                                    <h6>Subtotal <span>$13,047.00</span></h6>
                                    <h6>Shipping  <span>$21.00</span></h6>
                                    <p>(Standard Rate - Price may vary depending on the item/destination. TECS Staff will contact you.)</p>
                                    <h6>Tax <span>$1.91</span></h6>
                                    <h6>GST (10%) <span>$1.91</span></h6>
                                    <h6>Order Total <span>$13,068.00</span></h6>
                                </div>
                            </Accordion>
                            <div className={styles.actionBtns}>
                                <button>Proceed to Checkout</button>
                                <button>Check out with <PayPalButtonIcon/></button>
                                <button>Check Out with Multiple Addresses</button>
                            </div>
                            <div className={styles.ads}>
                                <PartnerLogo/>
                                <h3><span>own</span> it now, up to 6 months interest free  </h3>
                                <A href='/'> learn more</A>
                            </div>
                        </div>
                    </section>
                    :
                    <section className={styles.notAuth}>
                        <h1>Not Found</h1>
                        <A href={'/register'}>Registration</A>
                    </section>
            }
        </MainLayout>
    );
};

export default Index;