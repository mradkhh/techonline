import React, {FC, useEffect, useState} from 'react';
import styles from './styles/CategoryItem.module.scss'

interface CategoryItemProps {
    id: number,
    setCategoryId: (arg: any) => void,
    name: string,
    clear: boolean
}

const CategoryItem: FC<CategoryItemProps> = ({ id, setCategoryId, name, clear }) => {

    const [ select, setSelect ] = useState<boolean>(false)

    const handleChoiceCategory = () => {
        setCategoryId((state: number[]) => {
            setSelect(!select)
            if (state?.find(i => i === id)) {
                return state.filter(item => item !== id)
            } else {
                return [...state, id]
            }
        })
    }

    useEffect(() => {
       setSelect(false)
    }, [clear] )

    return (
        <div
            onClick={handleChoiceCategory}
            key={id}
            className={styles.root}
            style={{border: select ? '1px solid var(--gray)' : '1px solid transparent'}}
        >
            <h5>{name}</h5>
        </div>
    );
};

export default CategoryItem