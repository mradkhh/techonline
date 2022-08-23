import React, {FC, useState} from 'react';
import A from "components/UI/A/A";
import styles from './styles/Tab1.module.scss'
import ColorItem from "pages/product/components/ColorItem";

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

    const [ select, setSelect ] = useState<boolean>(false)

    console.log(color)

    const handleChoiceColor = () => {
        setSelect(!select)
    }
    return (
        <div className={styles.tab}>
            <h1>{name}</h1>
            <p>Be the first to review this product</p>
            <h3>{desc}</h3>
            <div className={styles.colors}>
                {
                    color && color.map(item => {
                        return <ColorItem key={item.id} id={item.id } name={item.name}/>
                    })
                }
            </div>
            <div>
                <div>Have a Question?  <A href="/contact">Contact Us</A></div>
                <span>{name}</span>
            </div>
        </div>
    );
};

export default Tab1;