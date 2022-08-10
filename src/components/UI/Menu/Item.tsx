import React, {FC} from 'react';
import {ICategories} from "models/index";
import {ArrowDown} from "static/icons/icon";
import {useFetchCategoryByIdQuery} from "services/CategoriesService";
import styles from './Item.module.scss'

interface ItemProps {
    id: number,
    item: ICategories,
    handleClick: (id: number) => void,
    setArrowMotion: (bool: boolean) => void,
    arrowMotion: boolean
}

const Item: FC<ItemProps> = ({ item, setArrowMotion, arrowMotion, handleClick, id }) => {

    const { data } = useFetchCategoryByIdQuery(id)

    return (
                <div onClick={() => handleClick(item.id)} key={item?.id} className={styles.childMenu}>
                    <div onClick={() => setArrowMotion(!arrowMotion)} className={styles.menuItem} >
                        {item?.name}
                        <div
                            id={`${item.id}`}
                            className={`${styles.arrow} ${arrowMotion && styles.motion} menuList`}>
                            <ArrowDown/>
                        </div>
                    </div>
                    <div className={styles.insideMenu}>
                        {
                            data && data?.childs?.map(item => {
                                return <Item key={item.id}
                                             id={item.id}
                                             item={item}
                                             handleClick={handleClick}
                                             setArrowMotion={setArrowMotion}
                                             arrowMotion={arrowMotion}
                                />
                            })
                        }
                    </div>
                </div>
    );
};

export default Item;