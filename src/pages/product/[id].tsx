import {NextPage} from "next";
import Image from "next/image";
import React, {useEffect, useState} from 'react';
import MainLayout from "layouts/MainLayout";
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import Tab1 from "pages/product/components/Tab1";
import Tab2 from "pages/product/components/Tab2";
import intelImg from "static/images/product/intel.png"
import rtxImg from "static/images/product/rtx.png"
import ssdImg from "static/images/product/ssd.png"
import ddrImg from "static/images/product/ddr.png"
import {
    FavoriteIcon,
    GrayArrowDownIcon,
    GrayArrowUpIcon, LineArrowSvg,
    MessageIcon,  PartnerLogo,
    PayPalButtonIcon,
    StatsIcon
} from "static/icons/icon";
import A from "components/UI/A/A";
import useMediaQuery from "hooks/useMediaQuery";
import {useGetProductQuery} from "services/ProductService";
import {useRouter} from "next/router";
import {useFetchAddToCartMutation, useFetchCartQuery, useFetchRemoveFromCartMutation} from "services/CartsService";
import styles from 'styles/pages/product.module.scss'
import Carousel from "components/UI/Carousel/Carousel";
import {SwiperSlide} from "swiper/react";
import Loading from "components/UI/Loading/Loading";

const tabs = [
    { id: 1, title: 'About Product' },
    { id: 2, title: 'Details' }
]

const breadcrumbs = [
    { path: '/', text: 'Home' },
    { path: '/laptops', text: 'Laptops' }
]

const Product: NextPage = () => {

    // =-------------- Logics and fetch for data --------------------=
    const router = useRouter()
    const { id } = router.query
    const { data: cart_products } = useFetchCartQuery('')
    const { data: product, isLoading } = useGetProductQuery(Number(id))
    const {data: cartProducts} = useFetchCartQuery('')
    const [addToCart] = useFetchAddToCartMutation()
    const [ removeFromCart ] = useFetchRemoveFromCartMutation()
    const [ tabNumber, setTabNumber ] = useState<number>(1)

    const is_in_cart = cart_products?.results?.find(item => (item?.product?.id === Number(id)))
    const cartId = cartProducts?.results.find(item => item.product.id === Number(id) )
    const quantityCart = cartId?.quantity ? cartId?.quantity : 0
    const quantityProduct = product?.quantity ? product?.quantity : 0

    // =----------------- control quantity in front ----------------=
    const [ amount, setAmount ] = useState<number>(quantityCart)
    const [ storageQuantity, setStorageQuantity ] = useState<number>(0)
    const total_price = (Number(product?.price) * amount) ? (Number(product?.price) * amount) : 0

    // =----------------- image width for responsive ---------------=
    const matches = useMediaQuery('(max-width: 767.98px)')
    const featureImgWidth = matches ? 100 : 136

    // =---------------- func for handling Tab1 or Tab2 component ---------------------=
    const handleSwitch = (id: number): void => {
        setTabNumber(id)
    }

    const handleAddToCart = () => {
        if (!is_in_cart) {
            setAmount(state => state + 1)
            addToCart({ quantity: amount + 1, product: Number(id) })
        }
    }

    const handleIncrement = () => {
        if ( (amount) < storageQuantity ) {
            setAmount(state => state + 1)
            addToCart({ quantity: amount + 1, product: Number(id) })
        }
    }

    const handleDecrement = () => {
        const MIN_QUANTITY = 1
        if ( (amount) > MIN_QUANTITY ) {
            setAmount(state => state - 1)
            addToCart({ quantity: amount - 1, product: Number(id) })
        } else if ((amount === MIN_QUANTITY))  {
            setAmount(state => state - 1)
            removeFromCart(Number(cartId?.id))
        }
    }

    useEffect(() => {
        if (!isLoading) {
            setAmount(quantityCart)
            setStorageQuantity(quantityProduct)
        }
    }, [isLoading, quantityCart, quantityProduct])


    return (
        isLoading ?
            <Loading/>
            :
        <MainLayout title="Product - id" description="MSI" mainClass="main_product">
            <div>
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
                                        <div>On Sale from <span>${total_price}</span></div>
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
                                        <button className={is_in_cart && styles.greenBtn} onClick={handleAddToCart} > { is_in_cart ? 'Added' : 'Add to Cart' } </button>
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
                                                <Tab1
                                                    color={product?.colors}
                                                    category={product?.category}
                                                    name={product?.name}
                                                    desc={product?.desc}
                                                /> :
                                                tabNumber === 2 ?
                                                    <Tab2
                                                        ram={product?.ram}
                                                        memory={product?.memory}
                                                        name={product?.name}
                                                        category={product?.category}
                                                    /> : null
                                        }
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
                                            <Carousel type='banner' autoplay={false} button={false} loop={false} pagination={true} >
                                                {
                                                    product && product?.product_images.map(item =>
                                                        <SwiperSlide key={item.id}>
                                                            <Image
                                                                width={500}
                                                                height={444}
                                                                alt="product"
                                                                objectFit={"cover"}
                                                                src={item.image}
                                                            />
                                                        </SwiperSlide>
                                                    )
                                                }
                                            </Carousel>
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
                            <Image
                                width={featureImgWidth}
                                height={featureImgWidth}
                                objectFit='cover'
                                objectPosition='center'
                                src={intelImg}
                                alt="feature"
                            />
                            <p><span>Intel® Core™ i7 </span> processor with the upmost computing power to bring you an unparalleled gaming experience.</p>
                        </div>
                        <div>
                            <Image
                                width={featureImgWidth}
                                height={featureImgWidth}
                                objectFit='cover'
                                objectPosition='center'
                                src={rtxImg}
                                alt="feature"
                            />
                            <p>The new <span>GeForce® RTX SUPER™</span> Series has more cores and higher clocks for superfast performance compared to previous-gen GPUs.</p>
                        </div>
                        <div>
                            <Image
                                width={featureImgWidth}
                                height={featureImgWidth}
                                objectFit='cover'
                                objectPosition='center'
                                src={ssdImg}
                                alt="feature"
                            />
                            <p>Unleash the full potential with the latest <span>SSD technology</span>, the NVM Express. 6 times faster than traditional SATA SSD.</p>
                        </div>
                        <div>
                            <Image
                                width={featureImgWidth}
                                height={featureImgWidth}
                                objectFit='cover'
                                objectPosition='center'
                                src={ddrImg}
                                alt="feature"
                            />
                            <p>Featuring the latest <span>10th Gen Intel® Core™</span> processors, memory can support up to DDR4 2933MHz to delivers an unprecedented gaming experience.</p>
                        </div>
                    </div>
                </div>
            </section>
                    </div>
        </MainLayout>
    );
};

export default Product;