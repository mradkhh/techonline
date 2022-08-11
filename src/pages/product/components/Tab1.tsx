import React, {FC} from 'react';
import A from "components/UI/A/A";
import styles from './styles/Tab1.module.scss'

type colors = {
    id: number,
    name: string
}

interface Tab1Props {
    color?: colors[],
    desc?: string,
    name?: string,
    category?: string
}


const Tab1: FC<Tab1Props> = ({ category ,  desc, name, color }) => {
    return (
        <div className={styles.tab}>
            <h1>{category}</h1>
            <p>Be the first to review this product</p>
            <h3>{desc}</h3>

            <div>
                <div>Have a Question?  <A href="/contact">Contact Us</A></div>
                <span>{name}</span>
            </div>
        </div>
    );
};

export default Tab1;