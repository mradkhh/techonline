import React, {FC, useCallback, useState} from 'react';
import styles from "components/Header/Header.module.scss";
import {ArrowDown} from "static/icons/icon";
import {ICategories} from "models/index";
import A from "components/UI/A/A";

interface NavItemProps {
    item: ICategories,
    handleShowMenu: (id: number) => void
}

const NavItem: FC<NavItemProps> = ({ item, handleShowMenu }) => {

    const [ showSubmenu, setShowSubmenu ] = useState<boolean>(false)
    const handleShow = useCallback(() => {
        setShowSubmenu(!showSubmenu)
    }, [showSubmenu])
    return (
        <li onClick={handleShow} className={styles.nav_li} key={item?.id}>
            <button id={`${item?.id}`} className="headerList" onClick={() => handleShowMenu(item.id)}>{item.name} <ArrowDown/></button>
            {
                showSubmenu && <ul className={styles.navbar__submenu}>
                    {
                        item?.childs && item.childs.map(child => {
                            return <li key={child?.id}><A href={`${child?.name}`}>{child?.name}</A></li>
                        })
                    }
                </ul>
            }
        </li>
    );
};

export default NavItem;