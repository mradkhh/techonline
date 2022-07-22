import React, {FC, memo} from 'react';
import A from "components/UI/A/A";
import cl from './Logo.module.scss'
import {BrandLogoIcon} from "static/icons/icon";

const Logo: FC = memo(() => {
    return (
        <A href='/'>
            <div className={cl.Root}>
                <BrandLogoIcon/>
            </div>
        </A>
    );
});

Logo.displayName = 'Logo'

export default Logo;