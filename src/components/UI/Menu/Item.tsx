import React, {FC} from 'react';
import styles from './Item.module.scss'
import {ICategories, IProduct} from "models/index";

interface ItemProps {
    categories: ICategories,
    products: IProduct[]
}


const Item: FC<ItemProps> = ({  }) => {
    return (
        <div className={styles.root}>

        </div>
    );
};

export default Item;