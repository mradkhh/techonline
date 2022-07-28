import {NextPage} from "next";
import React, {useState} from 'react';
import Image from "next/image";
import MainLayout from "layouts/MainLayout";
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
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
import styles from 'styles/pages/shoppingcart.module.scss'
import Accordion from "components/UI/Accordion/Accordion";
import A from "components/UI/A/A";


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


    const handleIncrement = (id: number) => {
        setAmount(amount + 1)
    }

    const handleDecrement = (id: number) => {
        if ( amount > 0 ) {
            setAmount(amount - 1)
        }
    }
    return (
        <MainLayout title={"TechOnline - Cart"} description={"cart"} mainClass={'main_shoppingCart'}>
            <Breadcrumbs array={breadcrumbs} current="Login"/>
            <h1 className={styles.title}>Shopping Cart</h1>
            <section className={styles.content}>
                <div className={styles.table}>
                    <table>
                        <thead >
                        <tr className={styles.thead}>
                            <th>Item</th>
                            <th></th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            items && items.map(item =>
                                <tr key={item.id}>
                                    <td>
                                        <Image
                                            width={120}
                                            height={120}
                                            objectFit='cover'
                                            objectPosition='center'
                                            src={item.img}
                                            alt="feature"
                                        />
                                    </td>
                                    <td>
                                        <div className={styles.tableTitle}>
                                            { item.title }
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.price}>
                                            ${ item.price }
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.counter}>
                                            <span>{item.quantity}</span>
                                            <div>
                                                <button onClick={() => handleIncrement(item.id)}>
                                                    <GrayArrowUpIcon/>
                                                </button>
                                                <button onClick={() => handleDecrement(item.id)}>
                                                    <GrayArrowDownIcon/>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.subtotal}>
                                            ${item.subtotal}
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.tableBtn}>
                                            <button>
                                                <GrayXIcon/>
                                            </button>
                                            <button>
                                                <EditIcon/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <div className={styles.actionTable}>
                        <button>Continue Shopping</button>
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
        </MainLayout>
    );
};

export default Index;