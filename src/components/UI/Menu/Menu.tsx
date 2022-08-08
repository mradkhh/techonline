import React, {FC} from 'react';
import img1 from "static/images/catalogs/1.png";
import ProductCard from "components/UI/Cards/ProductCard";
import styles from './Menu.module.scss'


const Menu: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div onClick={(e)=> e.stopPropagation()} className={styles.menu}>
                <div>
                    <div>Everyday Use Notebooks</div>
                    <div>MSI Workstation Series</div>
                    <div>MSI Prestige Series</div>
                    <div>Gaming Notebooks</div>
                    <div>Tablets And Pads</div>
                    <div>Netbooks</div>
                    <div>Infinity Gaming Notebooks</div>
                </div>
                <div>
                    <div>MSI Workstation Series</div>
                    <div>MSI Prestige Series</div>
                </div>
                <div className={styles.cards}>
                </div>
            </div>
        </div>
    );
};

export default Menu;