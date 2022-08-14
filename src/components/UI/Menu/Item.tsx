import React, {createRef, FC, useState} from 'react';
import {ICategories} from "models/index";
import {ArrowDown} from "static/icons/icon";
import {useFetchCategoryByIdQuery} from "services/CategoriesService";
import styles from './Item.module.scss'
import {useMousedownClickInvisible} from "hooks/useMousedownClickInvisible";

interface ItemProps {
    id: number,
    item: ICategories,
    handleClick: (id: number) => void,
    setArrowMotion: (bool: boolean) => void,
    arrowMotion: boolean
}

const Item: FC<ItemProps> = ({ item, setArrowMotion, arrowMotion, handleClick, id }) => {

    const [ show, setShow ] = useState<boolean>(false)

    const itemRef = createRef<HTMLDivElement>()
    const { data } = useFetchCategoryByIdQuery(id)

    const handleFetch = () => {
        setShow(!show)
    }

    useMousedownClickInvisible(itemRef, () => {
        setShow(false)
    })

    return (
                <div onClick={() => handleClick(item.id)} key={item?.id} className={styles.childMenu}>
                    <div onClick={handleFetch} className={styles.menuItem} >
                        {item?.name}
                        <div
                            id={`${item.id}`}
                            className={`${styles.arrow} ${show && styles.motion} ${!show && styles.motion_down} menuList`}>
                            <ArrowDown/>
                        </div>
                    </div>
                    <div className={styles.insideMenu}>
                        <div ref={itemRef}>
                            {
                                show && <div>
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
                            }
                        </div>
                    </div>
                </div>
    );
};

export default Item;