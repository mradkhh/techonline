import React, {createRef, FC, useState} from 'react';
import {ICategories} from "models/index";
import {ArrowDown} from "static/icons/icon";
import styles from './Item.module.scss'
import {useMousedownClickInvisible} from "hooks/useMousedownClickInvisible";
import ProductCard from "components/UI/Cards/ProductCard";
import { useFetching } from 'hooks/useFetching';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import { API_URL } from 'services/interseptors';
import axios from 'axios';
import {categoriesSlice} from 'store/reducers/categoriesSlice';

interface ItemProps {
    id: number,
    item: ICategories,
    handleClick: (id: number) => void,
    setArrowMotion: (bool: boolean) => void,
    arrowMotion: boolean
}

const Item: FC<ItemProps> = ({ item, setArrowMotion, arrowMotion, handleClick, id }) => {

    const [ show, setShow ] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const { categories } = useAppSelector(state => state.categories)

    const itemRef = createRef<HTMLDivElement>()

    const { fetching, fetchingError, fetchingSuccessCategories } = categoriesSlice.actions

    const [ fetchCategoryId ] = useFetching(async (id: number) => {
        const res = await axios.get<ICategories>(`${API_URL}categories/${id}`)
        const data = res?.data
        dispatch(fetchingSuccessCategories(data))
    })

    const handleFetch = () => {
        setShow(!show)
        fetchCategoryId(id)
    }

    useMousedownClickInvisible(itemRef, () => {
        setShow(false)
    })

    return (
        <div onClick={() => handleClick(item.id)} key={item?.id} className={styles.childMenu}>
            <div
                style={{backgroundColor: show ? 'var(--light-blue)' : 'var(--white)'}}
                onClick={handleFetch}
                className={styles.menuItem} >
                {item?.name}
                <div
                    id={`${item.id}`}
                    className={`${styles.arrow} ${show && styles.motion} ${!show && styles.motion_down} menuList`}>
                    <ArrowDown/>
                </div>
            </div>
        <div className={styles.insideMenu}>
            <div ref={itemRef}>
                {/*{*/}
                {/*    show && <div>*/}
                {/*        {*/}
                {/*            categories && categories?.childs?.map(item => {*/}
                {/*                return <Item*/}
                {/*                    key={item.id}*/}
                {/*                    id={item.id}*/}
                {/*                    item={item}*/}
                {/*                    handleClick={()=> handleClick(item.id)}*/}
                {/*                    setArrowMotion={setArrowMotion}*/}
                {/*                    arrowMotion={arrowMotion}*/}
                {/*                />*/}
                {/*            })*/}
                {/*        }*/}
                {/*    </div>*/}
                {/*}*/}
            {/*{*/}
            {/*    categories && show && categories?.products && categories?.products?.map(item => {*/}
            {/*        return <ProductCard*/}
            {/*            rating={5}*/}
            {/*            id={item.id}*/}
            {/*            key={item.id}*/}
            {/*            image={item?.product_img?.image}*/}
            {/*            title={item.short_desc}*/}
            {/*            price={item.price}*/}
            {/*            discountPrice={item.discount}*/}
            {/*            isInStock={item.is_stock}*/}
            {/*        />*/}
            {/*    })*/}
            {/*}*/}
            </div>
        </div>
        </div>
    );
};

export default Item;