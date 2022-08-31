import dynamic from "next/dynamic";
import React, {FC, memo} from 'react';
import {LocationIcon, TimeIcon} from "static/icons/icon";
import cl from './styles/ShopInfo.module.scss'

const Dropdown  = dynamic(() => import("components/UI/Dropdown/Dropdown"))

const ShopInfo: FC = () => {
    return (
            <div className={cl.Root}>
                <Dropdown title={<h5 className={cl.Title}>Mon-Thu:  <span> 9:00 AM - 5:30 PM</span></h5>}>
                    <div className={cl.Content}>
                        <div className={cl.Time}>
                            <span>
                                <TimeIcon/>
                            </span>
                            <div>
                                <h6>We are open:</h6>
                                <h5>Mon-Thu: <span> 9:00 AM - 5:30 PM</span></h5>
                                <h5>Fr:  <span>9:00 AM - 6:00 PM</span></h5>
                                <h5>Mon-Thu: <span> 9:00 AM - 5:30 PM</span></h5>
                            </div>
                        </div>
                        <div className={cl.Location}>
                            <span>
                                <LocationIcon/>
                            </span>
                            <div>Address: 1234 Street Address, City Address, 1234</div>
                        </div>
                        <div className={cl.Phones}>
                            <h6>Phones: <span>(00) 1234 5678</span></h6>
                            <h6>E-mail: <span>shop@email.com</span></h6>
                        </div>
                    </div>
                </Dropdown>
            </div>
    );
};

export default memo(ShopInfo);