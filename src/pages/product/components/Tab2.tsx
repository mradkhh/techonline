import React, {FC} from 'react';
import styles from './styles/Tab2.module.scss'
import A from "components/UI/A/A";

interface Tab2Props {
    name?: string,
    category?: string,
    memory?: string,
    ram?: string
}

const Tab2: FC<Tab2Props> =  ({ category, name, ram, memory }) => {
    return (
        <div className={styles.tab}>
            <h1>{category}</h1>
            <p>Be the first to review this product</p>
            <ol>
                <li> Intel Core i7-10700F</li>
                <li>  Intel H410</li>
                <li>WHITE</li>
                <li>NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6</li>
                <li>RAM: {ram}</li>
                <li>MEMORY: {memory}</li>
                <li>512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM</li>
                <li>Gaming Keyboard GK30 + Gaming Mouse GM11</li>
                <li>3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)</li>
                <li>Intel WGI219 WeatherNet (10/100/1000M)</li>
                <li>AX200 (WIFI 6)+BT5.1</li>
                <li>  PSU 330W</li>
                <li> Fan Cooler</li>
            </ol>
            <div>
                <div>Have a Question?  <A href="/contact">Contact Us</A></div>
                <span>{name}</span>
            </div>
        </div>
    );
};

export default Tab2;