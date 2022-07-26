import Image from "next/image";
import React, {FC} from 'react';
import Img from "static/images/catalogs/1.png";
import {EditIcon, GrayXIcon, PayPalButtonIcon} from "static/icons/icon";
import styles from './Minicart.module.scss'


interface MinicartProps {
    show: boolean
}

const Minicart: FC<MinicartProps> = ({ show }) => {


    if (show) {
        return (
            <div className={styles.cart}>
                <div className={styles.header}>
                    <h4>My Cart</h4>
                    <p>2 item in cart</p>
                    <button>View or Edit Your Cart</button>
                </div>
                <div className={styles.body}>
                    <div>
                        <span>1x</span>
                        <Image
                            width={65}
                            height={65}
                            objectFit='cover'
                            objectPosition='center'
                            src={Img}
                            alt="item"
                        />
                        <h4>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h4>
                        <div>
                            <button>
                                <GrayXIcon/>
                            </button>
                            <button>
                                <EditIcon/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <h3>Subtotal: <span>$499.00</span></h3>
                    <div>
                        <button>Go to Checkout</button>
                        <button>Check out with
                            <PayPalButtonIcon/>
                        </button>
                    </div>
                </div>
            </div>
        )
    } else {
        return <></>
    }
};

export default Minicart;