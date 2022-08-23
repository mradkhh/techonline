import React, {FC, useCallback, useState} from 'react';
import styles from "components/Header/Header.module.scss";
import {ArrowDown} from "static/icons/icon";
import {ICategories} from "models/index";

interface NavItemProps {
    item: ICategories,
    handleShowMenu: (id: number) => void
}

const NavItem: FC<NavItemProps> = ({ item, handleShowMenu }) => {

    const [ show, setShow ] = useState<boolean>(false)

    const handleShow = useCallback(() => {
        setShow(!show)
    }, [show])
    return (
        <li onClick={handleShow} className={styles.nav_li} key={item?.id}>
            <button id={`${item?.id}`} className="headerList" onClick={() => handleShowMenu(item.id)}>{item.name}</button>
                <ArrowDown/>
        </li>
    );
};

export default NavItem;