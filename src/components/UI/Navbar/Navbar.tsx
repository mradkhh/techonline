import React, {FC, memo} from 'react';
import A from "components/UI/A/A";
import cl from './Navbar.module.scss'

const Navbar: FC = memo(() => {
    return (
        <nav className={cl.Root}>
            <ul className={cl.List}>
                <li>
                    <A href='/'>Bosh sahifa</A>
                </li>
                <li>
                    <A href='/serial'>Seriallar</A>
                </li>
                <li>
                    <A href='/konsert'>Konsert</A>
                </li>
                <li>
                    <A href='/trailer'>Treyler</A>
                </li>
            </ul>
        </nav>
    );
});

Navbar.displayName = 'Navbar'

export default Navbar;