import React, {FC} from 'react';
import A from "components/UI/A/A";
import styles from './styles/Tab1.module.scss'

interface Tab1Props {

}


const Tab1: FC<Tab1Props> = ({  }) => {
    return (
        <div className={styles.tab}>
            <h1>MSI MPG Trident 3</h1>
            <p>Be the first to review this product</p>
            <h3>MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop</h3>
            <div>
                <div>Have a Question?  <A href="/contact">Contact Us</A></div>
                <span>SKU D5515AI</span>
            </div>
        </div>
    );
};

export default Tab1;