import dynamic from "next/dynamic";
import React, {FC, memo} from 'react';
import A from "components/UI/A/A";
import {FacebookIcon, InstagramIcon} from "static/icons/icon";
import cl from './styles/Head.module.scss'

const ShopInfo = dynamic(() => import("components/Header/UI/ShopInfo"))

const Head: FC = () => {
    return (
            <div className={cl.Root}>
                <div className={cl.Content}>
                    <ShopInfo/>
                    <div className={cl.Center}><h6>Visit our showroom in 1234 Street Address City Address, 1234</h6>
                        <A href='/'> Contact Us</A>
                    </div>
                    <div className={cl.Right}>
                        <h5>Call Us: (00) 1234 5678</h5>
                        <A href='/'>
                            <FacebookIcon/>
                        </A>
                        <A href='/'>
                            <InstagramIcon/>
                        </A>
                    </div>
                </div>
            </div>
    );
};

export default memo(Head);