import React, {FC, memo} from 'react';
import A from "components/UI/A/A";
import cl from './Logo.module.scss'
import {BrandLogoIcon} from "static/icons/icon";

interface LogoProps {
    mobileMenuShow: boolean
}

const Logo: FC<LogoProps> = memo(({mobileMenuShow}) => {
    return (
        <A href='/'>
            <div className={mobileMenuShow ? cl.mobileRoot : cl.Root }>
                <BrandLogoIcon/>
            </div>
        </A>
    );
});

Logo.displayName = 'Logo'

export default Logo;